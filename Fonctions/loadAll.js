module.exports = async(bot) => {

    // IMPORTATIONS

    const Discord = require('discord.js');
    const fs = require('fs');

    // VARIABLES

    bot.commands = new Discord.Collection();
    bot.events = new Discord.Collection();
    bot.funcs = new Discord.Collection();

    // ACTIONS

    console.log(` `);

    fs.readdir('./Commandes/', async(err, files) => {
        if (err) console.error(err);

        var jsfiles = files.filter(f => f.split('.').pop() === 'js');

        console.log(`─┬─► ${jsfiles.length} Commandes trouvées.`);
        console.log(` ├──────────────────────────────────────────────────────`);

        jsfiles.forEach((f, i) => {
            delete require.cache[require.resolve(`../Commandes/${f}`)];
            var cmds = require(`../Commandes/${f}`);
            if (cmds.config.aliase2) console.log(` ├───► ${f} : [${cmds.config.command}, ${cmds.config.aliase0}, ${cmds.config.aliase1}, ${cmds.config.aliase2}]`);
            else if (cmds.config.aliase1) console.log(` ├───► ${f} : [${cmds.config.command}, ${cmds.config.aliase0}, ${cmds.config.aliase1}]`);
            else if (cmds.config.aliase0) console.log(` ├───► ${f} : [${cmds.config.command}, ${cmds.config.aliase0}]`);
            else console.log(` ├───► ${f} : [${cmds.config.command}]`);
            bot.commands.set(cmds.config.command, cmds);
            bot.commands.set(cmds.config.aliase1, cmds);
            bot.commands.set(cmds.config.aliase2, cmds);
            bot.commands.set(cmds.config.aliase3, cmds);

        })

        console.log(` └──────────────────────────────────────────────────────`);
        console.log(` `);
    });

    fs.readdir('./Evenements/', async(err, files) => {
        if (err) console.error(err);

        var jsfiles = files.filter(f => f.split('.').pop() === 'js');

        console.log(`─┬─► ${jsfiles.length} Evenements trouvés.`);
        console.log(` ├──────────────────────────────────────────────────────`);

        jsfiles.forEach((f, i) => {
            delete require.cache[require.resolve(`../Evenements/${f}`)];
            var events = require(`../Evenements/${f}`);
            console.log(` ├───► ${f} : [${events.config.event}]`);
            bot.events.set(events.config.event, events);

        })

        console.log(` └──────────────────────────────────────────────────────`);
        console.log(` `);

    });

    fs.readdir('./Fonctions/', async(err, files) => {
        if (err) console.error(err);

        var jsfiles = files.filter(f => f.split('.').pop() === 'js');

        console.log(`─┬─► ${jsfiles.length} Fonctions trouvés.`);
        console.log(` ├──────────────────────────────────────────────────────`);

        jsfiles.forEach((f, i) => {
            delete require.cache[require.resolve(`../Fonctions/${f}`)];
            var funcs = require(`../Fonctions/${f}`);
            console.log(` ├───► ${f} : [${funcs.config.func}]`);
            bot.funcs.set(funcs.config.func, funcs);

        })

        console.log(` └──────────────────────────────────────────────────────`);
        console.log(` `);

    });

}

module.exports.config = {
    func: 'loadAll',
};