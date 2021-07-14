import React, {useState, useEffect} from 'react'
import { BrowserRouter as Link, Switch, Route } from 'react-router-dom'
import Detectives from '../components/Detectives'
import Perps from '../components/Perps'

export default function FrontPage() {
    const [detectives, setDetectives] = useState("")
    const [perps, setPerps] = useState("")

    
    return (
        <>
            <section className="frontpage-top">
                <h1 className="svu-frontpage-title">
                    The Law and Order SVU API
                </h1>
                <div className="svu-frontpage-image">
                    image goes here
                </div>
            </section>

            <div className="">
                <a href="/frontpage/detectives">detectives</a>
                <a href="/frontpage/perps">perps</a>
            </div>

            <Switch>
                <Route exact path='/frontpage/detectives' render={(props) => <Detectives {...props}/>} />
                <Route exact path='/frontpage/perps' render={(props) => <Perps {...props}/>} />
            </Switch>

        </>

        
    )
}
