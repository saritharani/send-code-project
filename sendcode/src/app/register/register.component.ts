import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  firstName;
  lastName;
	emailId;
	password;
  mobileNumber;
  response;
  
  constructor(private reg:RegisterService){

  }

  register(){
     var user={
       firstName:this.firstName,
       lastName:this.lastName,
       emailId:this.emailId,
       password:this.password,
       mobileNumber:this.mobileNumber
     }
     console.log(user);
    // var result=localStorage.getItem(this.emailId);
    this.reg.registerUser(user).subscribe( (data) => {
            this.response=data;
    });
  }
}
