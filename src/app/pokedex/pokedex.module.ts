import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonTarjetaComponent } from './components/pokemon-tarjeta/pokemon-tarjeta.component';
import { PrimeNGModule } from '../primeNG/prime-ng.module';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokemonComponent } from './pages/pokemon/pokemon.component';



@NgModule({
  declarations: [
    ListadoComponent,
    HomeComponent,
    PokemonTarjetaComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    PrimeNGModule,
    FlexLayoutModule
  ]
})
export class PokedexModule { }
