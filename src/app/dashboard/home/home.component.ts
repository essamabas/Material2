import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
//import initDemo = require('../../../assets/js/charts.js');
//import * as initDemo from '../../../assets/js/charts.js';

/* Use declare to tell the compiler that the vairables/functions will exist in Runtime */
declare var $:any;
declare function require(name:string);


@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    ngOnInit(){
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        var initDemo = require('../../../assets/js/charts.js');
        initDemo();
    }
}
