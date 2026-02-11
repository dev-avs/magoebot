const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const stoppedChannels = new Set();

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "mg;Stop") {
    stoppedChannels.add(message.channel.id);
    await message.reply("Bot stopped in this channel.");
    return;
  }

  if (message.content === "mg;Start") {
    stoppedChannels.delete(message.channel.id);
    await message.reply("Bot started in this channel.");
    return;
  }

  if (stoppedChannels.has(message.channel.id)) return;

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
