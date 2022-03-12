const { parse } = require("yaml")
const { readdirSync, readFileSync } = require("fs")
const Logger = require("./logger")
const configFiles = {}

const configs = readdirSync("./config/").filter(file => file.endsWith(".yml"));

const configsLog = []
for (const files of configs) {
    const file = readFileSync(`./config/${files}`, "utf-8")
    configsLog.push(`Chargement du fichier de config : ${files.split(".")[0]} -> ✅`)
    configFiles[files.split(".")[0]] = parse(file)
}
Logger(configsLog, "file_config")
module.exports = configFiles