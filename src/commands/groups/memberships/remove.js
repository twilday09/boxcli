'use strict';

const BoxCommand = require('../../../box-command');

class GroupsRemoveMembershipCommand extends BoxCommand {
	async run() {
		const { flags, args } = this.parse(GroupsRemoveMembershipCommand);

		await this.client.groups.removeMembership(args.id);
		this.info(`Removed membership ${args.id}`);
	}
}

GroupsRemoveMembershipCommand.aliases = [ 'groups:membership:remove' ];

GroupsRemoveMembershipCommand.description = 'Remove a user from a group';

GroupsRemoveMembershipCommand.flags = {
	...BoxCommand.flags
};

GroupsRemoveMembershipCommand.args = [
	{
		name: 'id',
		required: true,
		hidden: false,
		description: 'ID of the group membership record to delete',
	}
];

module.exports = GroupsRemoveMembershipCommand;
