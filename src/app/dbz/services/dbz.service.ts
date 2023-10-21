import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'; // Renombramos el v4 por uuid.

//* El decorador @Injectable() marca una clase como disponible para ser proporcionada e inyectada como
//* dependencia. En este caso indica que este servicio puede ser inyectado.
//* De forma predeterminada, este decorador está configurado con una propiedad providedIn, que crea un
//* provider de servicio. En este caso, providedIn:‘root’ especifica que el servicio debe proporcionarse
//* en el inyector raíz (AppModule).
//* Si no usaramos el @Injectable, deberíamos manualmente incluir el servicio en el AppModule o en un
//* módulo que solo sea importado por el AppModule.
//* Cuando agregamos un provider de servicio al inyector root (providedIn: 'root'), estos servicios estarán
//* disponibles en toda la app. Estos providers están disponibles para todas las clases en la app siempre
//* que tengan el lookup token. El tipo de parámetro especificado en el constructor funciona como lookup
//* token para el inyector. Los lookup tokens le permiten al sistema DI saber que provider utilizar.
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }
    // Lo anterior no es una buena manera de hacerlo porque puede que tengamos muchas propiedades, o tambien
    // puede que en el futuro se agregen mas, entonces lo menor es hacerlo de la siguiente manera en donde
    // asignamos el valor id y esparcimos el resto de las propiedades con el operador spread (...):
    const newCharacter: Character = {id: uuid(), ...character};
    // NOTA: Que si quisieramos sobre escribir un valor que ya existe en character, por ejemplo el name,
    // primero deberiamos usar el operador spread y luego cambiar el valor, pero como en este caso sabemos
    // que el id no viene, lo colocamos en primer lugar.

    // Agrega un elemento al final del arreglo. Para agregarlo al inicio se usa el unshift.
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   // Remueve un elemento del arreglo en la posicion index.
  //   this.characters.splice(index, 1);
  // }
  // Se cambia el metodo onDeleteCharacter por deleteCharacterById:
  deleteCharacterById(id: string): void {
    // El filter retorna un nuevo arreglo sin el elemento que tenga el id indicado:
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
