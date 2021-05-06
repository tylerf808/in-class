class Letter {
    constructor(char) {
        this.char = char;
        if (this.visible = /[a-z1-9]/i.test(char)) {
            this.visible = false;
        } else {
            this.visible = true;
        }
    }

    toString() {
        if (this.visible == false) {
            return "_";
        }
        return this.char;
    }

    guess(guessedChar) {
        if (guessedChar.toUpperCase() === this.char.toUpperCase()) {
            this.visible = true;
            return true;
        }
        return false;
    }

    getSolution() {
        return this.char;
    }
}

module.exports = Letter;