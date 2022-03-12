const {readdirSync} = require("fs")
const {Client, Intents} = require("discord.js");
const Logger = require("./src/tools/logger")
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
const loader = require("./src/loaders")(client)
const { config, lang } = require("./src/tools/yaml.js")

client.login(require("./src/tools/yaml.js").config.token)
const eventLog = []
readdirSync("./src/events/").forEach(async dirs => {
    client.time = new Date().getMilliseconds()
    const events = readdirSync(`./src/events/${dirs}`).filter(files => files.endsWith(".js"))
    for (const file of events) {
        const event = require(`./src/events/${dirs}/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, time))
        } else {
            client.on(event.name, (...args) => event.execute(...args))
        }
        eventLog.push(`Chargement de l'évènement : ${event.name.toLowerCase()} -> ${lang.check_icon}`)
    }
})
Logger(eventLog, "file_event")


