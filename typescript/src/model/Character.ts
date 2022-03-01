import { Item } from "./Item";
import { Weapon } from "./Weapon";

export interface CharacterDTO {
  userId: string;
  channelId: string;
  name: string;
  level: number;
  age: number;
  for: number;
  agi: number;
  con: number;
  luck: number;
}

export class Character {
  public userId: string;
  public channelId: string;
  private name: string;
  private level: number;
  private age: number;
  private for: number;
  private agi: number;
  private con: number;
  private luck: number;
  private lifePoints: number;
  private inventory: Item[];
  private equippedWeapon?: Weapon;
  public isDead: boolean;

  constructor(props: CharacterDTO) {
    this.userId = props.userId;
    this.channelId = props.channelId;
    this.name = props.name;
    this.level = props.level;
    this.age = props.age;
    this.for = props.for;
    this.agi = props.agi;
    this.con = props.con;
    this.luck = props.luck;
    this.lifePoints = this.calculateBaseLifePoints();
    this.inventory = [];
  }

  public attack(target: Character) {
    const fDice = Math.ceil(Math.random() * this.luck);
    if (fDice >= 5) {
      const damage = this.for * Math.random();
      if (this.equippedWeapon) {
        this.equippedWeapon.attack(target, damage);
      } else {
        target.recieveDamage(damage);
      }
    }
  }

  public recieveDamage(damage: number) {
    const receivedDamage = this.con - damage;
    this.lifePoints -= receivedDamage;
    if (this.lifePoints <= 0) {
      this.lifePoints = 0;
      this.isDead = true;
    }
  }

  private calculateBaseLifePoints(): number {
    return this.con + this.for / 2;
  }

  private calculateMaxWeight(): number {
    return this.con / 2 + this.for;
  }

  public catchItem(item: Item) {
    if (
      this.calculateCurrentCarriedWeight() + item.weight <=
      this.calculateMaxWeight()
    ) {
      this.inventory.push(item);
    } else {
      console.log("não pegue GUEI");
    }
  }

  public calculateCurrentCarriedWeight() {
    let sum = 0;
    this.inventory.forEach(item => {
      sum += item.weight;
    });
    return sum;
  }

  public status(): string {
    return `Olá, meu nome é: ${this.name}
    Pontos de vida: ${this.lifePoints}
    Level: ${this.level}
    Idade: ${this.age}
    `;
  }
}
