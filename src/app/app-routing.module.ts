import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewFullDetailsComponent } from './view-full-details/view-full-details.component';

const routes: Routes = [
  { //localhost:4200->http://localhost:4200/mainComponent
    path:'',redirectTo:'mainComponent',pathMatch:"full"
  },
  { //main page
    path:'mainComponent',component:MainComponent
  },
  {// add student
    path:'mainComponent/addStudent',component:AddComponent
  },
  { // edit student
    path:'mainComponent/editStudent/:id',component:EditComponent
  },
  { //view page
    path:'mainComponent/viewPage/:id',component:ViewPageComponent
  },
  { //viewFullDetails
    path:'mainComponent/viewPage/viewFullDetails/:id',component:ViewFullDetailsComponent
   },
  { //page not found
    path:'**',component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
