type SuperHero = {
    name : string,
    power : string,
    weapon : string,
    weakness : string
}

const superman : SuperHero = {
    name : "Superman",
    power : "man of steel",
    weapon : "laser eyes",
    weakness : "kryptonite"
}
console.log(superman)


// never type means the code will stop executing
const myArr: string[] = []
myArr.push("hello")
// another way to declare an array
const myArr2: Array<number> = []

// union type
// not sure what type the variable will be
let myGrade : number | string = 10

function getDetails(id: number | string): void {
    if (typeof id === "string") {
        id.toLowerCase()
    }
    else {
        id += 1
    }
}

//array with union type
let unionArr: (number | string)[] = [1, 2, 3, "hello"]
let seatAllotment: "aisle" | "window" | "middle"
seatAllotment = "aisle"
