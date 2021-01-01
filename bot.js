const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

    if (message.content === 'ping') {
       message.reply('pong');
    }
    
    if (message.content === 'pong') {
        message.reply('ping');
    }

    if (message.content === '!introduce') {
        message.reply('Wear a Mask, Stay Safe')
    }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret