import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(allstudent:any[],searchTearm:string,propsName:string): any[] {
    

    if(!allstudent||searchTearm==''||propsName==''){
      return allstudent
    }
    const result:any[]=[]

    allstudent.forEach((stud:any)=>{
      if(stud[propsName].trim().toLowerCase().includes(searchTearm.trim().toLocaleLowerCase()))
       result.push(stud)
    })
    return result;
  }

}
