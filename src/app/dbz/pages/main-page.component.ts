import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //* Angular hace la inyeccion del servicio DbzService.
  //* Las variables que colocamos en el constructor, por defecto se crean como propiedades y en este caso
  //* le decimos que se crea una propiedad publica con nuesto servicio.
  // constructor(public dbzService: DbzService) {
  // }
  //
  //* Se comenta el condigo anterior porque es una buena practica que los servicios sean privados, por lo
  //* tanto para poder proveer las propiedades del servicio lo podemos hacer con los get y para los metodos
  //* del servicio, creamos un nuevo metodo:
  constructor(private dbzService: DbzService) {
  }

  get characters(): Character[] {
    // Retornamos una copoia de la informacion para que no sea modificado por accidente. Hacemos esto porque
    // la informacion la tenemos en el servicio, pero si viniera del backend esto no es necesario.
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
