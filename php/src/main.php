<?php


use Discord\Discord;
use Tardis\Php\Core\DiscordBot;
use Dotenv\Dotenv;

function main()
{
    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();
    $client = new Discord([$_ENV["DISCORD_TOKEN"]]);
    $bot = new DiscordBot($client, "/");
    $bot->start();
}
main();