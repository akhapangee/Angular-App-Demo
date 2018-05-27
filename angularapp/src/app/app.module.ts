import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdboxComponet } from './components/adbox/adbox.component';
import { StudentComponent } from './components/student/student.component';
import { StudentService } from './services/StudentService';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdboxComponet,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
