import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
    
    constructor(
        private router : ActivatedRoute,
        private routerBack : Router
    ){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.router.params.subscribe( (params) => {
            console.log('params :>> ', params);
        });
    }

    regresar(){
        this.routerBack.navigate(['/pokemones/listado'])
    }
}
