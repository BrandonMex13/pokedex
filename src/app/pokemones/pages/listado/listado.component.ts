import { Component } from '@angular/core';
import { PokemonesService } from '../../services/pokemones.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    pokemonesListado : any[] = [];

    numero : number[] = [1,2,3,4,5];

     urlpokeimagen : string = environment.urlpokeimagen;

    constructor(
        private pokedexService : PokemonesService
    ){}

    ngOnInit(): void {
        this.obtenerPokemones();
    }

    obtenerPokemones(){
        this.pokedexService.obtenerPokemones().subscribe( res => {
            this.pokemonesListado = res['results'];
        });

    }

    obtenerImagen( url: string){
        return this.urlpokeimagen + '/' + this.obtenerIdPokemon(url) + '.png';
    }

    obtenerIdPokemon( url: string){
        return url.slice(34, (url.length-1));
    }

}
