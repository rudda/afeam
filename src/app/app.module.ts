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
import { RelatoriosPageComponent } from './relatorios-page/relatorios-page.component';
import { AddAtendentePageComponent } from './add-atendente-page/add-atendente-page.component';
import { AtendentePageComponent } from './atendente-page/atendente-page.component';
import { DashAtendentPageComponent } from './dash-atendent-page/dash-atendent-page.component';
import { AddClientePageComponent } from './add-cliente-page/add-cliente-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashAdminPageComponent,
    RelatoriosPageComponent,
    AddAtendentePageComponent,
    AtendentePageComponent,
    DashAtendentPageComponent,
    AddClientePageComponent

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
        path: 'atendente',
        component: AtendentePageComponent

      },

      {
        path: 'addatendente',
        component: AddAtendentePageComponent

      },

        {
          path: 'dash-adm',
          component: DashAdminPageComponent

        }
        ,

        {
          path: 'relatorios',
          component: RelatoriosPageComponent

        },
        {
          path: 'addcliente',
          component: AddClientePageComponent

        },





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
