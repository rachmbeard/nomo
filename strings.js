/**
 * Add an ordinal suffix (-st, -nd, -rd, -th) to the given number
 */
function getOrdinalSuffix(number) {
    const lastDigit = number % 10;
    if (lastDigit === 1) {
        return 'st';
    } else if (lastDigit === 2) {
        return 'nd';
    } else if (lastDigit === 3) {
        return 'rd';
    } else {
        return 'th';
    }
}


/**
 * Convert a string to title case by capitalizing the first letter of each word (e.g. "title case" -> "Title Case")
 */
function toTitleCase(string) {
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    }

    const lowerWords = [
        'a',
        'at',
        'in',
        'of',
        'on',
        'over',
        'the',
        'upon',
        'with',
    ];
    const words = string.toLowerCase().split(' ');

    let titleCaseString = capitalize(words[0]);
    for (const word of words.slice(1)) {
        if (lowerWords.indexOf(word) === -1) {
            titleCaseString += ' ' + capitalize(word);
        } else {
            titleCaseString += ' ' + word;
        }
    }
    return titleCaseString;
}


/**
 * Pick a reasonable abbreviation for the given state name
 */
function abbreviateState(stateName) {
    let abbr = null;
    if (stateName.indexOf(' ') !== -1) {
        const words = stateName.split(' ');
        abbr = words[0].charAt(0) + words[1].charAt(0);
    } else {
        abbr = stateName.charAt(0) + stateName.charAt(stateName.length - 1);
    }
    return abbr.toUpperCase();
}




/**
 * Abbreviate the given address string (e.g. "14 Some Street Apartment 441" -> "13 Some St. Apt. 441")
 */
function abbreviateAddress(address) {
    const replacements = [
        [/\bApartment\b/, 'Apt'],
        [/\bAvenue\b/, 'Ave'],
        [/\bBoulevard\b/, 'Blvd'],
        [/\bCrescent\b/, 'Cr'],
        [/\bEast\b/, 'E'],
        [/\bNorth\b/, 'N'],
        [/\bRoad\b/, 'Rd'],
        [/\bSouth\b/, 'S'],
        [/\bStreet\b/, 'St'],
        [/\bWest\b/, 'W'],
    ];
    for (const repl of replacements) {
        address = address.replace(
            repl[0],
            repl[1] + '.',
        );
    }
    return address;
}


export {
    abbreviateAddress,
    abbreviateState,
    getOrdinalSuffix,
    toTitleCase
};
