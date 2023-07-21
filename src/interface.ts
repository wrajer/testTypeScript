interface PersonState //pono c tylko deklarujemy jakich elementów oczekujemy
{
    name: string;
    isHungry: boolean;
    isFluffy?: boolean; // znak ? aby oznaczy ze jeest to opconalne
}

const showState = (person: PersonState) => 
{
    return person.name + " is " + (person.isHungry ? "hungry" : "not hungry")
}

let anakin: PersonState = 
{
    name: "Anakin Skywalker",
    isHungry: true
}

let anakin2  =  //gdybyśmy teraz dalu to : PersonState to byłby błąd, interface przydaje się nam na górze do określenia wymaganych pól
{
    name: "Anakin Skywalker",
    isHungry: true,
    children: ["Like", 'Leia']
}

let obiOne: PersonState = 
{
    name: "Obi One Kenobi",
    isHungry: false
}

console.log(showState(anakin));
console.log(showState(obiOne));