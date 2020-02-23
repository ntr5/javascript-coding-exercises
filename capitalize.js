const shortStr = "Hi there";
const longStr = "the quick brown fox jumped over the lazy dog";

const capitalize = str => {
    const words = str.split(" ")

    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}

capitalize(longStr)