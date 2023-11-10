import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { mystudent } from 'src/model/mystudent';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //get all students
  getStudentContact():Observable<mystudent>{
    return this.http.get('http://localhost:3000/students')
    
  }
  //view particular students
 viewStudent(studentId:string){
  return this.http.get(`http://localhost:3000/students/${studentId}`)
 }
  //get department
getDepartmentName(departmentid:string){
  return this.http.get(` http://localhost:3000/department/${departmentid}`)
}
//get gender name
getGenderName(genderid:string){
  return this.http.get(`http://localhost:3000/gender/${genderid}`)
}
//get add
addContactName(contactBody:any){
  return this.http.post(`http://localhost:3000/students`,contactBody)
}
//get all gender
getGender(){
  return this.http.get(`http://localhost:3000/gender`)
}
//get all department
getDpmt(){
  return this.http.get(`http://localhost:3000/department`)
}


//API call for delete a particular contact
deleteStudent(contactId:any){
  return this.http.delete(` http://localhost:3000/students/${contactId}`)
}

//update student
updateStudent(contactId:any,contactBody:any){
  return this.http.put(`http://localhost:3000/students/${contactId}`,contactBody)

}


}
