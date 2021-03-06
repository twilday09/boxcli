'use strict';

const BoxCommand = require('../../box-command');
const { flags } = require('@oclif/command');

class CommentsReplyCommand extends BoxCommand {
	async run() {
		const { flags, args } = this.parse(CommentsReplyCommand);
		let params = {
			body: {
				item: {
					type: 'comment',
					id: args.id,
				},
			},
		};

		if (flags.message) {
			params.body.message = flags.message;
		} else if (flags['tagged-message']) {
			params.body.tagged_message = flags['tagged-message'];
		}

		// @TODO (2018-07-28): Should implement this using the Node SDK
		let comment = await this.client.wrapWithDefaultHandler(this.client.post)('/comments', params);
		await this.output(comment);
	}
}

CommentsReplyCommand.description = 'Reply to a comment';

CommentsReplyCommand.flags = {
	...BoxCommand.flags,
	message: flags.string({
		description: 'Message of comment',
		exclusive: ['tagged-message']
	}),
	'tagged-message': flags.string({
		description: 'The text of the comment, including @[userid:Username] somewhere in the message to mention the user',
		exclusive: ['message']
	})
};

CommentsReplyCommand.args = [
	{
		name: 'id',
		required: true,
		hidden: false,
		description: 'ID of the comment to reply to'
	}
];

module.exports = CommentsReplyCommand;
