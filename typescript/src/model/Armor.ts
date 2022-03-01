import { Item, ItemDTO } from "./Item";

export interface ArmorDTO extends ItemDTO {
  endurace: number;
}

export class Armor extends Item {
  public endurace: number;
  constructor(props: ArmorDTO) {
    super(props);
    this.endurace = props.endurace;
  }
}
