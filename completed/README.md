## Broken Pokedex

On the way home to Pallet Town, Ash dropped his pokedex.

Some parts of it still work, but we need to restore this Pokedex before the big tournament. The 'dex should return a list of pokemon to choose from. Selecting on a pokemon will display it's name, picture and abilities in the sidebar.

### API Info

- "https://pokeapi.co/api/v2/pokemon" will return a list "results" consisting of 20 pokemon objects containing a 'name' and a 'url'
  - example {name: 'bulbasaur', url: "https://pokeapi.co/api/v2/pokemon/1" }
- "https://pokeapi.co/api/v2/pokemon/1" will return a pokemon object with a lot of info. For this exercise we are interested in {name: 'bulbasaur', abilities: [ability: {name: 'overgrow' }], sprites.front_default: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"}

### Tasks

- [ ] Retrieve a list of pokemon using the url
- [ ] Create a "ListItem" component
- [ ] Populate the Available Pokemon list
- [ ] Enable users to click on a pokemon to set it as selected
- [ ] Retrieve the pokemon from it's url
- [ ] Display an image of the pokemon in the image component
- [ ] Display the pokemon's name
- [ ] Display a list of the pokemon's ability
- [ ] Change the text color of the selected pokemon
- [ ] Display the selected Pokemon to the left and the list to the right

All of your work should happen inside the foloder "Components"
