//requirements (imports)
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

//Global constants
const testChannelID = '796772272386998346';

//uses my specific token to create a client connection to discord to the bot
client.login(process.env.BOTTOKEN);

/**
 * Determine when the client is connected and ready
 * @param  {event} 'ready'
 */
client.once('ready', () => {

	const channel = client.channels.cache.get(testChannelID);
	console.log("Client is ready!");

});

/**
 * If a message was sent by Alan and contains "hello" or "Hello" then it replies "Hello King"
 * @param  {event} 'message'
 * @param {message} message
 */
client.on('message', message => {

	if (message.author.bot) {
		return;
	}

	var testId = message.author.id;
	//If the message is from Alan always respond with hello king
	if ((message.content.includes("hello") || message.content.includes("Hello"))) {
		return message.reply("Fuck You!");
	}
});