process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case 'version':
				console.log('Node version: ' + process.versions.node);
				break;
			case 'lang':
				console.log('Language: ' + process.env.LANG);
				break;
			case 'exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});

