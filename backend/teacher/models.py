from sqlalchemy import Column,Integer,VARCHAR,Date,Float,ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Teacher(Base):
    __tablename__ = 'teacher'
    
    id = Column(Integer,primary_key=True,index=True)
    firstname =  Column(VARCHAR(100))
    lastname = Column(VARCHAR(100))
    email = Column(VARCHAR(200))
    hashpassword = Column(VARCHAR(300))
    
    tinfo = relationship('TeacherInfo',back_populates='tea')
    
class TeacherInfo(Base):
    __tablename__ = "teacherinfo"
    
    regno = Column(Integer,primary_key=True,index=True)
    address = Column(VARCHAR(30))
    city= Column(VARCHAR(30))
    pin = Column(VARCHAR(100))
    state = Column(VARCHAR(100))
    phone = Column(VARCHAR(30))
    mobile= Column(VARCHAR(30))
    email = Column(VARCHAR(100))
    sex = Column(VARCHAR(100))
    m_status = Column(VARCHAR(100))
    DOB = Column(VARCHAR(100))
    DOJ = Column(VARCHAR(100))
    DEPT = Column(VARCHAR(100))
    basic_pay = Column(VARCHAR(100))
    teacher_id = Column(Integer, ForeignKey('teacher.id'))

    tea = relationship('Teacher', back_populates='tinfo')