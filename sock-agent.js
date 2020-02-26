var SockAgent = require('socks-proxy-agent')

var sockAgent = new SockAgent(process.env.SOCK || 'socks://127.0.0.1:1086')

module.exports = sockAgent
