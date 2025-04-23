import { useState } from "react"
import { Header } from "./components/Header"
import { PokeCard } from "./components/PokeCard"
import { SideNav } from "./components/SideNav"


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [hideSideMenu, sethideSideMenu] = useState(true)

  function handleToggleMenu() {
    sethideSideMenu(!hideSideMenu)
  }

  function handleCloseMenu() {
    sethideSideMenu(true)
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />

      <SideNav 
        hideSideMenu={hideSideMenu}
        handleCloseMenu={handleCloseMenu}
        selectedPokemon={selectedPokemon} 
        setSelectedPokemon={setSelectedPokemon}/>

      <PokeCard 
        selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
