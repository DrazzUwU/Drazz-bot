const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "|";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    //|suicide
    if(message.content == prefix + "suicide"){
        message.channel.send("**" + message.author.username + "** s'est suicidé :X , paie à son âme ");
    }
});


Client.login(process.env.TOKEN);