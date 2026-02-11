const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

let active = true;

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "mg;Stop") {
    active = false;
    await message.reply("Bot stopped.");
    return;
  }

  if (message.content === "mg;Start") {
    active = true;
    await message.reply("Bot started.");
    return;
  }

  if (!active) return;

  await message.reply("My name is mangoes**bot** 67 is so funny!!");

  await message.react("6️⃣");
  await message.react("7️⃣");
  await message.react("🥭");
  await message.react("🤖");
  await reply.react("6️⃣");
  await reply.react("7️⃣");
  await reply.react("🥭");
  await reply.react("🤖");
});

client.login(process.env.TOKEN);
