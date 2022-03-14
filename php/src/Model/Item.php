<?php

namespace Tardis\Php\Model;

class ItemDTO {
 public int $value;
 public float $weight;

}

class Item{

    function __construct(ItemDTO $jorge)
    {
        $this->valeu = $jorge->value;
        $this->weight = $jorge->weight;
    }
}

