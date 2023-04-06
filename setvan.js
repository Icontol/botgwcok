const fs = require('fs')
const chalk = require('chalk')
global.owner = ['6285876830674']
global.ownernomor = "6285876830674"
global.premium = ['6285876830674']
global.packname = 'sansbot'
global.author = 'by ivan'
global.jumlah1 = '999'
global.jumlah2 = '100000000000000'
global.jumlah3 = '1000000000'
global.prefix = ['.', '!', '&', '#']
global.sp = ''
global.mess = {
    success: 'berhasil🗿👍',
    errmor: 'Error Kesalahan Sistem',
    botAdmin: 'gw ngga admin🗿',
    admin: 'khusus admin',
    owner: 'khusus owner',
    private: 'khusus di chat pribadi',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    bot: 'khusus bot',,
    premium: 'khusu member premium',
    wait: 'tunggu sedang di proses...',
    eror: 'eror 🗿',
    erorapi : 'eror',
    enteklmt : 'limit anda habis',
}
global.limitawal = {
    premium = "Infinity",
    lokal = 100
}
global.thumb = fs.readFileSync('./media/image/tio.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.gc = 'https://chat.whatsapp.com/EPmjuw9X1wZDGX1p4NCV1e'
global.botname = 'sansbot'
global.omlen = 'sansbot'
global.wm = 'by ivan'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
