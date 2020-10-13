import { Component, OnInit } from '@angular/core';
import ICourse from '../shared/models/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courseList : ICourse[];
  constructor() { }

  ngOnInit(): void {
  }

}
