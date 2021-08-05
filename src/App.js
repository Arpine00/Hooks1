import "./App.css"
import React, { useState } from 'react';
import Categories from "./Components/categories";
import ImagesUpload from "./Components/imagesUpload";

function App() {
    const [colors,setColors] = useState(["#F0F0A7","blue","#219653", "red","purple","#B9A5F0","#8D95F0","#84F09B","yellow","black","#F05C00"])
    const [theme,setTheme] = useState("transparent")

    return (
        <div className="App" style={{background: theme }}>
            <div className="colorsBlock">
                {colors.map((item) => {
                    return (
                        <span style={{background: item }} onClick={() => setTheme(item)}></span>
                    )
                })}
            </div>
            <Categories />
            <ImagesUpload />
        </div>
    );
}

export default App;
