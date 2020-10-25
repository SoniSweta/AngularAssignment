import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseItemDetailComponent } from './courses/course-item-detail/course-item-detail.component';
import { NumberToMinutes } from './services/numbertominutes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberToMinutes,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoComponent,
    CourseListComponent,
    ErrorComponent,
    CoursesComponent,
    CourseItemDetailComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [NumberToMinutes, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
