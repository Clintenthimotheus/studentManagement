import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { department } from 'src/model/mydepartment';
import { gender } from 'src/model/mygender';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
departments:department[]=[] //department
genders:gender[]=[] //gender

  student:any=[]
  studentId:any=""
  constructor(private activeRoute:ActivatedRoute,private api:ApiService,private router:Router){}


  ngOnInit(): void {
    this.activeRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.id);
      this.studentId=data.id
      this.api.viewStudent(this.studentId).subscribe((result:any)=>{
        console.log(result);
        this.student=result
        
//department
        this.api.getDpmt().subscribe((datas:any)=>{
          console.log(datas);
          this.departments=datas
        })

//gender
        this.api.getGender().subscribe((details:any)=>{
          console.log(details);
          this.genders=details
          
        })
      })
    })
  }

  //add
  updateStudent(){
    this.api.updateStudent(this.studentId,this.student).subscribe((resu:any)=>{
      console.log(resu);
      this.router.navigateByUrl('/')
    })
  }


}
