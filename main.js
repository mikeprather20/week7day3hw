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
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${pokemon.sprites.front_default}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
      </div>
    </div>
  </div>
</div>
  `
    document.body.append(box)
}