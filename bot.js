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
    if (message.content === 'fuck') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'Fuck') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'bitch') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'Bitch') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'cunt') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'Cunt') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'asshole') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'Asshole') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'ass') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === 'Ass') {
    	message.reply('Do not swear in this discord server!');
  	}
});
client.on('message', message => {
    if (message.content === '-close') {
    	message.channel.send('@everyone This chat is now closed. Talking WILL get you banned! This is your one and only warning!');
  	}
});
client.on('message', message => {
    if (message.content === '-open') {
    	message.channel.send('@everyone The chat is now open. You may now talk freely!');
  	} 
    });
client.on('message', message => {
    if (message.content === 'transfer') {
    	message.channel.send('**TRANSFER OF OWNERSHIP** To all of you who dont know, @Omq_Conner now owns May Cafe. MMay1818 just holds the group and oversees it. **PLEASE DONT DM MMAY1818 OR TAG HIM WITH ANY QUESTIONS** You can DM @omq_conner or tag him. -May Cafe Assistant. [Announcement posted by: MMay1818 on 9-4-18 at 9:14 PM EST]');
  	} 
 });
client.on('message', message => {
    if (message.content === '@MMay1818') {
    	message.reply('DO NOT TAG MAY!');
  	}

});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
