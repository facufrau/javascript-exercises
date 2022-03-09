const palindromes = function (sentence) {
    let lowerCaseSentence = sentence.toLowerCase();
    const forwardsString = Array.from(lowerCaseSentence)
                            .filter(character => (/[a-z]/).test(character))
                            .join("");

    const backwardsString = Array.from(lowerCaseSentence).reverse()
                                .filter(character => (/[a-z]/).test(character))
                                .join("");

    return forwardsString === backwardsString;
};

// Do not edit below this line
module.exports = palindromes;
