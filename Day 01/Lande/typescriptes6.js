class Animal {
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
class Pig extends Animal {
    constructor(name, dvd) {
        super(name, 'pig');
        this.oinks = true;
    }
    oink() {
        return this.oink;
    }
}
