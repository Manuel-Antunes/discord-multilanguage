import { Client, Intents } from "discord.js";
import DiscordBot from "./core/DiscordBot";
import { config } from "dotenv";

async function main() {
  config();
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
  const bot = new DiscordBot(client, process.env.DISCORD_TOKEN);
  bot.start();
}

main();
