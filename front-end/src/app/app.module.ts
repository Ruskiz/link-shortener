import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LinkComponent } from './link/link.component';
import { FirstList } from "./first.list";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'start',
        component: AppComponent,
        canActivate: [FirstList]
     },
      {
         path: 'registration',
         component: RegistrationComponent,
         canActivate: [FirstList]
      }
   ]),
   RouterModule.forRoot([
      {
         path: 'login',
         component: LoginComponent,
         canActivate: [FirstList]
      }
   ]),
   RouterModule.forRoot([
    {
       path: 'link',
       component: LinkComponent,
       canActivate: [FirstList]
    },
    
    { path: "**", redirectTo: "/login" }
 ])
  ],
  providers: [FirstList],
  bootstrap: [AppComponent]
})
export class AppModule { }
