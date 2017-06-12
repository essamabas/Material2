import { Injectable } from '@angular/core';

/* Define JQuery Variables */
//declare var $:any;
declare function require(name:string);
var $ = require("jquery");
var notify = require("bootstrap-notify");

@Injectable()
export class NotificationService {
  constructor() { }

  public success = (body: string, title = 'Operation successful'): void => {
    this.showNotification(body, title,'success');
  }

  public error = (body: string, title = 'An error occured'): void => {
    this.showNotification(body, title,'danger');
  }

  public warning = (body: string, title = 'Something went wrong'): void => {
    this.showNotification(body, title,'warning');
  }

	public showNotification = (body: string, title:string, type: string): void => {
    $.notify({
        icon: "notifications",
        message: title + "\n" + body
      },{
          type: type,
          timer: 2000,
          placement: {
              from: 'bottom',
              align: 'right'
          }
      });
	}  
}
