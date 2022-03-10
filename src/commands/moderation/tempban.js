const { SlashCommandBuilder} = require("@discordjs/builders")
const { CommandInteraction, Permissions, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {

    name: "tempban",
    aliases: [],
    
    data: new SlashCommandBuilder()
        .setName("tempban")
        .setDescription("Cette commande permet de bannir durant un temps défini un membre du serveur")
        .addUserOption(option => option.setName("target").setDescription("Utilisateur que vous voulez bannir.").setRequired(true)) // args[0]
        .addStringOption(opt => opt.setName("time").setDescription("Temps durant le bannissement du membre").setRequired(true)) // args [1]
        .addStringOption(option => option.setName("reason").setDescription("Raison du ban").setRequired(false)), // args[2]
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction) {

        const args = interaction.options.data
            
        
        let reason = (typeof args[2] !== "undefined") ? args[2].value : "Aucune raison";
        if (args[0].user.bot) return interaction.reply({ content: "Tu ne peux pas bannir un bot !", ephemeral: true})

        const bans = require("../../../services/bans")
        if (bans.check(args[0].user.id)[0]) return interaction.reply({content: `<@${args[0].user.id}> est déjà banni !`, ephemeral: true})

        const user = interaction.guild.members.cache.find(user => user.id === args[0].user.id)
        if (!interaction.member.permissions.has([Permissions.FLAGS.BAN_MEMBERS, Permissions.FLAGS.KICK_MEMBERS])) return interaction.reply({content: "Tu n'as pas la permission d'éxécuter cette commande !", ephemeral: true})
        if (typeof user === "undefined") return interaction.reply({content: "Ce membre ne s'est jamais connecté sur le serveur !" , ephemeral: true})
        if (interaction.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return interaction.reply({ content: "Tu ne peux pas bannir un membre plus haut gradé que toi.", ephemeral: true })
        if (args[0].user.id === interaction.user.id) return interaction.reply({content: "Vous ne pouvez pas vous bannir vous même !", ephemeral: true})
                            
        const embed = new MessageEmbed().setColor("#0099ff").setTitle("Confirmation de bannissement.").setDescription(`Souhaitez-vous vraiment bannir <@${user.id}> ?`)


        const row = new MessageActionRow().addComponents(new MessageButton().setCustomId("ban-confirm").setLabel("Oui").setStyle("PRIMARY")).addComponents(new MessageButton().setCustomId("ban-reject").setLabel("Non").setStyle("DANGER"))

        interaction.reply({ ephemeral: true, embeds: [embed], components: [row] })
        const collector = interaction.channel.createMessageComponentCollector({ filter: async () => true });
        collector.on("collect", async interaction => {

            if (interaction.customId === "ban-confirm") {
                collector.stop()
                user.ban({ reason: reason })
                    .then((member) => {
                        const bans = require("../../../services/bans")
                        bans.create(member.id, interaction.user.id, reason, -1)
                        interaction.update({content: `La bannissement de <@${user.id}> a été effectué avec succé !`, embeds: [], components: [], ephemeral: true})
                        interaction.channel.send({
                            content: `<@${member.id}> a été banni définitivement par <@${interaction.user.id}> ${((reason !== "Aucune raison") ? "pour la raison : " + reason : "")}`
                        })
                    }).catch((err) => {
                        console.error(err)
                    })
            } else if (interaction.customId === "ban-reject") {
                interaction.update({ content: `Le bannisement de <@${user.id}> a été interromput avec succé !`, embeds: [], components: [], ephemeral: true})
                collector.stop()
            }
        })    
    }
}