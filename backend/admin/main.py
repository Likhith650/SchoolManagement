from fastapi.security import OAuth2PasswordRequestForm
from fastapi import FastAPI,Depends,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import timedelta
from database import engine
import service as sv
import schemas as sc
import uvicorn
import models

app = FastAPI()

origins = [
           "http://127.0.0.1:3000",
           "http://127.0.0.1:3000/register",
           "http://127.0.0.1:8000",
           "http://localhost:3000",
           ]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)


@app.post('/token',tags=['Login Form'])
def login_form(form_data:OAuth2PasswordRequestForm=Depends(),db:Session=Depends(sv.get_db)):
    user = sv.user_authenticate(form_data.username,form_data.password,db=db)
    if not user:
        raise HTTPException(
            status_code=404,
            detail='user not found'
        )
    token_expire = timedelta(minutes=60)
    token = sv.gen_token(user.email,user.id,expire_delta=token_expire)
    return {
       "access_token":token,
       "token_type":"bearer"
    }


@app.get('/',tags=['Admin'], response_model=sc.admin_schema)
def get_admin(u:sc.admin_schema=Depends(sv.get_current_user)):
    return u


@app.post('/create', tags=['Admin'])
def create_admin(a:sc.admin_schema, db:Session=Depends(sv.get_db)):
    hashed_password = sv.hash_password(a.hashpassword)
    cs = models.Admin(firstname = a.firstname, lastname = a.lastname, email = a.email, hashpassword = hashed_password)
    db.add(cs)
    db.commit()
    db.refresh(cs)
    user = db.query(models.Admin).filter(models.Admin.email==a.email).first()
    token=sv.gen_token(email=user.email,usrId=user.id)
    return {
       "access_token":token,
       "token_type":"bearer"
    }
    
#service call 




