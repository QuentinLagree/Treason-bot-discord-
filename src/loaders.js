const {readdirSync} = require("fs")
const {REST} = require("@discordjs/rest")
const {Routes} = require("discord-api-types/v9")
const {lang, config} = require("./tools/yaml")
const {Client} = require("discord.js")
const Logger = require("./tools/logger")

/**
 * 
 * @param {Client} client 
 */

module.exports = (client) => {
    // COMMANDES

    const rest = new REST({ version: "9" }).setToken(config.token)

    const commandsExports = {}
    const commandsList = []
    const commandLog = [];
    readdirSync("./src/commands/").forEach(async dirs => {
        const commands = readdirSync(`./src/commands/${dirs}`).filter(files => files.endsWith(".js"))
        try {
            for (const file of commands) {
                const command = require(`./commands/${dirs}/${file}`);
                commandLog.push(`- Chargement de la commande : ${command.name.toLowerCase()} -> ${lang.check_icon}`);
                commandsExports[command.name.toLowerCase()] = command
                commandsList.push(command.data.toJSON())
            }
            await rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), { body: commandsList })
        } catch (error) {
            console.error(error)
        }
    })
    Logger(commandLog, "file_command")
    return { commandsExports }
}
