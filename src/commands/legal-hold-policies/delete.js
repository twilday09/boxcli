'use strict';

const BoxCommand = require('../../box-command');

class LegalHoldPoliciesDeleteCommand extends BoxCommand {
	async run() {
		const { flags, args } = this.parse(LegalHoldPoliciesDeleteCommand);

		await this.client.legalHoldPolicies.delete(args.id);
		this.info(`Deleted legal hold policy ${args.id}`);
	}
}

LegalHoldPoliciesDeleteCommand.description = 'Delete a legal hold policy';

LegalHoldPoliciesDeleteCommand.flags = {
	...BoxCommand.flags
};

LegalHoldPoliciesDeleteCommand.args = [
	{
		name: 'id',
		required: true,
		hidden: false,
		description: 'ID of the legal hold policy to delete',
	}
];

module.exports = LegalHoldPoliciesDeleteCommand;
