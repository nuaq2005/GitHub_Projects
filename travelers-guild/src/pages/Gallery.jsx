import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const Gallery= (props) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const {data} = await supabase
            .from('Cards')
            .select()
            .order('created_at', { ascending: true })
            
            // set state of posts
            setCards(data);
        }
        fetchCards().catch(console.error);
    }, [props]);
    
    return (
        <div className='gallery-page'> 
            <h1>Characters Gallery</h1>
            <div className="character-sheet">
                {cards && cards.length > 0 ? (
                    cards.map((card) => (
                        <Card 
                            key={card.id} 
                            id={card.id} 
                            name={card.name} 
                            nation={card.nation} 
                            vision={card.vision} 
                            teamposition={card.teamposition}
                        />
                    ))
                ) : (
                    <h2>{'No Character Sheets Yet 😞'}</h2>
                )}
            </div>
        </div>   
    )
}

export default Gallery;