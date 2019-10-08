class GuessingGame {
    constructor() {
        
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        
    }

    guess() {
        this.guess_number = Math.ceil((Math.floor (this.min + this.max  ) / 2)); //find the average and round to the big side
        return this.guess_number;
        
       

    }

    lower() {
        this.max = this.guess_number;
        return this.guess_number;


    }

    greater() {
        this.min = this.guess_number;
        return this.guess_number;

    }
}
module.exports = GuessingGame;
