from sqlalchemy import Column,Integer,VARCHAR,Date,Float,ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class   Admin(Base):
    __tablename__ = 'admin'
    
    id = Column(Integer,primary_key=True,index=True)
    firstname =  Column(VARCHAR(100))
    lastname = Column(VARCHAR(100))
    email = Column(VARCHAR(200))
    hashpassword = Column(VARCHAR(300))
    
   