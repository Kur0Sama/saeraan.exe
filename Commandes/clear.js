module.exports.run = async(bot, message, args) => {

    // IMPORTATIONS

    const fs = require('fs');

    // FICHIERS

    var params = JSON.parse(fs.readFileSync("./parametres.json", "UTF-8"));

    // VARIABLES

    var prefix = params.prefixe;
    var author = message.author;

    // ACTIONS

    if (!message.guild.member(author).hasPermission("ADMINISTRATOR")) return;

    if (isNaN(args[0])) {
        message.channel.send("Utilisez un nombre comme argument ! \n Utilisation : " + prefix + "clear <nombre>");
    }

    async function clear() {

        const fetched = await message.channel.fetchMessages({
            limit: args[0]
        } + 1);
        console.log(`${fetched.size - 1} messages trouvé(s), suppression ...`);

        const fetched0 = fetched.size - 1;
        message.channel.send("`" + fetched0 + " messages supprimé(s) !`")

        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Erreur : ${error}`));
    }

    clear();

}

module.exports.config = {
    command: 'clear',
    aliase0: 'clean',
    aliase1: 'purge'
};