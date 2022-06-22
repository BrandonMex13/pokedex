import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles : [``]
})
export class HomeComponent implements OnInit {

    visibleSidebar1!: boolean;

    items: MenuItem[] = [];

    constructor(
        private primengConfig: PrimeNGConfig
    ) { }

    ngOnInit(): void {
        this.primengConfig.ripple = true;

        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            },
            {
                label: 'Angular',
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            },
            {
                label: 'Router',
                icon: 'pi pi-upload',
                routerLink: '/fileupload'
            }
        ];
    }

}
