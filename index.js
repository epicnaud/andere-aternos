const mineflayer = require('mineflayer')

function startBot() {
    const bot = mineflayer.createBot({
        host: 'epicnaud.aternos.me',
        port: 44982,
        username: 'Botje247',
        version: '1.21.11',
        
    })

    bot.on('login', () => {
        console.log('✅ Lekker! De bot is eindelijk binnen.')
    })

    bot.on('error', (err) => {
        console.log('❌ Foutje: ' + err.message)
    })

    bot.on('end', () => {
        console.log('⚠️ Verbinding verbroken. Ik herstart over 5 seconden...')
        setTimeout(startBot, never)
    })
}
