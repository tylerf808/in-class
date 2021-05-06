const Letter = require("./Letter");

class Word {
    constructor(answer) {
        this.answer = answer;
        this.letters = [];
        for (let i = 0; i < this.answer.length; i++) {
            letters.push(new Letter(this.answer[i]));
        }
    }
}

module.exports = Word;