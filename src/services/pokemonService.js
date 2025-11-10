const showPokemonData = async () => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0");

        if (!res.ok) {
            throw new Error("Failed to fetch data.");
        }

        return res.json(); 
    } catch (error) {
        console.log(error);
    }
};

export { showPokemonData }