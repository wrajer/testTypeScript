"use strict";
const showState = (person) => {
    return person.name + " is " + (person.isHungry ? "hungry" : "not hungry");
};
let anakin = {
    name: "Anakin Skywalker",
    isHungry: true
};
let anakin2 = //gdybyśmy teraz dalu to : PersonState to byłby błąd, interface przydaje się nam na górze do określenia wymaganych pól
 {
    name: "Anakin Skywalker",
    isHungry: true,
    children: ["Like", 'Leia']
};
let obiOne = {
    name: "Obi One Kenobi",
    isHungry: false
};
console.log(showState(anakin));
console.log(showState(obiOne));
