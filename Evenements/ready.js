module.exports = (bot) => {
    bot.user.setGame('coder un lama...');
    bot.log('Info', `Je suis ${bot.user.username} et je suis prêt !`);
}

module.exports.config = {
    event: 'ready',
};