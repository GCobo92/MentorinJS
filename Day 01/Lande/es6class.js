class Vehicle {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }
}

class Car extends Vehicle {
    constructor(name, dvd) {        
        super(name, 'car');
        this.dvd = dvd;
    }

    getDvd() {
        return this.dvd;
    }
}