//Esse arquivo é para criar um Pipe "personalizado" com uma função não nativa do Angular.

import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'replace' //nome do Pipe dentro do decorator (app.module.ts) e declara-lo no HTML (course-list.component.html, logo depois do símbolo "|")
})

export class ReplacePipe implements PipeTransform{
    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }
}