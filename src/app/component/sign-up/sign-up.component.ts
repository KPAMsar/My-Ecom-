import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HttpHeaders } from '@angular/common/http';


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

  ngOnInit(): void {
  }
  onSignupSubmit(data:any){
    this.service.signup(data).subscribe(
      response =>{
        console.log(response);
      }
    )
  }

}
