const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const config = require("../config.js");
let ip = config.ip
const x73db = require("x73db") 
const axios = require('axios'); 
const cheerio = require('cheerio');
const https = require('https');
const dbtoken = new x73db("token")
let fs = require('fs');
const serverip = config.serverip

const httpsAgent = new https.Agent({ keepAlive: true });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("removeuser")
    .setDescription("Remove a user!")
      .addStringOption(option => 
    option.setName('email')
    .setDescription('Your Username')
    .setRequired(true)),
    run: async (client, interaction) => {

      interaction.reply({ content: `✅ - **Successfully Deleting a  account**`, ephemeral: true })

const gettoken = await dbtoken.get(`token${interaction.member.user.id}`)
if(!gettoken) return await interaction.reply({ content: `:x: - **There is no token registered!**\n Use \`/login\` to create your token.`, ephemeral: true });
let name = 'name'
let token = 'token'      
let value1 = await interaction.options.getString("email")
let email = 'email'



var link = `http://141.95.225.55/ogp_api.php?user_admin/remove&token=${gettoken}&email=${value1}`;
await axios.get(link)



.then(async (res)  => {
console.log(res.data)
  if(res.data.message == "This function is restricted to administrator accounts.") return await interaction.reply({ content: `:x: - **${res.data.message}**`, ephemeral: true }).then((e) => {
  console.log(`${res.data.message}`)  
   });
   if(res.data.message == "200") return await interaction.reply({ content: `✅ - **Successfully Deleting Account**`, ephemeral: true }).then((e) => {
   });

 if(res.data.includes("Duplicate entry")) return await interaction.reply({ content: `:x: - **Failed to Remove account,**`, ephemeral: true }).then((e) => {
   });  
await interaction.reply({ content: `:x: - **${res.data}**`, ephemeral: true }).then((e) => {
  console.log(`${res.data}`) 
   });  
})
.catch(async error => {
     console.log(error)
     interaction.reply({ content: `:x: - **Wrong informations**`, ephemeral: true }); 


})



  /* 
axios
    .get(`${ip}/test_api.php`, {((((((((((((()))))))))))))
        httpsAgent,((((((((((((()))))))))))))
        params: {
            cat_id: '876',
        },(((((())))))(())
        headers: {
            'Accept-Encoding': 'gzip, deflate, br',((((((((((((((((((()))))))))))))))))))
        },
        //is the same as set the entire url
    })
    .then((res) => {
        let status = res.status;
        console.log(status);
        //This should now output the html content
        console.log(res.data);
    })
    .catch(err => console.error(err));

*/
      
    
    }
 };