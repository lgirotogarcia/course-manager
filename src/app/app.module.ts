import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/navBar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([ // Serão usadas as rotas padrões do Angular para essa aplicação. Elas servem para fazer a refência dos componentes via URL
            { // Objeto de rota do path base da aplicação
        path: '', // ROTA PADRÃO. Path vazio faz referência a raíz da aplicação.
        redirectTo: 'courses', // Redirecionará para /courses na URL.
        pathMatch: 'full'
      },
      {
        path: '**', // ROTA PADRÃO. Quando não encontrar uma rota, será redirecionado para ele.
        component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
