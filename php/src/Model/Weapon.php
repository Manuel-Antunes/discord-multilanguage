<?php

namespace Tardis\Php\Model;

class WeaponDTO extends ItemDTO{
   public int $damage;
}

class Weapon extends Item{

    function __construct(WeaponDTO $jorge ){
         parent::__construct($jorge);
         $this->damage = $jorge->damage;
    }

    public function attack(Character $target, int $baseDamage){
        $target->recieveDamage($this->damage + $baseDamage);
    }
   

}