<?php

namespace TavernaDeMordor\Bot\Core;

use Discord\Discord;

class DiscordBot
{
  private Discord $client;
  private String $token;

  public function __construct(String $token)
  {
    $this->token = $token;
    $this->client = new Discord(['token' => $this->token]);
  }

  public function start()
  {
    print("Rodando");
    $this->client->run();
  }
}
