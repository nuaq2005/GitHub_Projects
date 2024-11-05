import {useState} from 'react';
import { useParams } from 'react-router-dom';
import {supabase} from '../client'

const EditChar = () => {

    const {id} = useParams();
    const [card, setCard] = useState({id: null, name: "", vision: "", nation: "", teamposition: ""});

    const updateCard = async (event) => {
        event.preventDefault();

        await supabase
          .from('Cards')
          .update({title: card.name, vision: card.vision, nation: card.nation, teamposition: card.teamposition})
          .eq('id', id);
      
        window.location = "/";
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

    const deleteCard = async (event) => {
        event.preventDefault();

        await supabase
          .from('Cards')
          .delete()
          .eq('id', id);
      
        window.location = "/";
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
            
            <input type="submit" value="Submit" onClick={updateCard} />
            <button className="deleteButton" onClick={deleteCard}>Delete</button>
    </div>
    )
}

export default EditChar;