export interface ItemDTO {
  value: number;
  weight: number;
}

export class Item {
  value: number;
  weight: number;

  constructor(props: ItemDTO) {
    this.value = props.value;
    this.weight = props.weight;
  }
}
