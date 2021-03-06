'use strict';

const BoxCommand = require('../../../box-command');
const { flags } = require('@oclif/command');

class FoldersGetMetadataCommand extends BoxCommand {
	async run() {
		const { flags, args } = this.parse(FoldersGetMetadataCommand);

		let metadata = await this.client.folders.getMetadata(args.id, flags.scope, flags['template-key']);
		await this.output(metadata);
	}
}

FoldersGetMetadataCommand.description = 'Get information about a metadata object';

FoldersGetMetadataCommand.flags = {
	...BoxCommand.flags,
	scope: flags.string({
		description: 'The scope of the metadata template to retrieve',
		default: 'enterprise',
	}),
	'template-key': flags.string({
		description: 'The key of the metadata template to retrieve',
		required: true,
	}),
};

FoldersGetMetadataCommand.args = [
	{
		name: 'id',
		required: true,
		hidden: false,
		description: 'ID of the folder to get metadata on',
	}
];

module.exports = FoldersGetMetadataCommand;
