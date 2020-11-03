import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Course } from '../models/course';
import { CourseListFilter } from './course-list.filter.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {
  searchStr: string;
  courseItemsOverviewFiltered: Course[];
  @Input() courseItemsOverview: Course[];
  @Output() addCourseEvent = new EventEmitter<number>();
  @Output() editCourseEvent = new EventEmitter<number>();
  @Output() deleteCourseEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.courseItemsOverviewFiltered = this.courseItemsOverview;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes &&
      changes.courseItemsOverview &&
      changes.courseItemsOverview.currentValue
    )
      this.courseItemsOverviewFiltered =
        changes.courseItemsOverview.currentValue;
  }

  addNewCourse() {
    this.addCourseEvent.emit();
  }

  searchCourse() {
    const courseListFilter = new CourseListFilter();
    this.courseItemsOverviewFiltered = courseListFilter.transform(
      this.courseItemsOverview,
      this.searchStr
    );
  }

  editCourse(id) {
    this.editCourseEvent.emit(id);
  }

  deleteCourse(id) {
    this.deleteCourseEvent.emit(id);
  }
}
