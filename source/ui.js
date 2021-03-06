'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https://pwltr.com'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/pwltr'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/pwltr'
	},
	{
		label: 'Blog',
		url: 'https://blog.pwltr.com'
	},
	{
		label: 'Ask Me Anything',
		url: 'https://github.com/pwltr/ama'
	},
	{
		label: 'Contact',
		url: 'https://pwltr.com/contact'
	},
	{
		label: 'Support my open source work',
		url: 'https://www.patreon.com/pwltr'
	},
	{
		label: 'Unicorns!',
		async action() {
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn1.gif')));
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn2.gif')));
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn3.gif')));
		}
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I’m a FullStack JavaScript Dev making things like macOS apps, CLI tools, and modules.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
