import { Component } from '@angular/core';
import { PokemonesService } from '../../services/pokemones.service';
import { environment } from 'src/environments/environments';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
    pagina: number;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    pokemonesListado : any[] = [];

    urlpokeimagen : string = environment.urlpokeimagen;

    first: number = 0;

    rows: number = 10;

    totalPokemones : number = 0;

    limite : number = 10;

    constructor(
        private pokedexService : PokemonesService
    ){}

    ngOnInit(): void {
        this.obtenerPokemones(this.limite, this.first);
    }

    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;

        this.obtenerPokemones( this.limite, this.first);
    }

    // prueba(event : Event){
    //     console.log('event :>> ', event);
    // }

    obtenerPokemones(limite: number, desde: number){
        this.pokemonesListado = [];
        this.pokedexService.obtenerPokemones(limite, desde).subscribe( res => {
            this.pokemonesListado = res['results'];

            this.totalPokemones = res['count'];
        });

    }

    obtenerImagen( url: string){
        return this.urlpokeimagen + '/' + this.obtenerIdPokemon(url) + '.png';
    }

    obtenerIdPokemon( url: string){
        return url.slice(34, (url.length-1));
    }

}
