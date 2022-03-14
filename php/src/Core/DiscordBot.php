<?php

namespace Tardis\Php\Core;

use Discord\Discord;
use Discord\Parts\Channel\Message;
use Discord\Parts\User\Client;
use Discord\WebSockets\Event;

class DiscordBot
{
    public Discord $client;
    private string $prefix; 

    public function __construct(Discord $client, string $prefix)
    {
        $this->client = $client;
        $this->prefix = $prefix;
    }

    public function start()
    {
        print("###########################RODANDO##############################");
        $this->client->run();
    }  
    
   
    public function registerAction(string $action, callable $callback,){
        $this->client->on(Event::MESSAGE_CREATE, function (Message $message, Discord $discord) {
    echo "{$message->author->username}: {$message->content}", PHP_EOL;
});
       
    }
        
}
