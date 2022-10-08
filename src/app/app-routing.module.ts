import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Lazy loading
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./paginas/pokemones/pokemones.module').then(m => m.PokemonesPageModule)
  },
  {
    path: ':nombrePokemon',
    loadChildren: () => import('./paginas/pokemon/pokemon.module').then(m => m.PokemonPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //Al precargar los mòdulos, el módulo de pokemon no está recibiendo ningún parámetro
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
