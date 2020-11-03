import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CourseService } from '../services/course.service';
import { Course } from './models/course';
import { User } from './models/user';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  isAddingNewCourse: boolean;
  courseItemsOverview: Course[];
  dropdownSettings: IDropdownSettings = {};
  courseDetail: Course;
  authors: User[];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseItemsOverview = this.courseService.getCourses();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'FirstName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.authors = this.courseService.getAllAuthors();
  }

  addNewCourse() {
    this.courseDetail = {
      Id: 0,
      Title: '',
      Description: '',
      Duration: 10,
      IsTopRated: false,
      CreationDate: new Date(),
      SelectedAuthors: [],
      Authors: this.courseService.getAllAuthors(),
    };
    this.isAddingNewCourse = true;
  }

  editCourse(id) {
    this.courseDetail = this.courseService.getCourse(id);
    this.isAddingNewCourse = true;
  }

  deleteCourse(id) {
    if (confirm('Are you sure to delete?')) {
      this.courseItemsOverview = this.courseService.deleteCourse(id);
    }
  }

  saveChanges(courseDetail: Course) {
    if (courseDetail.Id > 0) {
      console.log('Updating ' + courseDetail.Id);
      this.courseItemsOverview = this.courseService.updateCourse(courseDetail);
    } else {
      console.log('adding');
      this.courseItemsOverview = this.courseService.addCourse(courseDetail);
    }
    this.isAddingNewCourse = false;
  }

  cancelSaveEdit() {
    this.isAddingNewCourse = false;
  }
}
