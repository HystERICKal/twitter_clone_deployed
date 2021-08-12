//Type 'rfce' to get initial code written for you to save time
import React from 'react'
import "./SidebarOption.css";

//Here we can pass the icons as props (as an argument basically)
//props = icons, test e.t.c
//Use ES6
function SidebarOption({active, text, Icon}) {
    return (
        //to make an icon active, I will use some JSX
        //The back quotes ` ` are for string interpolation
        //SO basically (if active...go ahead and add the following)
        //two dashes are from BEM and they indicate a Modifier "--" cause we are modifying the state of sidebarOptions
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>
            
        </div>
    );
}

export default SidebarOption
