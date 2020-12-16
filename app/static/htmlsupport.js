//

/* Function creates a div and gets the users current choice from document. It checks
what the current choice is and clears all other choices. Prints the relavent HTML inputs
for that certain algorithm. */
function cipherAlgorithmSelection(){

	const choice = document.getElementById('algorithm').value;
	const div = document.createElement('div');

	div.className = 'row';

	if(choice == 'selectcipher'){

		clearElement('caesar');
		clearElement('vigenere');
		clearElement('xor');

	}
	if(choice == 'xorcipher'){

		div.innerHTML = `
			<label for="XOR Key Input">Key:</label>
			<input
			type="text"
			placeholder="Key"
			name="xorkey"
			id="xorkey"
			spellcheck="false"
			>
		`;

		clearElement('caesar');
		clearElement('vigenere');
		document.getElementById('xor').appendChild(div);
	}
	if(choice == 'caesarcipher'){

		div.innerHTML = `
			<label for="Caesar Shift Input">Shift:</label>
			<input
			type="text"
			placeholder="Shift"
			name="caesarshift"
			spellcheck="false"
			>
		`;

		clearElement('xor');
		clearElement('vigenere');
		document.getElementById('caesar').appendChild(div);
	}
	if(choice == 'vigenerecipher'){

		div.innerHTML = `
			<label for="Vigenere Key Input">Key:</label>
			<input
			type="text"
			placeholder="Key"
			name="vigenerekey"
			spellcheck="false"
			>
		`;

		clearElement('xor');
		clearElement('caesar');
		document.getElementById('vigenere').appendChild(div);
	}
}

function clearElement(elementID){
	document.getElementById(elementID).innerHTML = '';
}