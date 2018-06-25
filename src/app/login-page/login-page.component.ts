import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onLogin() {

    console.log('hello!!', this.user);
    this.router.navigate(['/dash-adm']);

  }

}
