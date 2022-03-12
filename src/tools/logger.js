
/**
 * @param {Array} messages 
 * @param  {String} event 
 */

function log(messages, event) {
    switch (event) {
        case "ready":
            console.log("\n");
            console.log('-=-=-=-=-=-=-=-=-=-=- LANCEMENT =-=-=-=-=-=-=-=-=-=-=');
            if (Array.isArray(messages)) {
                messages.forEach(message => console.log(message))
            } else {
                console.log(messages)
            }
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;
        case "file_command":
            console.log("\n");
            console.log('-=-=-=-=- RECUPERATION DES FICHIERS DE COMMANDE =-=-=-=-=');
            if (Array.isArray(messages)) {
                messages.forEach(message => console.log(message))
            } else {
                console.log(messages)
            }
            console.log(`-=-=-=-${messages.length} fichiers de commande-=-=-=`);
            break;
        case "file_event":
            console.log("\n");
            console.log('-=-=- RECUPERATION DES FICHIERS DES EVENEMENTS =-=-=-=-=');
            if (Array.isArray(messages)) {
                messages.forEach(message => console.log(message))
            } else {
                console.log(messages)
            }
            console.log(`-=-=-=-${messages.length} fichiers d'évènement -=-=-=`);
            break;
        case "file_lang":
            console.log("\n");
            console.log('-=-=-=-=- RECUPERATION DES FICHIERS LANGUE =-=-=-=-=');
            if (Array.isArray(messages)) {
                messages.forEach(message => console.log(message))
            } else {
                console.log(messages)
            }
            console.log(`-=-=-=-${messages.length} fichiers de langue-=-=-=`);
            break;
        case "file_config":
            console.log("\n");
            console.log('-=-=-=-=- RECUPERATION DES FICHIERS CONFIG =-=-=-=-=');
            if (Array.isArray(messages)) {
                messages.forEach(message => console.log(message))
            } else {
                console.log(messages)
            }
            console.log(`-=-=-=-${messages.length} fichiers de configuration-=-=-=`);
            break;

        default:
            break;
    }
}


module.exports = log