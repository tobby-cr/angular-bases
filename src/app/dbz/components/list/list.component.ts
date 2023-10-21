import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //? I. Propiedades

  //* @Input: Define una propiedad que puede ser enviada desde el padre hacia el componente hijo.
  //* Es un decorador que marca un campo de clase como propiedad de entrada y proporciona metadatos de
  //* configuración. La propiedad de entrada está vinculada a una propiedad DOM en la plantilla. Durante
  //* la detección de cambios, Angular actualiza automáticamente la propiedad de datos con el valor de la
  //* propiedad DOM.
  //* Para renombrar la propiedad, se colocal el nuevo nombre de esta manera: @Input('miNombre')
  @Input()
  public characterList: Character[] = [{
    // Valor por defecto si no se envía informacion a la propiedad characterList.
    name: 'Trunks',
    power: 10
  }];

  //* @Output: Define una salida del componente que el componente padre puede suscribirse para escuchar.
  //* Es un decorador que marca un campo de clase como propiedad de salida y proporciona metadatos de
  //* configuración. La propiedad DOM vinculada a la propiedad de salida se actualiza automáticamente
  //* durante la detección de cambios.
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  // Lo anterior tambien se puede escribir así:
  // public onDelete = new EventEmitter<string>();

  //? F. Propiedades

  //? I. Eventos

  onDeleteCharacter(id?: string): void {

    if (!id) return;

    // Emite id del personaje
    this.onDelete.emit(id);
  }


  //? F. Eventos

}
