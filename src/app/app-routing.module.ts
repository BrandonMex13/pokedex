import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

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
        component: ErrorPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
