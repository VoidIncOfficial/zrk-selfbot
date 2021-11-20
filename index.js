const { Client, Intents } = require('discord.js-selfbot');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], ws: { properties: { $browser: "Discord iOS" } } });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity({ type: "STREAMING", url: "https://www.twitch.tv/timbolsha", name: "Void Inc." });
    zrkInit();
});

const rng = (ma, mi) => Math.floor(Math.random() * (ma - mi + 1)) + mi;

const zrkInit = () => {
    var guild = client.guilds.cache.get('847818417355620352');
    var channel = guild.channels.cache.get('847870712739397693');

    setTimeout(() => { channel.send('-work шахта').catch(() => process.exit(1)); }, rng(1000 * 10, 1000 * 60 * 5));
    setTimeout(() => { channel.send('+work').catch(() => process.exit(1)); }, rng(1000 * 10, 1000 * 60 * 5));

    setInterval(() => { setTimeout(() => { channel.send('-work шахта').catch(() => process.exit(1)); }, rng(1000 * 10, 1000 * 60 * 5)); }, 1000 * 60 * 60 * 12);
    setInterval(() => { setTimeout(() => { channel.send('+work').catch(() => process.exit(1)); }, rng(1000 * 10, 1000 * 60 * 5)); }, 1000 * 60 * 60 * 4);
};

client.login('');
