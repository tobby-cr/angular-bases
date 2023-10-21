import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  }

  emitCharacter(): void {

    //* Usamos debugger para depurar nuestra aplicacion. Esto detendrá la aplicacion en este punto.
    // debugger;

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    // Como todo pasa por referencia en js, nos podemos asegurar mandando un nuevo objeto de la siguiente
    // manera, pero en angular no es necesario porque se encarga de eso.
    // this.onNewCharacter.emit({...this.character});

    // this.character.name = '';
    // this.character.power = 0;
    // Lo anterior lo podemos sobreescribir de la siguiente manera:
    this.character = {name: '', power: 0}
  }
}
