const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "D-";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    //-ciao
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ciao")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply(" Faut mentionner ducon :^)");
            }
            else{
                if(mention.kickable){
                    mention.kick();
                    message.channel.send("c'est ciao" + mention.displayName);
                }
                else{
                    message.reply ("tu ne peux pas virer ce pusher :D");
                }
            }
        }
    }
    //-ban
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
    //-tg / -untg
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "tg")){
            let mention = message.mentions.members.first();
        
            if(mention == undefined){
                message.reply("Il faut mentionner une personne pour faire fermer sa gueule à quelqu'un :^)");
            }
            else {
                mention.roles.add("753257762145828935");
                message.channel.send(mention.displayName + " a fermé sa gueule :)");
            }
        }
        else if (message.content.startsWith(prefix + "untg")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply(" Il faut mentionner une personne pour ne plus qu'elle se tg :^)");
            }
            else {
                mention.roles.remove("753257762145828935");
                message.channel.send(mention.displayName + " ne ferme plus sa gueule :D, Gg.");
            }
        }
    }
    

    
        
}); 

Client.login(process.env.TOKEN);