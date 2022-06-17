import { Component, OnInit } from "@angular/core"; // Importação de component
import { Course } from "./course"
@Component (
    { // Caracteristicas que o component terá
        selector: 'app-course-list', //Onde tiver app será uma referencia a algum componente na nossa aplicação
        templateUrl: './course-list.component.html'
    }
)

export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit() {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imgUrl: 'assets/img/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'June, 16, 2022'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imgUrl: 'assets/img/http.png',
                price: 44.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'March, 28, 2022'
            }
        ]
    }
}