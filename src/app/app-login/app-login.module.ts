import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppSharedModule, CommonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AppLoginModule {}
