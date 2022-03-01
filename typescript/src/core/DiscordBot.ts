import { Client, Intents } from "discord.js";

export default class DiscordBot {
  private client: Client;
  private token: string;

  constructor(client: Client, token: string) {
    this.client = client;
    this.token = token;
  }

  start() {
    this.client.login(this.token);
    console.log("BOT ONLINE!");
  }
}
