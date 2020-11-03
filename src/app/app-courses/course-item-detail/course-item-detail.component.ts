import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Course } from '../models/course';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { User } from '../models/user';

@Component({
  selector: 'app-course-item-detail',
  templateUrl: './course-item-detail.component.html',
  styleUrls: ['./course-item-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemDetailComponent implements OnInit {
  @Input() courseDetail: Course;
  @Input() dropdownSettings: IDropdownSettings = {};
  @Input() authors: User[];
  @Output() cancelSaveEditEvent = new EventEmitter();
  @Output() saveChangesEvent = new EventEmitter<Course>();

  errorMessage: string;

  constructor() {}

  ngOnInit(): void {}

  onItemSelect(item: any) {
    console.log(item);
  }

  OnItemDeSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll(items: any) {
    console.log(items);
  }

  onSave() {
    this.saveChangesEvent.emit(this.courseDetail);
  }

  onCancel() {
    this.cancelSaveEditEvent.emit();
  }
}
