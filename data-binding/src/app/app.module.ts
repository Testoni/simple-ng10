import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MyFormModule } from './my-form/my-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicleComponent } from './cicle/cicle.component';
import { YellowBackgroundDirective } from './shared/yellow-background.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicleComponent,
    YellowBackgroundDirective,
    CustomDirectivesComponent
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
