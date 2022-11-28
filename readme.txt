********************************************************************************** School controller  ***************************************************************************************
v0.0.1
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Authentication and system access 

** Collection schema
   >> Signup (It can be only used by super admin)
      >> full name
      >> user id
      >> password 
      >> Designation (Seleted filed --> Admin, Teacher, Transporter, Hr)
      >> Creation password
   

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Accounts 
## Students fees
## Staff salary
## Stationary goods
## Transportation expenses
## Misellenious expenses


** Collection schema
   >> Accounts department (Selected fields --> Stundent, Staff, Stationary, Transportation, Misellenious)
   >> date 
   >> Amount flow (Selected fields --> In, out)
   >> Amount 
   >> notes 
   >> vendor name (if amount flowed out)
   >> Recipt no 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Staff
## Staff designation
## Staff Attendence
## Staff Info
## Staff caricullam

** Collection schema
  
   >> Staff Info  <-------- collection one
      >> name
      >> mobile no.
      >> address 
      >> exp years 
      >> income
      >> Designation (Seleted filed --> Admin, Teacher, Transporter, Hr)
      >> Specialization
   >> Staff attendence  <-------- collection two
      >> Name (linked with Staff Info ----> name)
      >> Date 
      >> present (true or false)
   >> Staff Caricullam  <-------- collection three
      >> Name (linked with Staff Info ----> name)
      >> Subject
      >> Day (Selective fileds --> Monday, Tuesday, Wendesday, Thursday, Friday, Saturday)
      >> Slot (Selective fileds --> one, two, three, four, five, six, seven, eight, nine, ten)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Student
## Student fees 
## Student performance reports
## Student parents info
## Student attandence

** Collection schema

   >> Student info
      >> Name
      >> Age
      >> standard 
      >> gr no
      >> roll  no
      >> parents name 
      >> contact number
      >> address
  
  >> Student performance reports
     >> Name (linked with Student info ----> name)
     >> Standard (linked with Student info ----> standard)
     >> term (selected filed --> start term, mid term, final term) 
     >> Result (Subject name and marks)
     >> percentage
     >> rank
     >> achivement
     >> notes 
     
  >> Student parents info
     >> Sender name (linked with Staff Info ----> name)
     >> action date
     >> info
     
  >> Student attandence
     >> Name (linked with Student info ----> name)
     >> Date
     >> present (true, false)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
v0.0.2

Issue with current designation

> All api's can we assissable through single token

>> Solution : Need to check designation in token and need to make groups of api as per designation.
              Need to even add methods in groups so that from one token all methods shouldn't be accessibale.

> Incomplete api's , not all required methods present
>> Solution : Need to make get, put, post api for Accounts 
              Need to make get, put, post api for staff info, staff attandence, staff caricullam
              Need to make get, put, post api for student info, student performance reports, student parents info, student attandence

              > Accounts > Post > only accessibale by super admin