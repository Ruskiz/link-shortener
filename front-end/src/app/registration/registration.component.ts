import { Component} from '@angular/core';
import { NgForm } from "@angular/forms";
import { User } from "../user.model";
import { UserFormGroup } from "./form.model";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'], 
    
})
export class RegistrationComponent {
  form: UserFormGroup = new UserFormGroup();

  //для хранения данных, введенных на форме пользователем
  newUser: User = new User();
 
  // возвращает представление свойства newUser в формате JSON
  get jsonUser() {
    return JSON.stringify(this.newUser);
  }
  //выводит значение метода jsonUser на консоль
  addUser(p: User) {
    console.log("New User: " + this.jsonUser);
  }
  
  //указывает, была ли отправлена форма и используется для предотвращения проверки всей формы до того, 
  //как пользователь попытается отправить данные
  formSubmitted: boolean = false;
  //вызывается при отправке формы
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addUser(this.newUser);
      this.newUser = new User();
      form.reset(); //обнуляет форму
      this.formSubmitted = false;
    }
  }
}