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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /* User Modules */
    DashboardModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    BrowserAnimationsModule,
    /* Root Modules */
    MaterialModule.forRoot(),
    RouterModule.forRoot([])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
