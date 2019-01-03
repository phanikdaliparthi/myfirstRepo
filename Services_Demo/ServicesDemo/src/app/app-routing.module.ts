import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpMethodsComponent } from './http-methods/http-methods.component';

const routes: Routes = [{path:'home', component:HomeComponent},
{path:'services', component:ServicesComponent},
{path:'contact', component:ContactUsComponent},
{path:'getpost', component:HttpMethodsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
