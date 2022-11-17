// Tuples
type Tuple = [number, string];
type first = Tuple[0];
type all = Tuple[number];

type NamedTuple = [name: string, age: number];
type allNamed = NamedTuple[number];

type Tuple1 = [1, 2, 3];
type Tuple2 = [4, 5, 6];
type concat = [...Tuple1, ...Tuple2];

type phoneNumber = [0, ...number[]];

// Function arguments

type User = [name: string, age: number, ...addresses: string[]];

function CreateUser(name: string, age: number, ...addresses: string[]) {}

function CreateUser2(...user: User) {
    const [name, age, ...addresses] = user;
}

CreateUser2("Hello", "world");
