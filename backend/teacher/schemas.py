from pydantic import BaseModel



class teacher_schema(BaseModel):
    firstname : str
    lastname : str
    email : str
    hashpassword : str
    
    class Config():
        orm_mode = True

class teacherinfo_schema(BaseModel):
    regno:int
    address : str
    city : str
    pin : int
    state : str
    phone : int
    mobile : int
    email: str
    sex : str
    m_status : str
    DOB : str
    DOJ : str
    DEPT : str
    basic_pay : float
    teacher_id : int




class showUser(BaseModel):
    id : int 
    firstname : str
    email : str
    sinfo : list[teacher_schema]
    
    class Config():
        orm_mode = True
        
class showTeacherInfo(BaseModel):
    regno:int
    address : str
    city : str
    pin : int
    state : str
    phone : int
    mobile : int
    email: str
    sex : str
    m_status : str
    DOB : str
    DOJ : str
    DEPT : str
    basic_pay : float
    teacher_id : int
    
    class Config():
        orm_mode = True

