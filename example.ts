console.log("hello world")

function addTwo(num: number): number {
  return num + 2
}

function getUpper(str: string): string {
  return str.toUpperCase()
}

type user = {
  readonly id: number,
  name: string,
  age: number,
  email: string,
  isActive: boolean
  creditCard?: string
} 

let myUser: user = {
  id: 1,
  name: "John",
  age: 25,
  email: "",
  isActive: true
}