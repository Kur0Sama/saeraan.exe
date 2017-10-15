module.exports = (bot, message) => {

    var prefix = bot.prefix;
    var msg = message.content.toLowerCase();
    var author = message.author;
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);

    if (!msg.startsWith(prefix)) return;

    var cmd = bot.commands.get(cont[0]);

    if (cmd) cmd.run(bot, message, args);

    if (msg === prefix + 'reload') {
        if (!message.guild.member(author).hasPermission("ADMINISTRATOR")) return;
        message.channel.send('Rechargement du bot en cours ...');
        bot.loadAll(bot);
        message.channel.send('Rechargement du bot terminé !');
    }

}

module.exports.config = {
    event: 'message',
};