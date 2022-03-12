module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        const handleCommand = require("../../tools/command")
        if (interaction.isCommand()) handleCommand(interaction)
    },
};