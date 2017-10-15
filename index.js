// IMPORTATIONS

const Discord = require('discord.js');
const fs = require('fs');
const ffmpeg = require('ffmpeg');
const YTDL = require('ytdl-core');
const opusscript = require('opusscript');

// BOT

const bot = new Discord.Client();

bot.loadAll = require('./Fonctions/loadAll.js');
bot.log = require('./Fonctions/log.js');
bot.sendError = require('./Fonctions/sendErrorEmbed.js');
bot.playSong = require('./Fonctions/playSong.js');

bot.config = require('./parametres.json');
bot.prefix = bot.config.prefixe;

// FICHIERS

let userData = JSON.parse(fs.readFileSync("Stockage/userData.json", "UTF-8"));

// ACTIONS

bot.loadAll(bot);

// EVENNEMENTS

bot.on('message', message => require('./Evenements/message.js')(bot, message));
bot.on('guildMemberAdd', member => require('./Evenements/guildMemberAdd.js')(bot, member));
bot.on('guildMemberQuit', member => require('./Evenements/guildMemberQuit.js')(bot, member));
//bot.on('messageReactionAdd', (reaction, user) => require('./Evenements/messageReactionAdd.js')(bot, reaction, user));
bot.on('ready', () => require('./Evenements/ready.js')(bot));

// LOGIN

bot.login(process.env.BOT_TOKEN);
