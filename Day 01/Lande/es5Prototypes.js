function Vehicle(name, type) {

    this.name = name;
    this.type = type;
}

Vehicle.prototype.getName = function () {
    return this.name;
}
Vehicle.prototype.getType = function () {
    return this.type;
}

function Car(name, dvd) {
    this.dvd = dvd;
    Vehicle.call(this, name, 'car');
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.getDvd = function () {
    return this.dvd;
}

Car.prototype.constructor = Car;