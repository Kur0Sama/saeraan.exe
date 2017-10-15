module.exports.run = async(bot, message, args) => {

    // IMPORTATIONS

    const ffmpeg = require('ffmpeg');
    const YTDL = require('ytdl-core');
    const opusscript = require('opusscript');

    // VARIABLES

    var prefix = 'sr:';

    var cont = message.content.slice(prefix.length).split(" ");
    var arg = cont.slice(1);

    const queue = [];

    // ACTIONS

    if (arg[0] === 'play') {
        if (!arg[1]) {
            bot.sendError(bot, message.channel.id, "Erreur, entrez une URL youtube ...");
            return;
        }

        if (!message.member.voiceChannel) {
            bot.sendError(bot, message.channel.id, "Erreur, connecte-toi à un channel vocal !");
            return;
        }

        queue.push(arg[1].toString());

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function (connection) {
            bot.playSong(bot, connection, message, queue);
        });
    } else if (arg[0] === 'stop') {
        if (message.guild.voiceConnection) {
            message.guild.voiceConnection.disconnect();
        }
        message.channel.send('Info : la musique à été arrétée !');
    } else {
        bot.sendError(bot, message.channel.id, `Erreur, sous-commande inconnue ... Utilisation : sr:music <play|stop>`);
    }

}

module.exports.config = {
    command: 'music',
};