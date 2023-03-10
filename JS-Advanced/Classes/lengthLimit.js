class Stringer {
    constructor(str, length) {
        this.innerSTring = str;
        this.innerLength = length;
    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString() {

        if (this.innerLength === 0) {
            return '...';
        } else if (this.innerSTring.length > this.innerLength) {
            return this.innerSTring.substring(0, this.innerLength) + '...';
        } else {
            return this.innerSTring;
        }

    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test