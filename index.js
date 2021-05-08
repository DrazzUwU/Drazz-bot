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

    //|ban
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();
        
            if(mention == undefined){
                message.reply("Il faut mentionner une personne pour bannir :^)");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " gerte d'ici");
                }
                else{
                    message.reply("tu es dans l'incapabilité de bannir cette personne");
                }
            }
        }
    }
    //|tg / |untg
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "tg")){
            let mention = message.mentions.members.first();
        
            if(mention == undefined){
                message.reply("Il faut mentionner une personne pour faire fermer sa gueule à quelqu'un :^)");
            }
            else {
                mention.roles.add("840519457339998208");
                message.channel.send(mention.displayName + ("a fermé sa gueule :)"));
            }
        }
        else if (message.content.startsWith(prefix + "untg")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Il faut mentionner une personne pour ne plus qu'elle se tg :^)");
            }
            else {
                mention.roles.remove("840519457339998208");
                message.channel.send(mention.displayName + ("ne ferme plus sa gueule :D, Gg."));
            }
        }
    }
});


Client.login(process.env.TOKEN);