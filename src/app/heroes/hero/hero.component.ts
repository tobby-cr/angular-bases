import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  //* Propiedad get. Se ve como una propiedad, pero en realidad es un metodo.
  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescripcion(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    // Cuando sabemos que debemos crear un metodo pero no tenemos tiempo, podemos colocar lo siguiente para
    // que no se nos olvide (el TODO y el throw):
    // // TODO: Implementar metodo.
    // throw new Error('NO implementado');

    // Cualquier cambio que realicemos, el ciclo de deteccion de cambios de angular lo detectará y actualizará
    // la pagina. Angular realiza la detección de cambios en cada componente de pie a cabeza cada vez que algo
    // cambia.
    this.name = 'Spiderman';

    //? NOTA: Las instrucciones de este tipo (al dom), están fueta del ciclo de deteccion de cambios de angular.
    // Por lo tanto, cualquier cambio que realicemos debe hacerse desde los metodos de nuestros componentes.
    // document.querySelectorAll('h1').forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
