<?php

use Discord\Discord;
use TavernaDeMordor\Bot\Core\DiscordBot;

function main()
{
  $client = new Discord(["OTQ4MjM0NjQzNjQ2MzE2NjU0.Yh42VA.ik2kYLqooOi_ToQXSMHfUbuIHmQ"]);
  $bot = new DiscordBot($client);
  $bot->start();
}

main();
