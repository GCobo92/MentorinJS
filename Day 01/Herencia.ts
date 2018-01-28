class Ps4 {
    private wifi: boolean;
    private portatil: boolean;

    constructor(wifi: boolean, portatil: boolean) {
        this.wifi = true;
        this.portatil = false;
    }

    getWifi(): boolean {
        return this.wifi;
    }

    getPortatil(): boolean {
        return this.portatil;
    }
}

class Psp extends Ps4 {
    private color: string;

    constructor(color: string, portatil: boolean) {
        super(portatil, true);
        this.color = 'black';
    }

    getColor(): string {
        return this.color;
    }
}
