var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});



bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
var fri = [];
var sat = [];
var sun = [];
var poll = [friday,saturday,sunday];
});

bot.on('message', function (user, userID, channelID, message, evt) {
        if (message.substring(0, 1) == '!') {
                var args = message.substring(1).split(' ');
                var cmd = args[0];

                args = args.splice(1);
                switch(cmd)
                {
                        case 'ping':
                                bot.sendMessage({
                                to: channelID,
                                message: 'Pong!'
                        });
                break;
                        case 'cpoll':
                                {
                                bot.sendMessage({to: channelID,message: 'Poll created, say !vote "whatever days you can do"'});

                                }
                break;
                        case 'vote':
                                {
        				if (message.substring(0, 1) == 'friday')
						poll[userID][0]=1;
					else if (message.substring(0, 1) == 'saturday')
						poll[userID][1]=1;
					else if (message.substring(0, 1) == 'sunday')
						poll[userID][2]=1;
                                }
                break;
                        case 'print':
                                {
                                	var friday = [];
					var saturday = [];
					var sunday = [];
					var day[] = {friday, saturday, sunday};
					var mostn;
					for(var i=0;i<10000;i++)
					{
					if(poll[i][0] = 1)friday++;
					if(poll[i][1] = 1)saturday++;
					if(poll[i][2] = 1))sunday++;
                               		}
					for(var i=0;i<3;i++)
					{
						if(day[i]>poll[most])
							most = day[i];
						else if(day[i]
					}
					
				}
                break;
                }
        }
});
