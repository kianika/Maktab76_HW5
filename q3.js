let mapped = {};
function mapping(a) {
    for (i in a) {
        mapped[a[i]] = a[i].toUpperCase();
    }
    return mapped;
}

console.log(mapping(["a", "b", "c"])); 