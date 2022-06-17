import { Component, Input, OnChanges } from "@angular/core";

@Component (
    {
        selector: 'app-star',
        templateUrl: './star.component.html',
        styleUrls: ['./star.component.css']
    }
)

export class StarComponent implements OnChanges {
    
    @Input() //Cria uma variável elegível para receber alguma informação de um componente externo.
    rating: number = 0;
    starWidth!: number; //Caso não tenha a exclamação, ele acusará um erro de que nesta classe, ela não foi inicializada e não está definida no construtor

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }
}