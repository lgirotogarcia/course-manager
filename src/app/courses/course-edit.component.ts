import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService} from "./course.service";
import { Course } from "./course"
@Component({
    templateUrl: './course-edit.component.html'
})

export class CourseEditComponent implements OnInit{
    course!: Course;
    
    constructor (private activatedRoute: ActivatedRoute, private courseService: CourseService) {

    }

    ngOnInit(): void {
         this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
            next: course =>  this.course = course,
            error: err => console.log('Error: ', err)
         })  // O "+" converte a string para número, o "!" para tirar a necessidade de uma condicional para confirmar se não é null.
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved successfully', course),
            error: err => console.log('Error', err)
        })
    };
}