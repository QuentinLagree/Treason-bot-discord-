const {Client, CommandInteraction} = require("discord.js")
const commands = require("../loaders")

/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 * @property {Array} commands
 */

const handleCommand = async (interaction) =>{

    let command;

    for (const key in commands) { if (key == interaction.commandName.toLocaleLowerCase()) { command =  commands[key] } }

 
    if (!command) return;
    try {
        await command.execute(interaction, interaction.options.data);
    } catch (error) {
        console.error(error)
        await interaction.reply({content: "Une erreur s'est produite !", ephemeral: true})
    }
}

module.exports = handleCommand