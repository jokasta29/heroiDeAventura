# Adventure Hero Class
This repository contains a simple JavaScript class for creating adventure heroes. The class, named heroiDeAventura, allows you to create heroes with specific attributes such as name, age, and hero type.

## Usage
## Class Definition
``` javascript
class AdventureHero {
    constructor(name, age, heroType) {
        this.name = name;
        this.age = age;
        this.heroType = heroType;
    }

    attack() {
        console.log(`The ${this.name} attacked using ${this.heroType}`);
    }
}
```

## Creating Heroes
You can create instances of the AdventureHero class with different attributes:
``` javascript
let mageHero = new AdventureHero("Mage", "25", "magic");
let warriorHero = new AdventureHero("Warrior", "35", "sword");
let monkHero = new AdventureHero("Monk", "56", "martial arts");
let ninjaHero = new AdventureHero("Ninja", "45", "shuriken");
```

## Performing Attacks
Once the heroes are created, you can make them perform attacks:
``` javascript
mageHero.attack();
warriorHero.attack();
monkHero.attack();
ninjaHero.attack();
```

This will output:
``` javascript
The Mage attacked using magic
The Warrior attacked using sword
The Monk attacked using martial arts
The Ninja attacked using shuriken
```
Feel free to modify the class and create new heroes with different attributes and attack methods.

## License
This code is provided under the MIT License. Feel free to use and modify it according to your needs. If you find any issues or have suggestions, please open an issue.


