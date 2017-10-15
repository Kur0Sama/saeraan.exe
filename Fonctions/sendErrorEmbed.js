module.exports = (bot, id, description) => {

    bot.channels.get(id).send({embed: {
        color: 0xdd3333,
        description: ":x: " + description,
    }});

}

module.exports.config = {
    func: 'sendErrorEmbed',
};