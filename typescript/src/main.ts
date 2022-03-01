import { Client, Intents } from "discord.js";
import DiscordBot from "./core/DiscordBot";
import { config } from "dotenv";
import { CharacterResolver } from "./resolvers/CharacterResolver";

async function main() {
  config();
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });
  const bot = new DiscordBot(client, process.env.DISCORD_TOKEN, "/");
  const characterResolver = new CharacterResolver(bot.client);
  bot.registerAction("create-character", characterResolver.createUser);
  bot.start();
}

main();
