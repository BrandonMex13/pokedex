import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

    private urlApi : string = environment.urlApi;

    constructor(
        private http : HttpClient
    ) { }

    getPokemonList() : Observable<any>{
        // ?limit=150
        return this.http.get<any>(`${this.urlApi}/pokemon`);
    }

    getPokemonByURL( url : string ): Observable<any>{
        return this.http.get<any>(`${url}`);
    }
}
