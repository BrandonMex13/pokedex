import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes : Routes = [
    {
        path: '',
        component : HomeComponent,
        children : [
            {
                path : 'listado',
                component : ListadoComponent
            },
            {
                path : '**',
                redirectTo : 'listado'
            }
        ]
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports : [
    RouterModule
  ]
})
export class PokedexRoutingModule { }
