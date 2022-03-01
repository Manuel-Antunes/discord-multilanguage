import { Client, Intents } from "discord.js";
import DiscordBot from "./core/DiscordBot";

async function main() {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
  const bot = new DiscordBot(
    client,
    "OTQ4MjM0NjQzNjQ2MzE2NjU0.Yh42VA.ik2kYLqooOi_ToQXSMHfUbuIHmQ"
  );
  bot.start();
}

main();
