import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-edit.component.html'
})

export class CourseEditComponent implements OnInit{
    courseId!: Number
    
    constructor (private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
          this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')!  // O "+" converte a string para número, o "!" para tirar a necessidade de uma condicional para confirmar se não é null.
    }
}