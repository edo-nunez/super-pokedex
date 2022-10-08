import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObtenerPokemonService } from '../pokemones/servicios/obtener-pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  //public cosa: string = ''; No necesitamos declarar el nombre si podemos pasarlo directamente al servicio
  constructor(
    private activeRouter: ActivatedRoute,
    public carta: ObtenerPokemonService
  ) { }

  ngOnInit() {
    this.carta.obtenerPokemon(this.activeRouter.snapshot.params.nombrePokemon);


  }





}
