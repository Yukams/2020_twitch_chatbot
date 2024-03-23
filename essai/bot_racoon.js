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
        username: "RioCooNBot",
        password: "<pwd>"
    },
    channels: [
        "<>",
    ]
};

// Crée un nouveau client
let client = new tmi.client(tmiConfig);

// Se connecte à l'IRC
client.connect();

console.log("\n*** RioCooNBot v1.0.0 is now on ***\n");

var anti_blocage = 0; // Permet de passer le blocage de 30s sur Twitch lors du post du même message


// Lance la lecture des messages et les affiches sur le Terminal
client.on('message', (channel, tags, message, self) => 
{ 
	//if(self) return;
    
    // !raccoon
    if(message.match('!raccoon'))
    {
        console.log("\n*** Message automatique envoyé ***\n");

        if(anti_blocage%2 == 0)
            {
                client.say(channel, `RaccAttack RaccAttack RaccAttack RaccAttack RaccAttack RaccAttack RaccAttack`);
            }
        else
            {
                client.say(channel, `RaccAttack RaccAttack RaccAttack RaccAttack RaccAttack RaccAttack RaccAttack RaccAttack`);
            }
            anti_blocage ++;
    }
    
    
    // !riocoon
    else if(message.match('!riocoon'))
    {
        console.log("\n*** Message automatique envoyé ***\n");

        if(anti_blocage%2 == 0)
            {
                client.say(channel, `RaccAttack <>, 21 ans, Mastère Expert en Stratégie Digitale RaccAttack`);
            }
        else
            {
                client.say(channel, `RaccAttack RaccAttack Marion, 21 ans, Mastère Expert en Stratégie Digitale RaccAttack RaccAttack`);
            }
            anti_blocage ++;
    }

        
    // !riocoonbot
    else if(message.match('!bot'))
    {
        console.log("\n*** Message automatique envoyé ***\n");

        if(anti_blocage%2 == 0)
            {
                client.say(channel, `RaccAttack MrDestructoid beep bop boop MrDestructoid  RaccAttack`);
            }
        else
            {
                client.say(channel, `RaccAttack RaccAttack MrDestructoid beep bop boop MrDestructoid RaccAttack RaccAttack`);
            }
            anti_blocage ++;
    }
}

);