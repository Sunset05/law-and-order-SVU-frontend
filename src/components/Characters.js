import React from 'react'
import { Card, Image } from "semantic-ui-react"

export default function Characters(props) {
    const renderDetectives = () => 
        props.detectives.map(detective => 
            <Card>
                <Image src={detective.image} />
                <Card.Content>
                    <Card.Header>{detective.name}</Card.Header>
                    <Card.Description>
                        played by {detective.actor}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    const renderPerps = () =>
        props.perps.map(perp =>
            <Card>
                <Image src={perp.image} />
                <Card.Content>
                    <Card.Header>{perp.name}</Card.Header>
                    <Card.Description>
                        {perp.crime}
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        played by {perp.actor}
                    </Card.Description>
                </Card.Content>
            </Card>
        )

    return (
        <div className="characters-container">
            {
            props.detectives 
                ? renderDetectives()
                : renderPerps()
            }
        </div>
    )
}
