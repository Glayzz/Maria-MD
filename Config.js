const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['+2349013810191']
global.ownername = "Glayzz_4T9ne 💀"//owner name
global.ytname = "YT: Glayzz_4T9ne"
global.socialm = "GitHub: Glayzz"
global.location = "5th Dimension"

global.botname = 'GLAYZZ_4T9NE_XD //name of the bot

//sticker details
global.stickername = 'Glayzz_4T9ne_XD'
global.packname = 'Sticker By'
global.author = 'Glayzz_4T9ne'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Glayzz botz inc."

//theme link
global.link = 'linktr.ee/glayzz4t9ne
//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Glayzz Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/AYUSH-PANDEY023/Maria-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
