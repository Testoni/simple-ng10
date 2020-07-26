import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MyFormModule } from './my-form/my-form.module';
@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    MyFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
