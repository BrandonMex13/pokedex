import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

    private urlpokeapi : string = environment.urlpokeapi;

    private urlpokeimagen : string = environment.urlpokeimagen;

    constructor(
        private http : HttpClient
    ) { }

    obtenerPokemones(limite: number, desde : number) : Observable<any>{
        return this.http.get<any>(`${this.urlpokeapi}/pokemon?limit=${limite}&offset=${desde}`);
    }

    obtenerImagen( id : number ) : Observable<any>{
        return this.http.get<any>(`${this.urlpokeimagen}/${id}.png`);
    }

    obtenerPokemonPorId( id: number ) : Observable<any>{
        return this.http.get<any>(`${this.urlpokeapi}/pokemon/${id}`);
    }
}
