import React, {useState, useEffect} from 'react'
import { BrowserRouter as  Switch, Route } from 'react-router-dom'
import Characters from '../components/Characters'
// import Perps from '../components/Perps'

const developmentDetectives = "http://localhost:3000/detectives"
const developmentPerps = "http://localhost:3000/perps"
const deploymentDetectives = 'https://law-and-order-api.herokuapp.com/detectives/'
const deploymentPerps = 'https://law-and-order-api.herokuapp.com/perps/'

export default function FrontPage() {
    const [detectives, setDetectives] = useState([])
    const [perps, setPerps] = useState([])

    useEffect(()=> {
        fetch(developmentDetectives)
        .then(response => response.json())
        .then(result => setDetectives(result))
    }, [])
    useEffect(()=> {
        fetch(developmentPerps)
        .then(response => response.json())
        .then(result => setPerps(result))
    }, [])
    
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
                <Route exact path='/frontpage/detectives' 
                    render={(props) => <Characters {...props} detectives={detectives}/>} 
                />
                <Route exact path='/frontpage/perps' 
                    render={(props) => <Characters {...props} perps={perps}/>} 
                />
            </Switch>

            <div>
                some lame footer
            </div>
        </>

        
    )
}
