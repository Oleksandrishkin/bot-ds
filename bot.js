import { Client, GatewayIntentBits } from 'discord.js';
const Discord = require('discord.js');
const client = new Discord.Client();
const id = '!'
client.on('ready', () => {
    console.log(`бот запустився ${client.user.tag}`);
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login("MTE5MjExMjI2NjM1MTQ4OTE1NQ.GpHJ_j.jk0YiM64De_CKhiDhR3qZyy-cOpMh5Pd6uEuzg");