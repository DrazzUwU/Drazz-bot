const Discord = require("discord.js");

const Client = new Discord.Client();

const prefix = "~";

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    //~ciao
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ciao")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply(" Faut mentionner ducon :^)");
            }
            else{
                if(mention.kickable){
                    mention.kick();
                    message.channel.send("c'est ciao __" + mention.displayName + "__");
                }
                else{
                    message.reply ("tu ne peux pas virer ce pusher :D");
                }
            }
        }
    }
    //~ban
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();
        
            if(mention == undefined){
                message.reply("Il faut mentionner une personne pour bannir :^)");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send("__" + mention.displayName + "__ gerte d'ici");
                }
                else{
                    message.reply("tu es dans l'incapabilit√© de bannir cette personne");
                }
            }
        }
    }
    //~tg / ~untg
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "tg")){
            let mention = message.mentions.members.first();
        
            if(mention == undefined){
                message.reply("Il faut mentionner une personne pour faire fermer sa gueule √† quelqu'un :^)");
            }
            else {
                mention.roles.add("753257762145828935");
                message.channel.send("__" + mention.displayName + "__ a ferm√© sa gueule :)");
            }
        }
        else if (message.content.startsWith(prefix + "untg")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply(" Il faut mentionner une personne pour ne plus qu'elle se tg :^)");
            }
            else {
                mention.roles.remove("753257762145828935");
                message.channel.send("__" + mention.displayName + "__ ne ferme plus sa gueule :D, Gg.");
            }
        }
    }
    //~debitage
    if(message.content.startsWith(prefix + "debitage")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("! On ne debite pas le vide voyons '-' --> indice : ||mentionne un quelqu'un|| .)");
        }
        else {
            message.channel.send("**" + message.author.username + "** D√©bite ses grands morts √† **" + mention.displayName + "**");
        }
    }

    //~suicide
    if(message.content == prefix + "suicide"){
        message.channel.send("**" + message.author.username + "** s'est suicid√© :X , paie √† son √Ęme ");
    }    
        
    //~help
    if(message.content.startsWith(prefix + "help")){
    
        if(message.member.hasPermission("ADMINISTRATOR")){
            message.reply(", Voici la liste des commandes pour les __admins__ bgs ^^ : https://docs.google.com/document/d/1BRYxir2skidvbE53Sr3CZSO7PUIslAnI-EtQjQMtTx0/edit?usp=sharing ");
        }
        else {
            message.reply( ", Voici la liste des commandes pour les __membres__ bgs ^^ : https://docs.google.com/document/d/1a6_a8bAiUe1bhgOhkGYhBvIx0LsP5DOhBvjCZnjxe-k/edit?usp=sharing");
        }
    }
      
    Client.user.setPresence({ activity: {name: "~help", type: "STREAMING", url: "https://www.twitch.tv/drazzuuu"}
     })
    
}); 

Client.login(process.env.TOKEN);