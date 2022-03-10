const {Collection} = require("discord.js")
const {readdirSync} = require("fs")
const {REST} = require("@discordjs/rest")
const {Routes} = require("discord-api-types/v9")
const {lang, config} = require("./tools/yaml")

const rest = new REST({version: "9"}).setToken(config.token)
const commandsExports = {}
const commandsList = []
readdirSync("./src/commands/").forEach(async dirs => {
    const commands = readdirSync(`./src/commands/${dirs}`).filter(files => files.endsWith(".js"))
    try {
        for (const file of commands) {
            const command = require(`./commands/${dirs}/${file}`);
            console.log(`Chargement de la commande : ${command.name.toLowerCase()} -> ${lang.check_icon} -- ${command}`);
            commandsExports[command.name.toLowerCase()] = command
            commandsList.push(command.data.toJSON())
        }
        await rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), { body: commandsList})
    } catch (error) {
        console.error(error)
    }
})

module.exports = commandsExports
