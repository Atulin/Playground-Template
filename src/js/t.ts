class Test {
    public Name : string;
    public Age : number;

    constructor(Name: string, Age: number) {
        this.Name = Name;
        this.Age = Age;
    }

    public doubleAge() : number
    {
        return this.Age * 2;
    }

    public toString() : string
    {
        return `${this.Name} is ${this.Age} years old`
    }
}

const test : Test = new Test('Bobby', 12);
const newTest : Test = new Test('Adam', test.doubleAge());

console.log(test, newTest);
