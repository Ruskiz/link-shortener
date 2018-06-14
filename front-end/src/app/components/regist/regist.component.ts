import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],
  moduleId: module.id   
})
export class RegistComponent implements OnInit {
	
   myFirstReactiveFormR: FormGroup;
	
   constructor(private fb: FormBuilder) { }
   ngOnInit() {
	this.initForm();
   }

   onSubmit() {
const controls = this.myFirstReactiveFormR.controls;

 /** Проверяем форму на валидность */ 
 if (this.myFirstReactiveFormR.invalid) {
  /** Если форма не валидна, то помечаем все контролы как touched*/
  Object.keys(controls)
   .forEach(controlName => controls[controlName].markAsTouched());
   
   /** Прерываем выполнение метода*/
   return;
  }

 /** TODO: Обработка данных формы */
 console.log(this.myFirstReactiveFormR.value);
}

   isControlInvalid(controlName: string): boolean {
	const control = this.myFirstReactiveFormR.controls[controlName];
 	const result = control.invalid && control.touched;
 	return result;
   }

   

   /** Инициализация формы*/
private initForm() {
    this.myFirstReactiveFormR = this.fb.group({
      name: ['', [
        Validators.required, 
        Validators.pattern(/[A-z, А-я]/),
        Validators.minLength(3)
      ]
      ],
      email: ['', [
        Validators.required, Validators.email
      ]
      ],
      password: ['', [
        Validators.required,
        Validators.maxLength(32), 
        this.passwordValidator
      ]
      ],
      repeatPassword: ['', [
      	Validators.required,
        Validators.maxLength(32), 
        this.passwordValidator
        /**this.customValidator*/
      ]
      ]
    });
  }
  
	/** Валидатор пароля */
private passwordValidator(control: FormControl): ValidationErrors {
 const value = control.value;
 /** Проверка на содержание цифр */
 const hasNumber = /[0-9]/.test(value);
 /** Проверка на содержание заглавных букв */
 const hasCapitalLetter = /[A-Z]/.test(value);
 /** Проверка на содержание прописных букв */
 const hasLowercaseLetter = /[a-z]/.test(value);
 /** Проверка на минимальную длину пароля */
 const isLengthValid = value ? value.length > 7 : false;
 
/** Общая проверка */
 const passwordValid = hasNumber && hasCapitalLetter && hasLowercaseLetter && isLengthValid;

 if (!passwordValid) {
  return { invalidPassword: '' };
 }
  return null;
}
/** Валидатор пароля repeat */
/**private customValidator(control: FormControl) : ValidationErrors {  
	if (this.myFirstReactiveFormR.value.password!== this.myFirstReactiveFormR.value.repeatPassword) {
		return { invalidPassword: '' };
	}    
    return null;  
  }*/

}
