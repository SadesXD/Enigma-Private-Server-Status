const axios = require("axios")
const cheerio = require("cheerio")

function status(){
    axios({
        method:'get',
        url:"http://enigmaps.eu"
    }).then(res => {
        let $ = cheerio.load(res.data)
        let online = $('span#severUpLabel').text().split(" | ")[1].split(" ")[0]
        let world = $('span#worldsLabel').text().split(" | ")[1]
        let users = $('span#usersLabel').text().split(" | ")[1]
        let guild = $('span#guildsLabel').text().split(" | ")[1]
        let desc = `[ Enigma Server ]

- Player Onlines: ${parseInt(online).toLocaleString() || 0} PLayers onlines
- Worlds Created: ${parseInt(world).toLocaleString()} Worlds Created
- Account Created: ${parseInt(users).toLocaleString()} Account Cerated
- Guild Created: ${parseInt(guild).toLocaleString()} Guilds Created\n`
        console.log(desc);
        process.exit()
    }).catch(err => {
        console.log(err);
    })
}

try{
    status()
}catch{
    console.log("Server is down OR you don't have internet connection.");
}
