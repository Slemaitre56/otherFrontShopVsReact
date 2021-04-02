import React from 'react'
import Caisse from '../../components/Main/Caisse';
import Ticket from '../../components/Main/Ticket';



const Home = (props) => {

    return (
        <div className="bloc">
            <Caisse />
            <Ticket />

        </div>
    )
}

export default Home;