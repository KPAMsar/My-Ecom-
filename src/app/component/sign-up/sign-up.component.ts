import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { from } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private service :AuthService) { }
  myheader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:'sdfsfsdff'
  });

   reactiveForm:FormGroup;
   thisEmailIsTaken:boolean = false; 

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name:new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required],this.emailAlreadyTaken ),
      password : new FormControl(null)
    })
  }
  onSignupSubmit(){
    // this.service.signup(data).subscribe(
    //   response =>{
    //     console.log(response);
    //   }
    // )\
    console.log(this.reactiveForm);
  }
  getUsers(){
    this.service.getUsers().subscribe(
      response => {
        console.log(response);
      });
  }

  emailAlreadyTaken(control:FormControl):Promise<any> | Observable<any>{
    const response = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'kpamsarshija@gmail.com'){
          resolve(this.thisEmailIsTaken =true);
        }  else
        {
          resolve(null);
        }
      },5000 );

      
    });
    return response;

  }

}
