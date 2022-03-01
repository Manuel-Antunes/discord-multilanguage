import { Message, User } from "discord.js";
import { Character } from "../model/Character";
import { Resolver } from "./Resolver";

export class CharacterResolver extends Resolver {
  public status(ctx: Message<boolean>) {}

  public createUser(ctx: Message<boolean>) {
    const { content } = ctx;
    console.log(content);
    return ctx.channel.send("Criando usuario: " + ctx.author.username);
  }
}
