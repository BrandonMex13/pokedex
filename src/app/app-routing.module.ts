import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './pokemones/pages/home/home.component';
import { ListadoComponent } from './pokemones/pages/listado/listado.component';

const routes: Routes = [
    {
        path: 'pokemones',
        loadChildren: () => import('././pokemones/pokemones.module').then( m => m.PokemonesModule)
    },
    {
        path: '404',
        component: ErrorPageComponent
    },
    {
        path: '**',
        redirectTo: 'pokemones/listado'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
