import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { DashAdminPageComponent } from './dash-admin-page/dash-admin-page.component';
import {Routes, RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashAdminPageComponent

  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([

      {
        path: '',
        component: LoginPageComponent

      },

        {
          path: 'dash-adm',
          component: DashAdminPageComponent

        }

    ]),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
