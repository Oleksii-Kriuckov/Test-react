import React from "react";
import Article from "./article.js"
import StylesMain from './main.css'
import Button from "./button.js";

export default function Main() {
    return (
        <main style={StylesMain}>
            <Article />
            <Button />
        </main>
    )
}