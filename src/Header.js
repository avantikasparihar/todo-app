import React from "react"

function Header() {
    const date = new Date()
    return (
        <header className="navbar">
            <h1>This is the header section.</h1>
            <h4><br />It is currently {date.getHours()} O'clock.</h4>
        </header>
    )
}

export default Header