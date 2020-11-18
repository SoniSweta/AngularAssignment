import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NumberToMinutes } from './services/numbertominutes.pipe';
import { AppSharedModule } from './app-shared/app-shared.module';
import { AppLoginModule } from './app-login/app-login.module';
import { CourseListComponent } from './app-courses/course-list/course-list.component';
import { CoursesComponent } from './app-courses/courses.component';
import { CourseItemDetailComponent } from './app-courses/course-item-detail/course-item-detail.component';
import { CourseListFilter } from './app-courses/course-list/course-list.filter.pipe';
import { CourseListHighlightDirective } from './app-courses/course-list/course-list.directive';
import { CourseListOrder } from './app-courses/course-list/course-list.order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberToMinutes,
    CourseListComponent,
    CoursesComponent,
    CourseItemDetailComponent,
    CourseListHighlightDirective,
    CourseListFilter,
    CourseListOrder,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    AppLoginModule,
    AppSharedModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [NumberToMinutes, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
