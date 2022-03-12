const Logger = require("../../tools/logger")
const {lang,config} = require("../../tools/yaml")

module.exports = {
    name: "ready",
    execute(client) {
        Logger([
            `[${(client.user.bot) ? "Bot" : "Membre"}] -- ${client.user.tag}, en ligne sur le serveur  [${client.guilds.cache.get(config.guildId).name}]`,
            `Connection éffectué avec succés -> ${lang.check_icon}`,
            `L'application s'est connecté sur une durée de : ${new Date().getMilliseconds() - client.time}ms`]
            , "ready");
    }
}