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

  const reply = await message.reply("My name is mangoes**bot** 67 is so funny!!");

  await reply.react("6️⃣");
  await reply.react("7️⃣");
  await reply.react("🥭");
  await reply.react("🤖");
});

client.login(process.env.TOKEN);
