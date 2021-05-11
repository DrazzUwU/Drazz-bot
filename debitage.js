const { MessageMentions } = require("discord.js");

if(message.content.startsWith(prefix + "debitage")){
    message.reply(" debite ses morts à " + MessageMentions)

    if(mention == undefined){
        message.reply("Il faut mentionner une personne pour debiter :^)");
    }
}
