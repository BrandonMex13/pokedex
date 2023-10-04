import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

    idPokemon : number = 0;
    
    pokemon : any;

    checked: boolean = false;
    
    constructor(
        private router : ActivatedRoute,
        private routerBack : Router,
        private pokemonService : PokemonesService
    ){}

    ngOnInit(): void {
        this.router.params.subscribe( (params) => {
            this.idPokemon = params['id'];
        });

        this.obtenerPokemonPorId();
    }

    obtenerPokemonPorId(){
        this.pokemonService.obtenerPokemonPorId( this.idPokemon ).subscribe( res => {
            console.log('res :>> ', res);
            this.pokemon = {...res};
        });
    }

    regresar(){
        this.routerBack.navigate(['/pokemones/listado'])
    }
}
