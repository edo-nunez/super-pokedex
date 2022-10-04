import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; //Ahora tenemos un componente que permite una petición asíncrona
// Navegaciòn
import { RouterModule } from '@angular/router';
// Hacer peticiones a internet
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PokemonesPageRoutingModule } from './pokemones-routing.module';

import { PokemonesPage } from './pokemones.page';
import { InfoPokemonComponent } from './componentes/info-pokemon/info-pokemon.component';

//Importar el servicio

import {ObtenerPokemonService} from './servicios/obtener-pokemon.service'

@NgModule({
  imports: [
    CommonModule,
    //FormsModule se borra porque hace mal
    IonicModule,
    PokemonesPageRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonesPage, InfoPokemonComponent],
  providers: [ObtenerPokemonService] //Gracias a este proveedor, el servicio puede ocupar los diferentes módulos. En providers también van directivas
})
export class PokemonesPageModule {}
