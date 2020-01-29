export class Circle {
    #radius;

    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this.#radius;
    }

    set radius(value) {
        if (0 < value) {
            this.#radius = value;
        }
    }

    get diameter() {
        return 2 * this.radius;
    }

    surface() {
        return Math.PI * this.radius ** 2;
    }

    length() {
        return 2 * this.radius * Math.PI;
    }
}

