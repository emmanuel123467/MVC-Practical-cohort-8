const name = ['naomi', 'bright', 'sunday', 'jessica', 'elijah', 'omotayo', 'naomi', 'naomi', 'naomi', 'sunday','sunday','sunday'];


const titleCase = (string) => {
    const trimmed = string.trim();
    return `${trimmed.slice(0,1).toUpperCase()}${trimmed.slice(1).toLowerCase()}`
}

const result = name.map(titleCase);
console.log(result)