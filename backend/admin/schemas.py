from pydantic import BaseModel



class admin_schema(BaseModel):
    firstname : str
    lastname : str
    email : str
    hashpassword : str
    
    class Config():
        orm_mode = True

    
