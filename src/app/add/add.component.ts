import { Component, OnInit } from '@angular/core';
import { mystudent } from 'src/model/mystudent';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {



  contact:mystudent={} //all student details
  fullGender:any=[] //to hold gender information
  fullDpmt:any=[]


  constructor(private api:ApiService ,private router:Router){
    this.contact.departmentId="Select department"
    this.contact.genderId="Select a Gender"
  }
  ngOnInit(): void {
   this.api.getGender().subscribe((data:any)=>{
    console.log(data);
    this.fullGender=data

  
    
   })
     this.api.getDpmt().subscribe((datas:any)=>{
      console.log(datas);
      this.fullDpmt=datas

      
      
    })
  }
  addStu(){
    this.api.addContactName(this.contact).subscribe((result:any)=>{
      this.router.navigateByUrl('/')
    })
  }
}
