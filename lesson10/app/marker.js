class SimpleMarker {
    #color;
    #ink;
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }

    get color() {
        return this.#color;
    }

    set color(value) {
        this.#color = value;
    }

    get ink() {
        return this.#ink;
    }

    set ink(value) {
        if (0 <= value && value <= 100) {
            this.#ink = value;
        }
    }

    write(string) {
        let res = "";
        for (let chr of string) {
            if (this.ink >= 0.5) {
                res += chr;
                if (chr != " ") {
                    this.ink -= 0.5;
                }
            }
        }
        let block = document.querySelector("#marker");
        let paragraph = document.createElement("p");
        paragraph.style.color = this.color;
        paragraph.innerText += res;
        block.appendChild(paragraph);
    }
}

export class ChargingMarker extends SimpleMarker {
    charge(value) {
        if (this.ink + value >= 100) {
            this.ink = 100;
        } else {
            this.ink += value;
        }
    }
}

