import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-admin-page',
  templateUrl: './dash-admin-page.component.html',
  styleUrls: ['./dash-admin-page.component.css']
})
export class DashAdminPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {


    this.loadAtendentePage();


  }

  loadAtendentePage() {

    this.router.navigate(['/atendente']);

  }


}
