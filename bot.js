//-----TWITCH-----//

var tmi = require('tmi.js');

var options = {
    options : {
        debug : true
    },
    connection : {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "4mados",
        password: "oauth:136sh6l5m7zk51aky3jmt4o9pdmxeh"
    },
    channels: ["thearkxiv"]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', (channel, user, message, self) => {
    if(self) return;
    if(message === "!twitter"){
        client.action("thearkxiv", "Suivez ArK ici : twitter.com/thearkxiv");
    }
    if(message === "!planning"){
        client.action("thearkxiv", "Le planning : arklabs.pe.hu/planning.html");
    }
 
});

client.on("hosted", (channel, username, viewers, autohost) => {
    client.action("thearkxiv", username + " host maintenant la chaine pour " + viewers + " viewers");
});

client.on("hosting", (channel, target, viewers) => {
    client.action("thearkxiv", "ArK host maintenant " + target);
});


client.on("ban", (channel, username, reasons) => {
    client.action("thearkxiv", username + " a été banni du centre.")
});


client.on('connected', (address, port) => {
    client.action("thearkxiv", " Pret a commencer les tests");
});


//-----DISCORD-----//

const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json'); 

bot.on('ready',() => {
   console.log('Discord : Online!');
   bot.user.setGame('Gerer le centre').catch(console.error);
});



bot.on('message', message => {
   if (message.author.bot) return;
   if (!message.content.startsWith(config.prefix)) return;
   
   let command = message.content.split(" ")[0];
   command = command.slice(config.prefix.length);
   
   let args = message.content.split(" ").slice(1);
   
   if (command === "ping"){
       message.channel.send('pong');
   } else 
       
   if (command === ""){
       message.channel.send('');
   }
});

bot.login(config.token);

//-----TWITTER-----//

var Twit = require('twit');
var T = new Twit({
  consumer_key:         'FkHzL1M1RJumLm7UYYuL8RTlo',
  consumer_secret:      'qSTJ0AbRhQAfHa6QS7SOXXHsemeYcCWC2rAqHQNJ7qCvTUIjOw',
  access_token:         '785785437096964097-jWu9VRaD7IAE6HHhrOChancb9C6eTf2',
  access_token_secret:  'n0CjcnUJ6RDG5BIGRNkqeh4iKKAfL7mDZ0Hm9RtUxIk8b',
});
