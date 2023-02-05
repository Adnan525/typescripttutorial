// never type means the code will stop executing
const myArr: string[] = []
myArr.push("hello")

type superHero = {
    name : string,
    power : string,
    weapon : string,
    weakness : string
}

const superman : superHero = {
    name : "Superman",
    power : "man of steel",
    weapon : "laser eyes",
    weakness : "kryptonite"
}
console.log(superman)