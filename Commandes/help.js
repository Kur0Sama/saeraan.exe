module.exports.run = async(bot, message, args) => {

    // IMPORTATIONS

    const fs = require('fs');

    // FICHIERS

    let commandes = fs.readFileSync('Stockage/commandes.txt', 'UTF-8');

    // ACTIONS

    message.channel.send(commandes);

}

module.exports.config = {
    command: 'help',
    aliase0: 'cmd',
    aliase1: 'cmds'
};