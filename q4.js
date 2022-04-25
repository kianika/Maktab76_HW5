function maxPrice(obj) {
    let Max = -Infinity;
    let k;
    for (i in obj) {
        if (obj[i] > Max) {
            Max = obj[i]
            k = i;
        }
    }
    console.log(`The most expensive one is the ${k}`);
}

maxPrice({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
});