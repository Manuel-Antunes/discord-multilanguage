import { Character } from "./Character";
import { Item, ItemDTO } from "./Item";

export interface WeaponDTO extends ItemDTO {
  damage: number;
}

export class Weapon extends Item {
  private damage: number;

  constructor(props: WeaponDTO) {
    super(props);
    this.damage = props.damage;
  }
  public attack(target: Character, baseDamage: number) {
    target.recieveDamage(this.damage + baseDamage);
  }
}
