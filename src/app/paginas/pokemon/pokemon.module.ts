import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ObtenerPokemonService } from '../pokemones/servicios/obtener-pokemon.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PokemonPageRoutingModule } from './pokemon-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { PokemonPage } from './pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [PokemonPage],
  providers: [ObtenerPokemonService]
})
export class PokemonPageModule {}
