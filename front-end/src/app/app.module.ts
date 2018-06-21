import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegistComponent } from './components/regist/regist.component';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
  RegistComponent,
  LoginComponent
  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
      RouterModule.forRoot([
         {
            path: 'regist',
            component: RegistComponent
         }
      ]),
      RouterModule.forRoot([
         {
            path: 'login',
            component: LoginComponent
         }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }