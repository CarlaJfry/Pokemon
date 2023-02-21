class Pokemon {

    constructor(name, type) {

        this.name = name

        this.type = type

        this.hp = 100

        this.level = 1

    }



    attack(pokemon) {

        pokemon.hp -= 10

        console.log(`${this.name} de tipo ${this.type} está atacando a ${pokemon.name} de tipo ${pokemon.type} y le queda de vida ${pokemon.hp}`)

    }

}



class PokemonFuego extends Pokemon {

    constructor(name) {

        super(name, 'Fuego')

    }

}



class PokemonAgua extends Pokemon {

    constructor(nombre) {

        super(nombre, 'Agua')

    }



    attack(pokemon) {

        if (pokemon.type === 'Fuego') {

            super.attack(pokemon)

            super.attack(pokemon)

        } else {

            super.attack(pokemon)

        }

    }

}



const charizard = new PokemonFuego('Charizard')

const squirtle = new PokemonAgua('Squirtle')



squirtle.attack(charizard) // ??

charizard.attack(squirtle) // ??