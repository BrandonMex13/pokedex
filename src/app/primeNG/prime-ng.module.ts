import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SplitButtonModule} from 'primeng/splitbutton';


@NgModule({
    exports : [
        ToolbarModule,
        SidebarModule,
        ButtonModule,
        CardModule,
        SplitButtonModule
    ]
})
export class PrimeNGModule { }
