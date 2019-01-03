import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetCompComponent } from './get-comp/get-comp.component';
import { PostCompComponent } from './post-comp/post-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { GetOneBookComponent } from './get-one-book/get-one-book.component';

@NgModule({
  declarations: [
    AppComponent,
    GetCompComponent,
    PostCompComponent,
    DeleteComponentComponent,
    GetOneBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
