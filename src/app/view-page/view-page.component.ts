import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  allstudent:any=[];
  searchKey:any=[];

  // department
  
  // departmentName: string = ""
  // departmentid: string = ""

constructor(private api:ApiService){}
  ngOnInit(): void {
   this.api.getStudentContact().subscribe((data:any)=>{
    console.log(data);
    this.allstudent=data
    console.log(data.departmentId);
    

    
  //   this.departmentid = data.departmentId
  //   this.api.getDepartmentName(this.departmentid).subscribe((data: any) => {
  //     console.log(data);
  //     this.departmentName = data.batch
  //  })
  })

  }
  search(event:any){
    console.log(event);
    console.log(event.target.value);
    this.searchKey=event.target.value
    
    
  }
}
