const showPokemonData = async (pokemon) => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon" + pokemon);

        if (!res.ok) {
            throw new Error("Failed to fetch data.");
        }
        
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};