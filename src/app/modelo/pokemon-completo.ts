type Ability2 = {
  name : string,
  url : string
}
type Ability1 = {
  ability : Ability2,
  is_hidden : boolean,
  slot : number
}
type Move2 = {
  name : string,
  url : string
}
type MoveLearnMethod = {
  name : string,
  url : string
}
type MoveVersionGroup = {
  name : string,
  url : string
}
type MoveVersionGroupDetails = {
  level_learned_at : number,
  move_learn_method : MoveLearnMethod,
  version_group : MoveVersionGroup
}
type Move = {
  move : Move2,
  version_group_details : MoveVersionGroupDetails
}

type Sprites = {
  front_default : string,
  front_female? : string,
  front_shiny? : string,
  front_shiny_female? : string
}

type Stat2 = {
  name : string,
  url : string
}
type Stat = {
  base_stat : number,
  effort : number,
  stat : Stat2
}

type Type2 = {
  name : string,
  url : string
 }
 type Type = {
  slot : number,
  type : Type2
 }

 type Forms = {
  name: string,
  url: string
 }

 type Version = {
  name: string,
  url: string
 }

 type Game_indices = {
  game_index: number,
  version: {
    name: string,
    url: string
  }
 }

 export interface PokemonCompleto {
  name: string, //fuera
  order: number, //fuera
  abilities: Array<Ability1>, //Habilidades, dentro
  base_experience: number, //Experiencia base, fuera
  height: number, //Estatura, fuera
  weight: number //Peso, fuera
  id: number //No va
  is_default: boolean //Pokemon inicial, fuera
  location_area_encounters: string, //Encuentros por área de ubicación, dentro
  moves: Array<Move>, //Movimientos, dentro
  sprites: Array<Sprites>, //Fotos, fuera
  stats : Array<Stat>, //Estadísticas, dentro
  types : Array<Type>, //Tipo, fuera
  forms : Array<Forms>,
  version : Array<Version>,
  game_indices : Array<Game_indices>,




}
