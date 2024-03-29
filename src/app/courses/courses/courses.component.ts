import { CoursesService } from '../service/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  //courses: Course[] = [];
  courses$: Observable<Course[]>;

  displayedColumns =['name', 'category']

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list();

   }

  ngOnInit(): void {
 }

}
