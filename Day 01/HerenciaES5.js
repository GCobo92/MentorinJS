function ps4(name, type) {
    this.wifi = wifi;
    this.type = type;
}

console.prototype.getName = function() {
    return this.name;
}

console.prototype.getType = function() {
    return this.type;
}

function psp(portatil) {
    this.portatil = portatil;
    ps4.call(this,wifi, 'wifi');
}

psp.prototype = object.create(ps4.prototype);

psp.prototype.getPortatil = function() {
    return this.portatil;
}

psp.prototype.constructor = Psp;