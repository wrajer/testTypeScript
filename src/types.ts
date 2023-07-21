console.log("Miski miśki 2 ");

let myString: string = "próba mikrofonu";

let myString2: string ;
myString2 = " druga próba mikrofonu";

let myNum: number = 43;

let myBool: boolean =true;

let myAny: any = 43; //tu może być wszsytko


console.log(myString + myString2 + myNum + myBool +myAny);


let strArr: string[] = ["ads", "ssss", "45"];

let numArr: number[] = [1,3,4,5,6];

let strNumTuple: [string, string, number] = ['hello', 'hello2', 12]

let myUnion: string | number //union type, deklaruje dwie wartości jakie może przyjąć zmienna, może też podać any albo unknown