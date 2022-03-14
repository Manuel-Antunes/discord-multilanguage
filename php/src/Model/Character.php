<?php
 
 namespace Tardis\Php\Model;

class CharacterDTO
{
  public string $userID;
  public string $channelID;
  public string $name;
  public int $level;
  public int $age;
  public int $for;
  public int $con;
  public int $agi;
  public int $luck;
}
////// $jorge é um props, vadia ///////////
class Character
{
   public function __construct(CharacterDTO $jorge)
   {
       $this->userID = $jorge->userID;
       $this->channelID=  $jorge->channelID;
       $this->name =  $jorge->name;
       $this->level =  $jorge->level;
       $this->age =  $jorge->age;
       $this->for =  $jorge->for;
       $this->con =  $jorge->con;
       $this->agi =  $jorge->agi;
       $this->luck =  $jorge->luck;
       $this->lifePoints = $this->calculateBaseLifePoints();
       $this->inventory = [];
       $this->isDead = false;
   }

   public function attack(Character $target)
   {
     $fDice = ceil(rand(1, $this->luck));
     if($fDice >= 5){
         $damage = $this->for * rand();
         if($this->equippeWeapon)
         {
            $this->equippedWeapon->attack($target, $damage);
         }else{
        $target->recieveDamage($damage);
     }
     }
   }

   public function recieveDamage(float $damage)
   {
        $receivedDamage = $this->con - $damage;
        $this->lifePoints -= $receivedDamage();
        if($this->lifePoits <= 0){
            $this->lifePoints = 0;
            $this->isDead = true;
        }
   }


   private function calculateBaseLifePoints():float
   {
        return $this->con + $this->for / 2;
   }

   private function calculateMaxWeight()
   {
        return $this->level * ($this->con / 2 + $this->for);
   }

   public function catchItem(Item $item)
   {
        if(
           $this->calculateCurrentCarriedWeight() + $item->weight <= $this->calculateMaxWeight()
        ){
          ////////////  this.inventory.push(item;) ////////////////
          array_push($this->inventory, $item);

        }else
        {
            echo "não peque GUEI";
        };
   }

   public function calculateCurrentCarriedWeight(){
     $sum = 0;
     foreach ($this->inventory as $item){
        $sum += $item->weight;
     }
     return $sum;

   }

   public function status():string{
       return "Olá, meu nome é: " . $this->nome . "\nPontos de vida:" . $this->lifePoints . "\nLevel:" . $this->level . "\nIdade:" . $this->age;
   }
}