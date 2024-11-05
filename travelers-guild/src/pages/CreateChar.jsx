import {useState} from 'react';
import {supabase} from '../client'

const CreateChar = () => {

    const [card, setCard] = useState({name: "", vision: "", nation: "", teamposition: ""})

    const createCharacter = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Cards')
          .insert({name: card.name, vision: card.vision, nation: card.nation, teamposition: card.teamposition})
          .select();
        window.location = "/gallery";
      }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCard( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <label htmlFor="name">Name</label> <br />
            <input type="text" id="name" name="name" onChange={handleChange} /><br />
            <br/>
            
            <label htmlFor="nation">Nation</label><br />
            <select id="nation" name="nation" onChange={handleChange}>
            <option value="">Select a nation</option>
            <option value="Mondstadt">Mondstadt</option>
            <option value="Liyue">Liyue</option>
            <option value="Inazuma">Inazuma</option>
            <option value="Sumeru">Sumeru</option>
            <option value="Fontaine">Fontaine</option>
            <option value="Natlan">Natlan</option>
            <option value="Snezhnaya">Snezhnaya</option>
            </select><br />
            <br/>
            
            <label htmlFor="vision">Vision</label><br />
            <select id="vision" name="vision" onChange={handleChange}>
                <option value="">Select a vision</option>
                <option value="Pyro">Pyro</option>
                <option value="Hydro">Hydro</option>
                <option value="Anemo">Anemo</option>
                <option value="Electro">Electro</option>
                <option value="Dendro">Dendro</option>
                <option value="Cryo">Cryo</option>
                <option value="Geo">Geo</option>
                </select><br />
                <br/>
                
                <label htmlFor="teamposition">Team Position</label><br />
                <select id="teamposition" name="teamposition" onChange={handleChange}>
                <option value="">Select a position</option>
                <option value="Main DPS">Main DPS</option>
                <option value="Sub DPS">Sub DPS</option>
                <option value="Support">Support</option>
                <option value="Healer">Healer</option>
                </select><br />
                <br/>
                
                <input type="submit" value="Submit" onClick={createCharacter} />
        </div>
    )
}

export default CreateChar