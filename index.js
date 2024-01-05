const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const id = '!'
client.on('ready', () => {
    console.log(`бот запустився ${client.user.tag}`);
})

client.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(id)) return;

    const args = msg.content.slice(id.length).split(/ +/)
    const cmd = args.shift().toLowerCase()
    if (cmd === 'ping') {
        msg.reply('pong')
    }
});



client.login('MTE5MjExMjI2NjM1MTQ4OTE1NQ.G5NWQ0.OUFwKWhtZcP8fW6C29Ryv26ptuxyVGBzJuw0nM');