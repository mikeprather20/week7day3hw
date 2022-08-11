const form1 = document.getElementById('poke_dex')


form1.addEventListener('submit', (event)=>{
    event.preventDefault();
    const pokemonName = event.path[0][0].value
    renderData(pokemonName)
})

const getPokemon = async (pokemonName) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const data = await res.json()
   return data
}

const renderData = async (pokemonName) => {
    const data = await getPokemon(pokemonName)
    const pokemon = [data]
    pokemon.map(addPokemon)
}

const addPokemon = (pokemon)=>{
    const box = document.createElement('p')
    box.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
            <p class="card-text"><b>${pokemon.name}<b></p>
        </div>
    </div>`
    document.body.append(box)
}