const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  module.exports = async(client) => {//XNOX#0007 aittir

  client.user.setStatus("dnd");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  console.log(${client.user.id}                                                                                                                                                                     )
  //client.user.setActivity(${prefix}yardım | ${client.guilds.size} sunucu | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıyı, { type: "LISTENING"});
client.user.setActivity(|XNOX#0007 AİT|, { type: "WATCHING"});  
//LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR