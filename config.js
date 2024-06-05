const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923186092412";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_57_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICA1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NixcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICA1LFxuICAgICAgICA0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MixcbiAgICAgICAgNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICAzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQyLFxuICAgICAgICA3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPallKQytDQjMyTTk1WmhyWVVHYng1bE1yazNRb25SSkR0dDAzbHJKWjJrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE4NjA5MjQxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjk2QzQxODk4NTZENENCQ0NBQ0MxQ0Q2QkY4QUVERTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NTg1MDI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTg2MDkyNDEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NUEwNkUxMDNEQTc0QUQzMUE0MkVFQ0VGN0YzRTA4MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc1ODUwMjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxODYwOTI0MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRDOEZGNDk2OTAwQUMxNENDOEVBODUxMjNCRUEzMDkyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzU4NTAzMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE4NjA5MjQxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkNFMDJBMkI0RDRFMTU4QjkwNkIzMUQ4QTU1QUU0QjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NTg1MDMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlYxNk5CNWRCVGZLSlVReUFqdkZrb1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2YwNzM1MTQtOTU1Ni00YmJkLWEyZDgtOWY2ZDFmYjZkMzdjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDE3OCxcbiAgICAgIDM0LFxuICAgICAgMTY0LFxuICAgICAgMTM4LFxuICAgICAgMjIyLFxuICAgICAgNjcsXG4gICAgICAyMjgsXG4gICAgICA1NSxcbiAgICAgIDI0NSxcbiAgICAgIDAsXG4gICAgICAyMDEsXG4gICAgICAyNTQsXG4gICAgICAxNTgsXG4gICAgICA2NSxcbiAgICAgIDM4LFxuICAgICAgOTUsXG4gICAgICAyNTQsXG4gICAgICAxMzEsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICA2NixcbiAgICAgIDEwNCxcbiAgICAgIDIyMyxcbiAgICAgIDE0NCxcbiAgICAgIDExNCxcbiAgICAgIDY2LFxuICAgICAgNzUsXG4gICAgICAyMzIsXG4gICAgICAzNyxcbiAgICAgIDEwOSxcbiAgICAgIDI1LFxuICAgICAgNjMsXG4gICAgICA0MCxcbiAgICAgIDc4LFxuICAgICAgMTQyLFxuICAgICAgMTQ4LFxuICAgICAgNjgsXG4gICAgICA4NSxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpTRVJZWk1HXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxODYwOTI0MTI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODkzMjcxODI4Njg1Mjk6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTSEFGSVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pLQS9Nc0hFSUNKZ2JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUVJCWTBUZ2RYUURaZDhkNTZvY3VEMFVla3ZBamhaUzVMOStHNloyYUdEZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjL1VjUzJENmFpYVZFQk9oaTBQbUpWMVkycHgzNzU5d3hoS3BUQTQ4VTFLM0JlT0NxSzE5L1hzakd3ay9abGEzQjJCdXhPcXprd3JuMnJXOVpyaDJBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4YnJmKytYUHdhL2hWMnlwRUh0clF6TTgwMXdqUnQ1aHZsa2Q0MVlkV0dUUU5jQVFYTVJ4OUltalNyNjRFMUc2Vk5zY2JNZTJlbHYzUVFXV0NONFNpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxODYwOTI0MTI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NTg1MDI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSEV3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIRXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGOXh2VmhJWXhzNU9KZSs1d1VCaWo0U2RBUlNFdUZ1cDVOME0wcDAwbEtrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMzgzNjYyMjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzU4NTAyODYxN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Shafi-maibal Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@maibaltech786"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "shafi_maibal",
  ownername:process.env.OWNER_NAME|| "It'x Shafi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SHAFI"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
