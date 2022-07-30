import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { CoursesComponent } from './component/courses/courses.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponent},
  {path:'cours', component:CoursesComponent},
  {path:'contact', component:ContactComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:ShopingCartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
