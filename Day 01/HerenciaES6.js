class Ps4 {
    constructor(wifi, portatil) {
        this.wifi = true;
        this.portatil = false;
    }

    getWifi() {
        return this.wifi;
    }

    getPortatil() {
        return this.portatil;
    }
}

class Psp extends Ps4 {
    constructor(color, portatil) {
        this.color = 'black';
        super(portatil, true);
    }

    getColor() {
        return this.color;
    }
}
