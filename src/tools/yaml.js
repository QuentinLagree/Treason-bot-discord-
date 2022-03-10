const { parse } = require("yaml")
const { readdirSync, readFileSync } = require("fs")
const configFiles = {}

const configs = readdirSync("./config/").filter(file => file.endsWith(".yml"));

for (const files of configs) {
    const file = readFileSync(`./config/${files}`, "utf-8")
    console.log(`Chargement du fichier de config : ${files.split(".")[0]}`)
    configFiles[files.split(".")[0]] = parse(file)
}

module.exports = configFiles