import { FormControl, FormGroup, Validators, ValidatorFn } from "@angular/forms";
import { PasswordValidator } from "./form.validator";


export class UserFormControl extends FormControl {

    label: string;
    modelProperty: string;
    
    constructor(label:string, property:string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }
    
    getValidationMessages() {
        let messages: string[] = [];
        if (this.errors) {
            for (let errorName in this.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`Введите ${this.label}`);
                        break;
                    case "email":
                        messages.push(`${this.label} введен неверно`);
                    break;
                    case "minlength":
                        messages.push(`Минимальная длина ${this.label}   
                        ${this.errors['minlength'].requiredLength} символа`);
                        break;
                    case "maxlength":
                        messages.push(`Максимальная ${this.label} длина
                        ${this.errors['maxlength'].requiredLength} символа`);
                        break;
                    case "PasswordCheck":
                            messages.push(`Пароль должен сожержать заглавные буквы,
                            прописные буквы и цифры`);
                        break;
                }
            }
        }
        return messages;
    }
}
export class UserFormGroup extends FormGroup {
    constructor() {
    super({
        name: new UserFormControl("Имя","name", "", 
                Validators.compose([
                    Validators.required,
                    Validators.pattern("^[A-Za-z ]+$"),
                    Validators.minLength(3),
                    Validators.maxLength(10)])),
        email: new UserFormControl("Email","email", "",
                   Validators.email),
        password: new UserFormControl("Пароль","password", "",
                Validators.compose([                    
                    Validators.required,
                    Validators.maxLength(32),
                    Validators.minLength(5),
                    PasswordValidator.PasswordCheck(false),
                    //PasswordValidator.MatchPassword
                   // this.passwordsAreEqual()
                   ])), 
        repeatPassword: new UserFormControl("Подтвердите пароль","repeatPassword", "",
                Validators.compose([
                    Validators.required,
                     Validators.maxLength(32),
                    Validators.minLength(5),
                    PasswordValidator.PasswordCheck(false),
                   // PasswordValidator.MatchPassword
                   // PasswordValidator.PasswordCheck(true)
                    
                    ])),                
            }
        );

        }
        // private passwordsAreEqual():ValidatorFn{
        //     return (group: FormGroup): {[key: string]: any} =>{
        //         if (!(group.dirty || group.touched) || 
        //         group.get('pwd').value === group.get('confirm').value){
        //             return null;                    
        //         }
        //         return {
        //             custom: "Пароль не совподает!"
        //         }
        //     }
        // }
        

        
       }