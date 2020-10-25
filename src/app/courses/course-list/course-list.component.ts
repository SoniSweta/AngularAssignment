import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {
  @Input() courseItemsOverview: Course[];
  @Output() editCourseEvent = new EventEmitter<number>();
  @Output() deleteCourseEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  editCourse(id) {
    this.editCourseEvent.emit(id);
  }

  deleteCourse(id) {
    this.deleteCourseEvent.emit(id);
  }
}
