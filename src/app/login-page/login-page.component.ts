import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user =  {

    cpf: '',
    senha: ''

  };

  constructor() { }

  ngOnInit() {
  }

  onLogin() {

    console.log('hello!!', this.user);

  }

}
