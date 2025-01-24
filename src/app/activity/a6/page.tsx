"use client"
import Link from "next/link";
import "./a6.css";
import { useState, useEffect } from "react";

type dataCard = {
    name:string,
    image:string,
    description:string,

}

export default function Activity5() {
    const [pokemons, setPokemons] = useState<dataCard[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchPokemons = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2");
            const data = await response.json();

            const pokemonDetails = await Promise.all( data.results.map(async (pokemon: { name: string; url: string }) => {
                const pokemonDataResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonDataResponse.json();

                const speciesResponse = await fetch(pokemonData.species.url);
                const speciesData = await speciesResponse.json();

                const description = speciesData.flavor_text_entries.find((entry:any) => entry.language.name === "en"
                )?.flavor_text || "No description available.";

                const imageUrl = pokemonData.sprites.front_default || "/default-image.png";

                return {
                    name: pokemon.name,
                    image: imageUrl,
                    description: description,
                };
            }));
                setPokemons(pokemonDetails);
            } catch (err) {
                setError(`Failed to fetch Pokémon data:${err}`);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <>
        <div className="filler"></div>
        <div className="scroll-lock">
            <div className="contain ">
            
            <header>
                <h2 className="text-2xl font-bold">Miguel Mangahas | Activity 6</h2>
            </header>
        
            <main className="a6-main">
                {pokemons.map((pokemon) => (
                    <div className="pokemon-card" key={pokemon.name}>
                        <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                        <h2>{pokemon.name}</h2>
                        <p>{pokemon.description}</p>
                    </div>
                ))}
            </main>
    
            <footer>
                <Link href="/" className='a6-button button-style'>
                    <i className='bx bx-home'></i>
                </Link>
            </footer>
    
            </div>
        </div>
        </>
    )
}