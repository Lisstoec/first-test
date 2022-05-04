import React from "react";
import quizLogo from "../img/quiz-logo.png"
import "../styles.css";

export default function Header() {
    return (
        <header>
            <nav className="nav-header">
                <img src={quizLogo} alt="Quiz Logo" className="nav-logo" />
                <h1>Quiz Duell SEA 8 Edition</h1>
                <ul className = "nav-items">
                    <li>Registrieren</li>
                    <li>Anmelden</li>
                    <li>Über uns</li>
                </ul>
            </nav>
        </header>
    )
}