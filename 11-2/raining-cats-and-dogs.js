function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
        if(this.raining) {
            console.log(this.noise);
        }
    }
}

var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");
// var dogs = {
//     raining: true,
//     noise: "Woof!",
//     makeNoise: function() {
//         if(this.raining) {
//             console.log(this.noise);
//         };
//     },
// };

// var cats = {
//     raining: false,
//     noise: "Meow!",
//     makeNoise: function() {
//         if(this.raining) {
//             console.log(this.noise);
//         };
//     },
// };

function massHysteria() {
    if(dogs.raining && cats.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    };
};

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();
massHysteria();