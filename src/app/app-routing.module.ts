import { PokedexModule } from './pokedex/pokedex.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
    {
        path: 'pokedex',
        loadChildren : () => import('./pokedex/pokedex.module').then( m => m.PokedexModule)
    },
    {
        path: '404',
        component : ErrorPageComponent
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
