let gen = {
    f: {
        "1": "daughter",
        "2": "granddaughter",
        "0": "me",
        "-1": "mother",
        "-2": "grandmother",
        "-3": "greatgrandmother"
    },
    m: {
        "1": "son",
        "2": "grandson",
        "0": "me",
        "-1": "father",
        "-2": "grandfather",
        "-3": "greatgrandfather"
    }
}

console.log(gen.f);

function generation(n, a)  {
   
    return gen[a][n];

}
console.log(generation(-2, "f"));