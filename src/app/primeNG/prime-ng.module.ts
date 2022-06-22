import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {FieldsetModule} from 'primeng/fieldset';
// import {DataViewModule} from 'primeng/dataview';


@NgModule({
    exports : [
        ToolbarModule,
        SidebarModule,
        ButtonModule,
        CardModule,
        SplitButtonModule,
        SplitterModule,
        FieldsetModule,
    ]
})
export class PrimeNGModule { }
