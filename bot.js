const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '-shift') {
    	message.reply.send ({embed: {
  color: 0xff0000,
  title: "Session Announcement",
  description: " test"
  
}});;
  	}
});
client.on('message', message => {
    if (message.content === '!auditions') {
    	message.channel.send('@everyone `Auditions are happening in 15 minutes. These are hosted by @Management and up. Come on down to get an actor position! https://www.roblox.com/games/2744510875/Auditions ` ***Scripted by MMay1818***');
    }
});
client.on('message', message => {
    if (message.content === '') {
    	message.channel.send('');
  	}
});
client.on('message', message => {
    if (message.content === 'fuck') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'Fuck') {
    	message.reply('Do not swear in this discord server! ');
  	}
});
client.on('message', message => {
    if (message.content === 'bitch') {
    	message.reply('Do not swear in this discord server! ');
  	}
});
client.on('message', message => {
    if (message.content === 'Bitch') {
    	message.reply('Do not swear in this discord server! ');
  	}
});
client.on('message', message => {
    if (message.content === 'cunt') {
    	message.reply('Do not swear in this discord server! ');
  	}
});
client.on('message', message => {
    if (message.content === 'Cunt') {
    	message.reply('Do not swear in this discord server! ');
  	}
});
client.on('message', message => {
    if (message.content === 'asshole') {
    	message.reply('Do not swear in this discord server! ');
  	}
});
client.on('message', message => {
    if (message.content === 'Asshole') {
    	message.reply('Do not swear in this discord server! ');
  	}
});
client.on('message', message => {
    if (message.content === 'ass') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'Ass') {
    	message.reply('Do not swear in this discord server! ');
  	}
});
client.on('message', message => {
    if (message.content === '!close') {
    	message.channel.send('@everyone This chat is now closed. Talking ***WILL*** get you banned! This is your one and only warning! ');
  	}
});
client.on('message', message => {
    if (message.content === '!open') {
    	message.channel.send('@everyone The chat is now open. You may now talk freely! ');
  	} 
    });
        client.on('message', message => {
    if (message.content === '!trainings') {
    	message.reply('Im sorry. The Henry Theatre Training Center is not completed yet. DM MMay1818 for more information. ');
  	}
});
client.on('message', message => {
    if (message.content === 'ht') {
    	message.channel.send('');
  	} 
 });
client.on('message', message => {
    if (message.content === '@MMay1818') {
    	message.reply('DO NOT TAG MAY!');
  	}

});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
