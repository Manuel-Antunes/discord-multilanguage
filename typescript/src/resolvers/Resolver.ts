import { Client } from "discord.js";

export abstract class Resolver {
  protected client: Client;

  constructor(discord: Client) {
    this.client = discord;
  }
}
