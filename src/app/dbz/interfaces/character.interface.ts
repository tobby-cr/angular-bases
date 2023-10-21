// Las interface no se exportan en los modulos porque no tienen una contraparte en javascript.

export interface Character {
  id?: string;
  name: string;
  power: number;
}
