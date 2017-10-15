module.exports = (bot, connection, message, queue) => {

    // IMPORTATIONS

    const YTDL = require('ytdl-core');

    // ACTIONS

    const dispatcher = connection.playStream(YTDL(queue[0], {
        filter: "audioonly"
    }));

    queue.shift();

    dispatcher.on("end", function () {
        if (queue[0]) play(connection, message);
        else connection.disconnect();
    });

}

module.exports.config = {
    func: 'playSong',
}