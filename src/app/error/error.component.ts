import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-error',
    template: `
        <div id="main">
    	    <div class="fof">
                <h1>Error 404</h1>
                <div class="form-group">
                <a href='/' class="btn btn-transparent"><i class="fa fa-home"></i> Home</a>
                </div>
            </div>
        </div>
        
    `,
    styles: ["*{ transition: all 0.6s; } html { height: 100%; } body{ font-family: 'Lato', sans-serif; color: #888; margin: 0; } #main{ display: table; width: 100%; height: 100vh; text-align: center; } .fof{ display: table-cell; vertical-align: middle; } .fof h1{ font-size: 50px; display: inline-block; padding-right: 12px; animation: type .5s alternate infinite; } @keyframes type{ from{box-shadow: inset -3px 0px 0px #888;} to{box-shadow: inset -3px 0px 0px transparent;} }"]
})
export class ErrorComponent { }

