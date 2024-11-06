import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { supabase } from '../client';

const ReadChar = () => {
    const {id} = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchCard = async () => {
            const {data} = await supabase
            .from('Cards')
            .select()
            .eq('id', id)
            .single();
            setCard(data);
        }
        fetchCard().catch(console.error);
    }, [id]);


    const getTeamPosition = (teamposition) => {
        switch (teamposition) {
            case 'Main DPS':
                return {image:'/images/main-dps.jpg', text: 'Go Out there and make some damage!'};
            case 'Healer':
                return {image:'/images/healer.jpg', text: 'Make sure no one dies on your watch!'};
            case 'Support':
                return {image:'/images/support.jpg', text: 'Support your team with buffs and shields!'};
            case 'Sub DPS':
                return {image:'/images/sub-dps.jpg', text: 'Help the Main DPS with some damage, but don\'t take the spotlight!'};
            default:
                return {image:'/images/main-dps.jpg', text: 'Your role is unknown. Please select a role.'};
        }
    }

    const {image, text} = getTeamPosition(card?.teamposition);

    return (
        <div>
           {card ? (
    <>
        <h1> Character Information </h1>
        <h2> Name: {card.name} </h2>
        <h2> Nation: {card.nation} </h2>
        <h2> Vision: {card.vision} </h2>
        <h2> Team Position: {card.teamposition} </h2>

        <div style={{ marginTop: '20px' }}>
                {image && <img src={image} alt={`${card.teamposition} role`} style={{ width: '100px', height: '100px' }} />}
                <p className='team-desription'>{text}</p>
            </div>
    </>
) : (
    <>
    <h2>Loading</h2>
    <h3> ..... </h3>
    </>
)}
        </div>
    );
}
export default ReadChar;