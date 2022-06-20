import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component'
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/navBar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseEditComponent } from './courses/course-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseEditComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ // Serão usadas as rotas padrões do Angular para essa aplicação. Elas servem para fazer a refência dos componentes via URL
      { // Objeto de rota de listagem de cursos
        path: 'courses', // Path da rota faz referência ao /courses.
        component: CourseListComponent // Quando nesse path, exibe o CourseListComponent no escopo declarado em app.component.html.
      },
      {
        path: 'courses/edit/:id', // Para acessar um path de uma "lista", como nesse caso, é usado o ID para acessar um path específico. Então, para acessar o ID, é usado após o "último" caminho, ":id". 
        component: CourseEditComponent
      },
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
