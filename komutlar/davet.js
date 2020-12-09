const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

// var user = message.mentions.users.first() || message.author; 
 //if(message.channel.type === 'dm'){

//} else {

  //message.channel.send("dmden kullana bilirsin")

//}
const embed = new Discord.MessageEmbed()
.setImage("https://cdn.discordapp.com/attachments/764412355894444064/771068027693039626/ezgif.com-gif-maker_5.gif")
.setTitle("RED-EYE")
.setURL("http://red-eye.cf/")
.setDescription("Beni kendi sunucuna davet edebilirsin <a:xd:759006834933235753>")
.setColor("#ff0000")
.setTimestamp()
.setFooter("http://red-eye.cf/", client.user.avatarURL())
.addField("Davet Linki",`<a:xd:759006957519503391> [Davet!](https://discord.com/api/oauth2/authorize?client_id=769925416918974474&permissions=8&scope=bot)\n\<a:xd:759006957519503391>[Oy!](https://top.gg/bot/769925416918974474)`)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: true, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};