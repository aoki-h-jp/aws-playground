// HumanはAnimalの部分型
type Animal = {
    age: number;
}

type Human = {
    age: number;
    name: string;
}

// HumanFamilyはAnimalFamilyの部分型
// HumanがAnimalの部分型なのでそう言える
type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
}

type HumanFamily = {
    familyName: string;
    mother: Human;
    father: Human;
    child: Human;
}