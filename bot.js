const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const channelID = process.env.CHANNEL_ID

client.on('message', message => {
    let channel = client.channels.get(channelID);

    if (message.content === 'ping') {
       message.channel.send('pong');
    }
    
    if (message.content === 'pong') {
        message.channel.send('ping');
    }

    if (message.content === '!introduce') {
        message.channel.send('Wear a Mask, Stay Safe')
    }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret