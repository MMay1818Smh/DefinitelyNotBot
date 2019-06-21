const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '-test') {
    	message.reply('@everyone hi enjoy this random tag!)');
  	}
});
client.on('message', message => {
    if (message.content === '-help') {
    	message.reply({embed: {
  color: 0xff0000,
  title: "Flippin' Burgers Help",
  description: "-command here"
  
}});;
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
