import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

    constructor(
        private router : ActivatedRoute,
        private routerBack : Router
    ) { }

    ngOnInit(): void {

        // this.router.params.pipe().subscribe();
    }

}
