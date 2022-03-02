<?php

namespace Tardis\Php\Resolvers;

use Discord\Parts\Channel\Message;

;

class CharacterResolvers extends Resolver {
    public function status(Message $ctx){

    }

    public function createUser(Message $ctx){
        $ctx->content;
        return $ctx->channel->sendMessage("SUA VAGABUNDA:" . $ctx->author->username . " ESTA PRONTA PRA BRINCAR!");
    }
}