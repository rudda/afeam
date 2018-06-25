import { Component, OnInit } from '@angular/core';
import {Router, Route } from '@angular/router';

@Component({
  selector: 'app-atendente-page',
  templateUrl: './atendente-page.component.html',
  styleUrls: ['./atendente-page.component.css']
})
export class AtendentePageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  novo() {

    this.router.navigate(['addatendente']);

  }

  buscar() {


  }

}
