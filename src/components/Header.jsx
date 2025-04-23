export function Header(props) {
    const { handleToggleMenu } = props

    return (
        <header>
            <button className="open-nav-button" onClick={handleToggleMenu}>
                <i class="fa-solid fa-bars"></i>
            </button>
            <h1 className="text-gradient">Pokedex</h1>
        </header>
    )
}