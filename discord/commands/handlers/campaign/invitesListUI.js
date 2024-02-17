//const { hideLinkEmbed, channelMention } = require('discord.js');
import { hideLinkEmbed, channelMention } from 'discord.js';

//const mongoToDiscordId = require('../../../../mongodb/utils/idConversion/mongoToDiscordId')
import mongoToDiscordId from '../../../../mongodb/utils/idConversion/mongoToDiscordId.js';


const invitesListUI = (invites, number = 3 ) => {

		let message = '--';
		if( invites[0] ){

			message =`💡 You can copy and use one of these invites for ${ channelMention( mongoToDiscordId( invites[0].channel.toString() )) }\n`
			message += '------------------------------------------------\n';
			message += `|    ${ hideLinkEmbed( `https://safediscord.com/link/${ invites[0].campaign }` ) }\n`;
			for (let i = 0; i < Math.min( invites.length, number ); i++) {
				message += `|    ${ hideLinkEmbed( `https://discord.gg/${ invites[i].code }` ) }\n`
			}
			message += '------------------------------------------------\n'
		}
		
		return message;
		
	};

//module.exports = invitesListUI;
export default invitesListUI;