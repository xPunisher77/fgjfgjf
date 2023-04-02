const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const config = require("../config.js");
const x73db = require("x73db") 
const axios = require('axios'); 
const cheerio = require('cheerio');
const https = require('https');
const dbtoken = new x73db("token")
let fs = require('fs');
const httpsAgent = new https.Agent({ keepAlive: true });

module.exports = {
    data: new SlashCommandBuilder()
      .setName("setexpiration")
      .setDescription("Server Expiration Date To Server!")
      .addStringOption(option => 
        option.setName('serverid')
        .setDescription('Your serverid')
        .setRequired(true))
    .addStringOption(option =>    
        option.setName('time')
        .setDescription('Your server time')
        .setRequired(true)),
        
    run: async (client, interaction) => {

      const gettoken = await dbtoken.get(`token${interaction.member.user.id}`)
      if(!gettoken) return await interaction.reply({ content: `:x: - **There is no token registered!**\n Use \`/login\` to create your token.`, ephemeral: true });
      let name = 'name'
      let token = 'token'
      let value1 = await interaction.options.getString("serverid")
      let serverid = 'serverid'
      let value2 = await interaction.options.getString("time")
      let time = 'time'

      interaction.reply({ content: `✅ - **Successfully Set Expiration Date**`, ephemeral: false }).then(async (res)  => {
        console.log(res.data)
          if(res.data.message == "This function is restricted to administrator accounts.") return await interaction.reply({ content: `:x: - **${res.data.message}**`, ephemeral: true }).then((e) => {
          console.log(`${res.data.message}`)  
           });
        await interaction.reply({ content: `:x: - **${res.data}**`, ephemeral: true }).then((e) => {
          console.log(`${res.data}`) 
           });  
        })
        .catch(async error => {
             console.log(error)
             interaction.reply({ content: `:x: - **Wrong informations**`, ephemeral: true }); 
        
        
        })

      var link = `http://141.95.225.55/ogp_api.php?user_games/set_expiration&token=${gettoken}&home_id=${value1}&timestamp=${value2}`;
await axios.get(link)






}

}