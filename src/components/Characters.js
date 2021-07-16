import React from 'react'
import { Card, Image } from "semantic-ui-react"

export default function Characters(props) {

    const renderDetectives = () => 
        props.detectives.map(detective => 
            <div className="character-card">
                <Card>
                    <img src={detective.image} height={350} alt="#" />
                    <Card.Content>
                        <Card.Header>{detective.name}</Card.Header>
                        <Card.Description>
                            played by {detective.actor}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>
                
        )

    const renderPerps = () =>
        props.perps.map(perp =>
            <div className="character-card">
                    <Card>
                        <Card.Content>
                            <Image src={perp.image} />
                                <Card.Header>{perp.name}</Card.Header>
                                <Card.Meta>{perp.crime}</Card.Meta>
                            <Card.Description>
                                played by {perp.actor}
                            </Card.Description>
                        </Card.Content>
                    </Card>
            </div>
        )

    return (
        <Card.Group>
            {
            props.detectives 
                ? renderDetectives()
                : renderPerps()
            }
        </Card.Group>  
    )
}
