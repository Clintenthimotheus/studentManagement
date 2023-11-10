import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-full-details',
  templateUrl: './view-full-details.component.html',
  styleUrls: ['./view-full-details.component.css']
})
export class ViewFullDetailsComponent implements OnInit {

  genderid: string = ""
  genderName: string = ""

  departmentName: string = ""
  departmentid: string = ""

  studentview: any = []
  studentId: string = ""
  constructor(private activeRoute: ActivatedRoute, private api: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data: any) => {
      console.log(data);
      console.log(data.id);
      this.studentId = data.id
      this.api.viewStudent(this.studentId).subscribe((result: any) => {
        console.log(result);
        this.studentview = result

        this.departmentid = result.departmentId
        this.api.getDepartmentName(this.departmentid).subscribe((data: any) => {
          console.log(data);
          this.departmentName = data.batch

          this.genderid = result.genderId
          this.api.getGenderName(this.genderid).subscribe((datas: any) => {
            console.log(datas);
            this.genderName = datas.type

          })
        })
      })
    })
  }
  deleteStudent(studentId:any){
    this.api.deleteStudent(studentId ).subscribe((results:any)=>{
      alert("Delete Successfully")
      this.router.navigateByUrl('/')
      
    })
  }
}
