const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("610460106433232933")
setInterval(function() {
channel.send(`عطني يالبوت كريديت كثار مره مره مره مره عطني كثييير مرررررررره`);
}, 30)
})

client.login(process.env.BOT_TOKEN);