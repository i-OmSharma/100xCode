// Enum - Enumerations: a feature that allow to define a set of names constants.
// The concept behind an enumeration is to create a human - readable way to represent a set of constants values, which might otherwise be represented as numbers or strings.

// type KeyInput =  "Up" | "Down" | "Left" | "Right" ;

// function doSomething(KeyPressed: KeyInput) {
//     //do Something
//     if (KeyPressed == "Up") {
//         //
//     }
//     //...
// }

// doSomething("Up")


enum Direction {
    Up,// we can assign our custom val like strings. Up = "up". catch is that we have to assign every one u cant just assign one we have to do for all 
    Down,
    Left,
    Right
}

function doSomething(KeyPressed: Direction) {
    //do Something
    if (KeyPressed == Direction.Up) {
        //
    }
    //...
}

doSomething(Direction.Up)
console.log(Direction.Up);
