import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistComponent } from './components/regist/regist.component';




@NgModule({
  declarations: [
    AppComponent,
	RegistComponent
	
	
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
