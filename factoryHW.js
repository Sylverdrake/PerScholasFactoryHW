class Hamster {
    constructor(owner, name, price){
    this.owner = owner
    this.name = name
    this.price = price
    }
    wheelrun(){
        console.log("Squeak Squeak");
    }
    eatFood(){
        console.log("Nibble Nibble");
    }
    getPrice(){
        return this.price
    }
}
let gus = new Hamster('none', 'Gus', 15)
// console.log(gus.getPrice());

const hamsters = []

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
        this.mood = mood
        this.hamsters = hamsters
        this.bankAccount = bankAccount
    }
    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getWeight(){
        return this.weight
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

    eat() {
        this.weight ++;
        this.mood ++;
    }

    exercise() {
        this.weight --;
    }

    ageUp(){
        this.age ++;
        this.height ++;
        this.weight ++;
        this.mood --;
        this.bankAccount += 10;
        console.log(`${this.name} grows up!`);
    }

    buyHamster(){
        hamsters.push('Gus')
        this.mood += 10;
        this.bankAccount - gus.getPrice();
    }
}

let timmy = new Person('Timmy', 0, 0, 0, 0, 0, 0);

timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
console.log(timmy)
// timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
// console.log(timmy);
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.buyHamster()
gus.owner = 'Timmy'
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()
console.log(timmy);






// class Dinner {
//     constructor(appetizer, entree, dessert){
//         this.appetizer = appetizer
//         this.entree = entree
//         this.dessert = dessert
//     }
// }

// let dinner1 = new Dinner('course1', 'course2', 'course3')
// console.log(dinner1);
// // let dinner2 = new Dinner(course1, 'course2', 'course3')
// // let dinner3 = new Dinner(course1, course2, course3)


// //chef is a factory for dinner
// class Chef {
//     constructor(sweet, spicy, umami, warm, cold){
//         this.sweet = sweet
//         this.spicy = spicy
//         this.umami = umami
//         this.warm = warm
//         this.cold = cold
//     }
//     cookCheap(){
//         //add flavor to course1
        
//         //log it
//     }

//     cookMid(){

//     }

//     cookPricy(){

//     }
    
// }

// //Chefs
// let ramsey = new Chef('Creme Brulee', 'Spicy Beans', 'Meatballs', 'Shrimp Taco', 'Buckwheat Noodles')
// let carl = new Chef('Homemade Cookies', 'Bolognese', 'Mushroom Surprise', 'Omelette', 'Avocado Rice Bowl')



//eric helped with this and broke it down simply
class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

class Chef {    
    cook(app, entree, dessert){
        let dinner = new Dinner(app, entree, dessert);
        console.log(dinner);
    }
}    
let chefRamsey = new Chef();
chefRamsey.cook("onion rings","cheeseburger","ice cream");
chefRamsey.cook("salad","steak","apple pie");
chefRamsey.cook("bread","pasta","cake");