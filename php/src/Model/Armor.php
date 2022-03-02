<?php
 
 namespace Tardis\Php\Model;

class ArmorDTO extends ItemDTO{
    public int $endurace;

}


class Armor extends Item {

    function __construct(ArmorDTO $jorge)
    {
        parent::__construct($jorge); ///////esse é  o "super($jorge)" do Typescript/////////
        $this->endurance = $jorge->endurace;
    }

}
