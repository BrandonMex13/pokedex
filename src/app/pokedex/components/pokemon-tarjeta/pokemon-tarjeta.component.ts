import { Component, Input, OnInit } from '@angular/core';
import { Pokedex } from '../../interfaces/pokedex';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokemon-tarjeta',
  templateUrl: './pokemon-tarjeta.component.html',
  styleUrls: ['./pokemon-tarjeta.component.css']
})
export class PokemonTarjetaComponent implements OnInit {

    pokemonList : any[] = [];
    @Input('pokemonData') pokemon : any;

    pokedex !: Pokedex;

    constructor(
        private pokedexInteractor : PokedexService
    ) { }

    ngOnInit(): void {
        this.getPokemonByURL();
    }

    getPokemonByURL(){
        this.pokedexInteractor.getPokemonByURL( this.pokemon.url ).subscribe(
            res => { console.log(res); this.pokedex = res;}
        );
    }
}
