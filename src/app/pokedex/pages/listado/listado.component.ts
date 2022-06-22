import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

    pokemonList : any[] = [];

    constructor(
        private pokedexInteractor : PokedexService
    ) { }

    ngOnInit(): void {
        this.getPokemonList();
    }

    getPokemonList(){
        this.pokedexInteractor.getPokemonList()
        .subscribe(res => {
                console.log(res.results); 
                this.pokemonList = res.results;
            }
        );
    }

}
