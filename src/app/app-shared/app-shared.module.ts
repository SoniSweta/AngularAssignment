import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [LogoComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, NgxBootstrapIconsModule.pick(allIcons)],
  exports: [LogoComponent, HeaderComponent, FooterComponent],
})
export class AppSharedModule {}
