module.exports.run = async(bot, message, args) => {

    // ACTIONS

    message.channel.send(`[Ping] Chargement ...`).then((msg => {
        msg.edit(`Ta latennce est : **${msg.createdTimestamp - message.createdTimestamp}ms** \n\nMa latence est : **${bot.ping}ms**`);
    }));

}

module.exports.config = {
    command: 'ping',
};