const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!shift') {
    	message.channel.send({embed: {
  color: 005757,
  description: "@everyone test"
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
    	message.reply('Do not swear in this discord server! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === 'Fuck') {
    	message.reply('Do not swear in this discord server! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === 'bitch') {
    	message.reply('Do not swear in this discord server! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === 'Bitch') {
    	message.reply('Do not swear in this discord server! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === 'cunt') {
    	message.reply('Do not swear in this discord server! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === 'Cunt') {
    	message.reply('Do not swear in this discord server! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === 'asshole') {
    	message.reply('Do not swear in this discord server! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === 'Asshole') {
    	message.reply('Do not swear in this discord server! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === 'ass') {
    	message.reply('Do not swear in this discord server! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === 'Ass') {
    	message.reply('Do not swear in this discord server! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === '!close') {
    	message.channel.send('@everyone This chat is now closed. Talking ***WILL*** get you banned! This is your one and only warning! ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === '!open') {
    	message.channel.send('@everyone The chat is now open. You may now talk freely! ***Scripted by MMay1818***');
  	} 
    });
        client.on('message', message => {
    if (message.content === '!trainings') {
    	message.reply('Im sorry. The Henry Theatre Training Center is not completed yet. DM MMay1818 for more information. ***Scripted by MMay1818***');
  	}
});
client.on('message', message => {
    if (message.content === 'ht') {
    	message.channel.send('***Henry Theatre Assistant**  Henry Theatre assistant is an user-friendly bot scripted by MMay1818. @MR @HR @SHR staff can use this bot to host sessions. Follow the format below: **THEATRE SHOW:** "!show"  **AUDITIONS:** "!auditions"  **TRAININGS:** "!trainings"  ***Copyright 2019. Henry Theatre Assistant|| Scripted by MMay1818');
  	} 
 });
client.on('message', message => {
    if (message.content === '@MMay1818') {
    	message.reply('DO NOT TAG MAY!');
  	}

});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
