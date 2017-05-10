import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import {SettingsDialog} from "./settings/settings.Component";
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';

/* Define JQuery Variables */
//declare var $:any;
declare function require(name:string);
var $ = require("jquery");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
      $.getScript('../assets/js/material-dashboard.js');
      $.getScript('../assets/js/initMenu.js');
  }
  constructor(location: PlatformLocation, public vcr: ViewContainerRef, public dialog: MdDialog) {

      location.onPopState(() => {
          // $('.sidebar-wrapper .nav-container div').removeClass('.moving-tab');
          // $.getScript('../assets/js/material-dashboard-angular.js');
          console.log('pressed back!');
      });
  }

  public isMaps(path){
      if(path == window.location.pathname){
          return false;
      }
      else {
          return true;
      }
  }

  dogs = [
    {rows: 2, name: "Mal", human: "Jeremy", age: 5},
    {rows: 1, name: "Molly", human: "David", age: 5},
    { rows: 1, name: "Sophie", human: "Alex", age: 8},
    {rows: 2, name: "Taz", human: "Joey", age: '11 weeks'},
    { rows: 1, name: "Kobe", human: "Igor", age: 5},
    {rows: 2, name: "Porter", human: "Kara", age: 3},
    { rows: 1, name: "Stephen", human: "Stephen", age: 8},
    {rows: 1, name: "Cinny", human: "Jules", age: 3},
    { rows: 1, name: "Hermes", human: "Kara", age: 3},
  ];
  //@ViewChild('sidenav') sidenav: MdSidenav;
  //currentDog = {};
  isDarkTheme = false;
}