import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PersonalBiographyComponent } from './personal-biography/personal-biography.component';
import { ProjectHighlightsComponent } from './project-highlights/project-highlights.component';

const routes: Routes = [
  
  {path:'home', component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'personal-biography', component:PersonalBiographyComponent},
  {path:'project-highlights', component:ProjectHighlightsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
