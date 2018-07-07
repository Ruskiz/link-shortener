import { FormControl, ValidatorFn } from "@angular/forms";
import {AbstractControl} from '@angular/forms';

export class PasswordValidator {
 static PasswordCheck(passwordV:boolean): ValidatorFn{     
    return (controls:FormControl) : {[key: string]: any} => {
      let value = controls.value;
      
      /** Проверка на содержание цифр */
        let hasNumber = /[0-9]/.test(value);
        /** Проверка на содержание заглавных букв */
        let hasCapitalLetter = /[A-Z]/.test(value);
        /** Проверка на содержание прописных букв */
        let hasLowercaseLetter = /[a-z]/.test(value);
         
        /** Общая проверка */
        let passwordValid = hasNumber && hasCapitalLetter && hasLowercaseLetter ;
        
        if (!passwordValid) {  
            return { passwordV: '' }; 
           // console.log(passwordV);            
          // return { passwordV: { value: controls.value}};
             
        } else {
            return null;    
        }
    }
 }
 
    // static MatchPassword(AC: AbstractControl) {        
    //    let password = AC.get('password').value; 
    //    let repeatPassword = AC.get('repeatPassword').value; 
    //     if(password != repeatPassword) {
    //         console.log('false');
    //         AC.get('repeatPassword').setErrors( {MatchPassword: true} )
    //     } else {
    //         console.log('true');
    //         return null
    //     }
    // }
}
