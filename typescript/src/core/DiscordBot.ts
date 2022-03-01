import { Client, Intents } from "discord.js";
import { Resolver } from "../resolvers/Resolver";

export default class DiscordBot {
  public client: Client;
  private token: string;
  private prefix: string;

  constructor(client: Client, token: string, prefix: string) {
    this.client = client;
    this.token = token;
    this.prefix = prefix;
  }

  start() {
    this.client.login(this.token);
    console.log("BOT ONLINE!");
  }

  registerAction(action: string, callback: Function) {
    this.client.on("message", msg => {
      console.log("oi");
      const { content } = msg;
      if (content == this.prefix + action) {
        msg.content = msg.content.split(this.prefix)[1];
        callback(msg);
      }
    });
  }
}
