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


@app.get('/',tags=['Teachers'], response_model=sc.showUser)
def get_teacher(u:sc.showUser=Depends(sv.get_current_user)):
    return u

@app.post('/create', tags=['Teachers'])
def create_teacher(t:sc.teacher_schema, db:Session=Depends(sv.get_db)):
    hashed_password = sv.hash_password(t.hashpassword)
    cs = models.Teacher(firstname = t.firstname, lastname = t.lastname, email = t.email, hashpassword = hashed_password)
    db.add(cs)
    db.commit()
    db.refresh(cs)
    user = db.query(models.Teacher).filter(models.Teacher.email==t.email).first()
    token=sv.gen_token(email=user.email,usrId=user.id)
    return {
       "access_token":token,
       "token_type":"bearer"
    }
    
@app.put('/update/{id}', tags=['Teachers'])
def update_teacher(id:int,t:sc.teacher_schema, db:Session=Depends(sv.get_db)):
    hashed_password = sv.hash_password(t.hashpassword)
    db.query(models.Teacher).filter(models.Teacher.id == id)\
    .update({'firstname':t.firstname, 'lastname':t.lastname, 'email':t.email, 'hashpassword':hashed_password},synchronize_session=False)
    db.commit()
    return {
        'status' : 'teacher updated successfully'
    }
    
@app.delete('/delete/{id}', tags=['Teachers'])
def delete_Teacher(id:int, db:Session=Depends(sv.get_db)):
    db.query(models.Teacher).filter(models.Teacher.id == id).delete(synchronize_session=False)
    db.commit()
    return {
        'status' : 'teacher deleted successfully'
    }



@app.get('/teacher/info',tags=['Teacher Info'],response_model=sc.showTeacherInfo)
def get_teacherInfo(u:dict=Depends(sv.get_current_user), db:Session=Depends(sv.get_db)):
    sim = db.query(models.TeacherInfo).filter(models.TeacherInfo.Teacher_id == u.id).first()
    return sim

@app.post('/teacher/info',tags=['Teacher Info'])
def create_info(t:sc.teacherinfo_schema,db:Session=Depends(sv.get_db)):
    cim = models.TeacherInfo(regno = t.regno,address = t.address,city= t.city,pin = t.pin,state = t.state,phone = t.phone,mobile= t.mobile,email = t.email,sex = t.sex,m_status = t.m_status,DOB = t.DOB,DOJ = t.DOJ,DEPT = t.DEPT,nature_of_job = t.nature_of_work,basic_pay = t.basic_pay,teacher_id = t.teacher_id)
    db.add(cim)
    db.commit()
    db.refresh(cim)
    return {
        'status' : 'tea info created successfully'
    }


