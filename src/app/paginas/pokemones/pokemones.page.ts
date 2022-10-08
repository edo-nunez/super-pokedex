import { Component, OnInit, ViewChild } from '@angular/core';
import { ObtenerPokemonService } from './servicios/obtener-pokemon.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//FormBuilder crea un formulario; form control, un campo de formulario

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) public miInfinito: IonInfiniteScroll;
  public formulario: FormGroup;

  constructor(
    public obtenerPokemon: ObtenerPokemonService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    //Con validaciones síncronas, se pueden validar dos campos o más
    //Con validaciones asíncronas, se puede validar a nivel de formulario
    this.formulario = this.formBuilder.group({ //Agrupación de parámetros
      //Primer parámetro: valor del elemento
      //Segundo parámetro: validaciones síncronas (required, expresiones regulares) o validaciones personalizadas ('custom')
      //Tercer parámetro: validaciones asíncronas (desde internet)
      nombrePokemon: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])


    })
    this.obtenerPokemon.obtener20Primeros();
    }


  public cargarMas(event: Event):void{
    this.obtenerPokemon.obtener20siguientes();
    this.miInfinito.complete();

  }

}
