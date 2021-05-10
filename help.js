//-help
if(message.content.startsWith(prefix + "help")){
    if(message.member.hasPermission("ADMINISTRATOR")){
        message.reply(", Voici la liste des commandes pour les __admins__ bgs ^^ : https://docs.google.com/document/d/1BRYxir2skidvbE53Sr3CZSO7PUIslAnI-EtQjQMtTx0/edit?usp=sharing ");
    }
    else {
        message.reply( ", Voici la liste des commandes pour les __membres__ bgs ^^ : https://docs.google.com/document/d/1a6_a8bAiUe1bhgOhkGYhBvIx0LsP5DOhBvjCZnjxe-k/edit?usp=sharing");
    }
}