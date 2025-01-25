"use client"
import "./a6.css";
import { useState, useEffect } from "react";
import { Filler } from "@/app/component/filler";
import { Header } from "@/app/component/header";
import { Footer } from "@/app/component/footer";

interface FlavorTextEntry {
    language: {
      name: string;
    };
    flavor_text: string;
}

type dataCard = {
    name:string,
    image:string,
    description:string,
    types:string

}

export default function Activity5() {
    const [pokemons, setPokemons] = useState<dataCard[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchPokemons = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
            const data = await response.json();

            const pokemonDetails = await Promise.all( data.results.map(async (pokemon: { name: string; url: string }) => {
                const pokemonDataResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonDataResponse.json();

                const speciesResponse = await fetch(pokemonData.species.url);
                const speciesData = await speciesResponse.json();

                const description = speciesData.flavor_text_entries.find((entry:FlavorTextEntry) => entry.language.name === "en"
                )?.flavor_text || "No description available.";

                const imageUrl = pokemonData.sprites.front_default || "/default-image.png";

                return {
                    name: pokemon.name,
                    image: imageUrl,
                    description: description,
                    types: pokemonData.types[0].type.name,

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

    const setCardColor = (element:string) => {
        switch(element){
            case('bug'): return "before:bg-[#26de81]";
            case('dragon'): return "before:bg-[#ffeaa7]";
            case('electric'): return "before:bg-[#fed330]";
            case('fairy'): return "before:bg-[#FF0069]";
            case('fighting'): return "before:bg-[#30336b]";
            case('fire'): return "before:bg-[#f0932b]";
            case('flying'): return "before:bg-[#81ecec]";
            case('grass'): return "before:bg-[#00b894]";
            case('ground'): return "before:bg-[#EFB549]";
            case('ghost'): return "before:bg-[#a55eea]";
            case('ice'): return "before:bg-[#74b9ff]";
            case('normal'): return "before:bg-[#95afc0]";
            case('poison'): return "before:bg-[#6c5ce7]";
            case('psychic'): return "before:bg-[#a29bfe]";
            case('rock'): return "before:bg-[#2d3436]";
            case('water'): return "before:bg-[#0190FF]";
            default:
                return"black";
            break;
        }
    } 

    return (
        <>
        <Filler/>
        <div className="scroll-lock a6-container">
            <div className="contain ">
            <Header/>
        
            <main className="a6-main">
                <div className="a6-scroll-lock lg:flex-wrap lg:justify-center">
                    {pokemons.length && !loading ? 
                        pokemons.map((pokemon) => (
                            <div className={"pokemon-card "+ setCardColor(pokemon.types) } key={pokemon.name}>

                                <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                                <h2 className="text-2xl capitalize font-extrabold">{pokemon.name}</h2>
                                <p>{pokemon.description}</p>
                            </div>
                    )) : loading ? (
                        <p>Loading... {error}</p>
                    ) : (
                        <p>{error}</p>
                    )}
                </div>
            </main>
    
            <Footer/>
            </div>
        </div>
        </>
    )
}