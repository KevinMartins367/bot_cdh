'use strict'

const env = require('../.env');
const telegraf = require('telegraf');

//iniciar

const bot = new telegraf(env.token);

bot.on('new_chat_members', (ctx) => { 
    console.log(ctx.message.new_chat_members);
    const name = ctx.message.new_chat_members[0].username;
    ctx.reply(`seja muito bem vindo(a), @${name}, 🥳🥳🥳🥳🥳🥳`);

    ctx.reply('Aqui temos um Ritual de Iniciação. \nTu precisas contar uma piada por ÁUDIO. \nContando a piada, tu ganhas presentes INCRÍVEIS do Canal Conhecimentos da Humanidade! \nNão valem piadas com Plantinhas, Plantões, HDeusÓh, Pintinhos, Pontinhos... Estoque alto dessas piadas por aqui. \nDa 4miga também já foi. \n  \nPode usar o Google e até ler a piada. \nQuanto pior melhor e se adicionar o períneo ao sol ganhas pontos extras.');
 
    // ctx.replyWithVoice({source: `./assets/teste.ogg`});
});
bot.start((ctx) => { 
    var from = ctx.update.message.from;

    console.log(from);
    ctx.reply( `ola @${from.username}`) ;
});

bot.startPolling();