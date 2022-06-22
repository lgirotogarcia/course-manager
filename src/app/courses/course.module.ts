import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { StarModule } from "../shared/component/star/star.module";
import { CourseEditComponent } from "./course-edit.component";
import { CourseListComponent } from "./course-list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule ({
    declarations: [
        CourseListComponent,
        CourseEditComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        AppPipeModule,
        StarModule,
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