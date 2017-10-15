module.exports = (bot, member) => {

    member.guild.channels.get('361519247043592194').send({
        embed: {
            title: "Leave",
            description: "**" + member.user.username + "** à quitté le serveur !",
        }
    });

}

module.exports.config = {
    event: 'guildMemberRemove',
};