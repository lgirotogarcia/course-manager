import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./component/nav-bar/navBar.component";
import { Error404Component } from "./component/error-404/error-404.component";

@NgModule ({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', // ROTA PADRÃO. Quando não encontrar uma rota, será redirecionado para ele.
                component: Error404Component
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})

export class CoreModule {

}