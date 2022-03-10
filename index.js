const {Client, Intents} = require("discord.js");
require("./src/loaders")
let time = new Date().getMilliseconds()
let client = new Client({intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS
]});

const { config, lang } = require("./src/tools/yaml.js")

const handleCommand = require("./src/tools/command")
client.on("interactionCreate", async interaction => {
    if (interaction.isCommand()) handleCommand(interaction)
})

client.once("ready", () => {
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    console.log(`[${(client.user.bot) ? "Bot" : "Membre"}] -- ${client.user.tag}, en ligne sur le serveur  [${client.guilds.cache.get(config.guildId).name}].`);
    console.log(`Connection éffectué avec succés -> ${lang.check_icon}`);
    console.log(`L'application s'est connecté avec une durée de : ${new Date().getMilliseconds() - time}ms`)
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
})


client.login(require("./src/tools/yaml.js").config.token)