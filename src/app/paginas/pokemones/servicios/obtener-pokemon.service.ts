import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Quiero crear la inyección de dependencia en el constructor
import { ResultadoPeticion, Info } from 'src/app/modelo/resultado-peticion'; //Este es el que se muestra por pantalla
import { Pokemon } from 'src/app/modelo/pokemon'; //

@Injectable() //Se usa para inyectar el servicio manualmente al módulo que uno use y declararlo ahí
export class ObtenerPokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  public resultado!: ResultadoPeticion;
  public informaciones: Array<Info> = [];

  constructor(
    private client: HttpClient //Inyecto la dependencia
  ) { }

  public obtener20Primeros() {
    this.client.get<ResultadoPeticion>(this.url)
      .subscribe(peticion => {
        this.resultado = peticion;
        this.informaciones.push(...peticion.results); //Recordemos que no se ingresan los elementos individualmente
      });
  }

  public obtener20siguientes(){
    this.client.get<ResultadoPeticion>(this.resultado.next).subscribe(peticion => {
      this.resultado = peticion;
      this.informaciones.push(...peticion.results);
      //Cada vez que ejecute esta función, va a buscar los siguientes 20;
      //pero cuidado, que se reemplazan los 20 pokemones anteriores del historial. Se debe crear un 'array' en la línea 10
    });
  }
}
