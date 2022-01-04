import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  password:any;
  confirmPassword:any;
  passwordMatch:boolean = false;
  hide:boolean = true;
  confirmHide:boolean = true;

  //Constructor
  constructor(
    private _formBuilder: FormBuilder
  ){
    this.signUpForm = _formBuilder.group({
      firstname: new FormControl("",[Validators.required]),
      lastname: new FormControl("",[Validators.required]),
      mobileNumber : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      email: new FormControl("",[Validators.required]),
      username : new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      password : new FormControl("",[Validators.required]),
      confirmPassword : new FormControl("",[Validators.required])
    });
  }


  //OnInit Method
ngOnInit(){
  // this.signUpForm.reset({

  // })
}

checkError(errorName:any){
  
    return()=>{
      this.signUpForm.controls['firstname'].hasError(errorName);
      this.signUpForm.controls['lastname'].hasError(errorName);
      this.signUpForm.controls['mobileNumber'].hasError(errorName);
      this.signUpForm.controls['email'].hasError(errorName);
      this.signUpForm.controls['username'].hasError(errorName);
      this.signUpForm.controls['password'].hasError(errorName);
      this.signUpForm.controls['confirmPassword'].hasError(errorName);
    } 

  }


  signUp(){
    if(this.password !== this.confirmPassword){
      this.passwordMatch = true;
      return;
    }else{
      this.passwordMatch = false;
    }
  }
}
