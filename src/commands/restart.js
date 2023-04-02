const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const owner = require("../config.js");
const x73db = require("x73db") 
const axios = require('axios'); 
const cheerio = require('cheerio');
const https = require('https');
const dbtoken = new x73db("token")
let fs = require('fs');
const httpsAgent = new https.Agent({ keepAlive: true });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("restartserv")
    .setDescription("Restart Server!")
    .addStringOption(option => 
      option.setName('ip')
      .setDescription('Your Ip')
      .setRequired(true))
  .addStringOption(option =>    
      option.setName('port')
      .setDescription('Your Port')
      .setRequired(true)),
        
    run: async (client, interaction) => {
const gettoken = await dbtoken.get(`token${interaction.member.user.id}`)
if(!gettoken) return await interaction.reply({ content: `:x: - **There is no token registered!**\n Use \`/login\` to create your token.`, ephemeral: true });
let name = 'name'
let token = 'token'
let value1 = await interaction.options.getString("ip")
let ip = 'ip'
let value2 = await interaction.options.getString("port")
let port = 'port'
let mod_key = "default"


interaction.reply({ content: `✅ - **Successfully Restart A Server**`, ephemeral: false }).then(async (res)  => {
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


var link = `http://141.95.225.55/ogp_api.php?gamemanager/restart&token=${gettoken}&ip=${value1}&port=${value2}&mod_key=default`;
await axios.get(link)


}

}