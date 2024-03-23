// CHATBOT TWITCH

// sleep function
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   

const tmi = require('tmi.js');

const tmiConfig = {
    options: {
        debug: true
    },
    connection: {
        reconnect:  true
    },
    identity: {
        username: "<username>",
        password: "<pwd>"
    },
    channels: [
        "BibixHD",
    ]
};

// initialisation du son
const player = require('play-sound')();
player.play('./audio/start_sound.mp3');

// Crée un nouveau client
let client = new tmi.client(tmiConfig);

// Se connecte à l'IRC
client.connect();
    
var anti_blocage = 0; // Permet de passer le blocage de 30s sur Twitch lors du post du même message


// Lance la lecture des messages et les affiches sur le Terminal
client.on('message', (channel, tags, message, self) => 
{ 
	//if(self) return;
    
    // Envoie un son d'alerte quand Bibix lance son live
    if(tags.username === 'streamelements')
    {
        if (message.match(/BibixHD is now live!/g))
        {
            console.log("\n*** !!! Bibix est en live !!! ***\n");
            player.play('./audio/live_starts.mp3')
        }
    }
    
    
    if(tags.username === 'bibixhd')
    {
        console.log("\n*** !!! Bibix a parlé dans le chat !!! ***\n");
        player.play('./audio/bibix_spoke.mp3')
    }
    

    // Envoie une emote (bibNewsubs) lorsque quelqu'un s'abonne (moobot)
    if(tags.username === 'moobot')
    {
        if (message.match(/bibNewsubs/g) || message.match(/gift sub/g) || message.match(/offert un sub/g))
        {
            console.log("\n*** Message automatique envoyé ***\n");
            player.play('./audio/notification_sound.mp3')
            
            if(anti_blocage%2 == 0)
                {
                    client.say(channel, `bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs`);
                }
            else
                {
                    client.say(channel, `bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs bibNewsubs`);
                }
                anti_blocage ++;
        }
	}
    
    
    // Envoie une emote (bibKappabits) si quelqu'un fait un don en bits (moobot)
    else if(tags.username === 'moobot')
    {
        if (message.match(/bits/g) || message.match(/support/g))
        {
            console.log("\n*** Message automatique envoyé ***\n");
            player.play('./audio/notification_sound.mp3')
            
            if(anti_blocage%2 == 0)
            {
                client.say(channel, `bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits`);
            }
            else
            {
                client.say(channel, `bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits bibKappabits`);
            }
            anti_blocage ++;
        }
	}
    
    
    // Envoie une emote (bibGg) si un modérateur l'envoie dans le chat
    else if(tags.mod)
        {
        if (message.match(/bibGg/g))
            {
                console.log("\n*** Message automatique envoyé ***\n");
                player.play('./audio/notification_sound.mp3')
            
                if(anti_blocage%2 == 0)
                    {
                        client.say(channel, `bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg`);
                    }
                else
                    {
                        client.say(channel, `bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg bibGg`);
                    }
                    anti_blocage ++;
            }
        }
    
    // Préviens lorsque l'on reçoit un message
    if(message.match(/<username>/g) || message.match(/<username>/g))
        {
            player.play('./audio/message_sound.mp3')
        }
    
    
    // Spam test
    /*if(tags.username == self)
        {
            if(message.match(/#spam/g))
            {
                while(true)
                {
                    if(anti_blocage%2==0)
                        {
                        client.say(channel, "_ _spam_ _")
                        }
                    else
                        {
                        client.say(channel, "__spam__")
                        }
                    anti_blocage++
                    sleep(1000)
                }
            }
        }*/
            
}
);