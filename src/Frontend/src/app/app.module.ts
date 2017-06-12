import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import 'hammerjs';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {SettingsDialog} from "./settings/settings.Component";

/* Import User Compnents */
import { AppComponent} from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/* Import User Modules */
import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import {TranslateModule} from 'ng2-translate';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

/* Import User Services */
import { UserService } from './services/user.service';
import { MessagesService } from './services/messages.service';
import { CanActivateGuard } from './services/guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { AppTranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';

let components = [
    AppComponent,
    DashboardComponent,
    SettingsDialog
];

let modules = [
    BrowserModule,
    FormsModule,
    HttpModule,
    /* Root Modules */
    RouterModule.forRoot([]),   
    /* User Modules */
    DashboardModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    BrowserAnimationsModule,
    MaterialModule,
    TranslateModule.forRoot(),
    ToasterModule    
];

let services = [
    UserService,
    BreadcrumbService,
    MessagesService,
    CanActivateGuard,
    NotificationService,
    AppTranslateService,
    LoggerService
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    modules
  ],
  providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
      services
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
