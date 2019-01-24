function translate(original) {
	let wordArray = original.split(' ');
	let finalArray = [];

	wordArray.forEach(word => {
		finalArray.push(wordInspection(word));
	});
	
	return finalArray.join(' ');
}

const wordInspection = (originalWord) => {
	let origin = Array.from(originalWord);
	let translation = origin.slice(0);
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	if (origin[0] === "q" && origin[1] === "u") {
		for (let i = 0; i <= 1; i++) {
			let temp = origin[i];
			translation.push(temp);
			translation.shift();
		}
	} else if (!vowels.includes(origin[0]) && origin[1] === "q" && origin[2] === "u") {
		for (let i = 0; i <= 2; i++) {
			let temp = origin[i];
			translation.push(temp);
			translation.shift();
		}
	} else if (!vowels.includes(origin[0]) && !vowels.includes(origin[1]) && 
			!vowels.includes(origin[2])) {
		for (let i = 0; i <= 2; i++) {
			let temp = origin[i];
			translation.push(temp);
			translation.shift();
		}
	} else if (!vowels.includes(origin[0]) && !vowels.includes(origin[1])) {
		for (let i = 0; i <= 1; i++) {
			let temp = origin[i];
			translation.push(temp);
			translation.shift();
		}	
	} else if (!vowels.includes(origin[0])) {
		let temp = origin[0];
		translation.push(temp);		
		translation.shift();
	}
	translation.push("ay");
	return translation.join('');
}

module.exports = {
	translate
}

