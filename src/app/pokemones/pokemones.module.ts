import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PokemonesRoutingModule } from './pokemones-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

@NgModule({
    declarations: [
        HomeComponent,
        ListadoComponent,
        PokemonComponent
    ],
    imports: [
        CommonModule,
        PokemonesRoutingModule,
        PrimengModule,
        FormsModule
    ]
})
export class PokemonesModule { }
