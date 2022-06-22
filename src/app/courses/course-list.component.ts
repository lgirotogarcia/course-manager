import { Component, OnInit } from "@angular/core"; // Importação de component
import { Course } from "./course"
import { CourseService } from "./course.service";
@Component (
    { // Caracteristicas que o component terá
        // selector: 'app-course-list', //Onde tiver app será uma referencia a algum componente na nossa aplicação. Por usar rota, não é mais necessário o selector.  A referencia agora será link de rotas.
        templateUrl: './course-list.component.html'        
    }
)

export class CourseListComponent implements OnInit {
    filteredCourses: Course[] = [];

    _courses: Course[] = [];
    
    _filterBy!: string; // Avisar para os desenvolvedores que estarão lendo que essa variável deve ficar somente nesse componente

    constructor (private courseService: CourseService) {}

    ngOnInit() {
        this.retrieveAll()
    }
    
    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err),
        });
    }
    
    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted successfuly');
                this.retrieveAll();
            }
        })
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course:Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}