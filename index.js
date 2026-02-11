const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  await message.reply("My name is mangoes**bot** 67 is so funny!!");

  await message.react("6️⃣");
  await message.react("7️⃣");
  await message.react("🥭");
  await message.react("🤖");
});

client.login(process.env.TOKEN);
