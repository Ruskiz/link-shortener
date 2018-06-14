import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id   
})
export class LoginComponent implements OnInit {
	myFirstReactiveForm: FormGroup;
	
   constructor(private fb: FormBuilder) { }
   ngOnInit() {
	this.initForm();
   }

   onSubmit() {
const controls = this.myFirstReactiveForm.controls;

 /** Проверяем форму на валидность */ 
 if (this.myFirstReactiveForm.invalid) {
  /** Если форма не валидна, то помечаем все контролы как touched*/
  Object.keys(controls)
   .forEach(controlName => controls[controlName].markAsTouched());
   
   /** Прерываем выполнение метода*/
   return;
  }

 /** TODO: Обработка данных формы */
 console.log(this.myFirstReactiveForm.value);
}

   isControlInvalid(controlName: string): boolean {
	const control = this.myFirstReactiveForm.controls[controlName];
 	const result = control.invalid && control.touched;
 	return result;
   }

   /** Инициализация формы*/
private initForm() {
    this.myFirstReactiveForm = this.fb.group({
      email: ['', [
        Validators.required, Validators.email
      ]
      ],
      password: ['', [
        Validators.required
      ]
      ]
    });
  }
	
}