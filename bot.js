const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '-shift') {
    	message.channel.send('@everyone Shift! Come on down to the cafe for a possible promotion! https://www.roblox.com/games/1835287884/May-Cafe');
  	}
});
client.on('message', message => {
    if (message.content === '-interviews') {
    	message.channel.send('@everyone Interviews! Interviews are starting in 15 minutes! Hurry and join! https://www.roblox.com/games/1887056994/May-Cafe-Interview-Centere');
    }
});
client.on('message', message => {
    if (message.content === '-trainings') {
    	message.channel.send('@everyone Trainings! Trainings are starting in 15 minutes! Hurry and join! https://www.roblox.com/games/1890506534/May-Cafes-GRAND-OPENING-Trainings');
  	}
});
client.on('message', message => {
    if (message.content === '-ban') {
    	message.reply('You will now be banned for banning someone else!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
