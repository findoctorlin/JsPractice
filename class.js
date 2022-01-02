class User{
    #GPA;
    constructor(name,GPA) {
        this.name = name;
        this.#GPA = GPA;
    }
    getGPA() {
        return this.#GPA;
    }
}
const user2 = new User("Bob", "3.5");

console.log((user2.name))
console.log((user2.GPA))
console.log((user2.getGPA()))
//*********************************************************//
class User1 {
    static TYPE_ADMIN = "admin";
    static TYPE_REGULAR = "regular";

    name;
    type;

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

const admin = new User1("Fundebug", User1.TYPE_ADMIN);
console.log(admin.type);
/*************************检测用户名是否已注册******************************/
class User3 {
    static #takenNames = [];

    static isNameTaken(name) {
        return User3.#takenNames.includes(name);
    }
    // name = "Nobody";
    constructor(name) {
        this.name = name;
        User3.#takenNames.push(name);
    }
}

const user = new User3("Fundebug");

console.log(User3.isNameTaken("Fundebug")); // => true
console.log(User3.isNameTaken("Code")); // => false
/***********************继承**********************/
class User4 {
    name;

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class ContentWriter extends User4 {
    posts = ["Star War", "Dead Pool"];
}

const writer = new ContentWriter("John Smith");

writer.name; // => 'John Smith'
writer.getName(); // => 'John Smith'
console.log(writer.posts); // => []