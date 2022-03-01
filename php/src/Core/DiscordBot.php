<?php

namespace TavernaDeMordor\Bot\Core;

use Discord\Discord;

class DiscordBot
{
  private Discord $client;

  public function __construct(Discord $client)
  {
    $this->client = $client;
  }

  public function start()
  {
    print("Rodando");
    $this->client->run();
  }
}
