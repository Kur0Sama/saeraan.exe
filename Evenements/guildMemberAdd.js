module.exports = (bot, member) => {

    var role = member.guild.roles.find('name', '> Membre');
    member.addRole(role);

    member.guild.channels.get('361519247043592194').send({
        embed: {
            title: "Join",
            description: "**" + member.user.username + "** à rejoins le serveur !",
        }
    });

}

module.exports.config = {
    event: 'guildMemberAdd',
};