class Animal {
    private name: string;
    private type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

    getName() : string {
        return this.name;
    }

    getType() : string {
        return this.type;
    }
}

class Pig extends Animal {   
    private oinks: boolean;
    
    constructor(name, dvd) {        
        super(name, 'pig');
        this.oinks = true;
    }

    oink() {
        return this.oink;
    }
}