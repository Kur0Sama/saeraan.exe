module.exports.run = async (bot, message, args) => {
    message.react(bot.emojis.find('name', 'baka'));
    message.react(bot.emojis.find('name', 'neko'));
}

module.exports.config = {
    command: 'roles',
}