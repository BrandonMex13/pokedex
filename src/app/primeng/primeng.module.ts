import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PaginatorModule } from 'primeng/paginator';
import { ChipModule } from 'primeng/chip';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    exports: [
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        SidebarModule,
        CardModule,
        AvatarModule,
        AvatarGroupModule,
        PaginatorModule,
        ChipModule,
        ProgressBarModule,
        InputTextModule
    ]
})
export class PrimengModule { }
