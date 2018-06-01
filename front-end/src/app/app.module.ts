import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

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
