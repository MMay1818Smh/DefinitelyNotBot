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
client.on("message", (message) => {
     if (!msg.member.hasPermission("KICK MEMBERS")) return;
    if (message.content.startsWith("-kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :white_check_mark: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
