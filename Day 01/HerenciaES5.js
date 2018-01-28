function ps4(wifi, portatil) {

    this.wifi = true;
    this.portatil = false;
}

ps4.prototype.getWifi = function () {
    return this.wifi;
}

ps4.prototype.getPortatil = function () {
    return this.portatil;
}

function psp(color, portatil) {
    this.portatil = true;
    ps4.call(this, color, 'black');
}

psp.prototype = Object.create(ps4.prototype);

psp.prototype.getColor() = function () {
    return this.color;
}

psp.prototype.constructor = psp;