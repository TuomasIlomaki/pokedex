import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils"

export function SideNav(props) {
    const { selectedPokemon, setSelectedPokemon, handleCloseMenu, hideSideMenu } = props

    const [searchValue, setSearchValue] = useState("")

    const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
        if (getFullPokedexNumber(eleIndex).includes(searchValue)){
            return true
        }

        if (ele.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
            return true
        }

        return false
    })

    return (
        <nav className={" " + (!hideSideMenu ? "open" : " ")}>
            <div className={"header " + (!hideSideMenu ? "open" : " ")}>
                <button onClick={handleCloseMenu} className="open-nav-button">
                    <i class="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className="text-gradient">Pokedex</h1>
            </div>

            <input placeholder="E.g. 001 or Bulba..." value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }}/>

            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokedexNumber = first151Pokemon.indexOf(pokemon)

                return (
                    <button key={pokemonIndex} 
                        onClick={() => { 
                            setSelectedPokemon(truePokedexNumber)
                            handleCloseMenu()
                        }}
                        className={"nav-card " + 
                        (pokemonIndex === selectedPokemon ? "nav-card-selected" : " ")}>
                            <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                            <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}