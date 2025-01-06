import React, {useState} from "react";
import '../styles/dropdown.css'

const Dropdown = ({options, onSelect}) =>{
    const [selected, setSelected] = useState(options[0]);

    const handleChange = (event) =>{
        setSelected(event.target.value);
        onSelect(event.target.value);
    }

    return(
        <select className="dropdown" value={selected} onChange={handleChange}>
            {options.map((option, index) =>(
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default Dropdown