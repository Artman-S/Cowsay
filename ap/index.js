const user = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, I'm ${user.name} I'm from campus ${user.campus}`,
    e : "oO",
    T : "U "
}));
