import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import quizLogo from "../img/quiz-logo.png"
import "../styles.css";

export default function Header() {
    const { authToken } = useContext(AuthContext);

    return (
        <header>
            <nav className="nav-header">
                <img src={quizLogo} alt="Quiz Logo" className="nav-logo" />
                { /* FIXME: Example usage of AuthToken */}
                <h1>Quiz Duell SEA 8 Edition &nbsp; {authToken}</h1>
                <ul className = "nav-items">
                    <li>Registrieren</li>
                    <li>Anmelden</li>
                    <li>Über uns</li>
                </ul>
            </nav>
        </header>
    )
}