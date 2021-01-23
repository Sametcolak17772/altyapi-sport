const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "yardım",
  aliases: ["y"],
  description: "Tüm komutları ve açıklamaları görüntüle",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("CnrX Müzik BOT Yardım Menüsü")
      .setDescription("CnrX BOT Tüm Komutlar")
      .setColor("#ff000");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
