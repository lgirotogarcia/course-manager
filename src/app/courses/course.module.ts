import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ReplacePipe } from "../pipe/replace.pipe";
import { StarComponent } from "../star/star.component";
import { CourseEditComponent } from "./course-edit.component";
import { CourseListComponent } from "./course-list.component";

@NgModule ({
    declarations: [
        CourseListComponent,
        CourseEditComponent,
        ReplacePipe,
        StarComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { // Objeto de rota de listagem de cursos
                path: 'courses', // Path da rota faz referência ao /courses.
                component: CourseListComponent // Quando nesse path, exibe o CourseListComponent no escopo declarado em app.component.html.
              },
              {
                path: 'courses/edit/:id', // Para acessar um path de uma "lista", como nesse caso, é usado o ID para acessar um path específico. Então, para acessar o ID, é usado após o "último" caminho, ":id". 
                component: CourseEditComponent
              }
            ])
    ]
})

export class CourseModule {

}