import React from 'react';

const Caisse = (props) => {
    return (
        <div className="caisse">
           <h1>Ici ma caisse</h1>
           <select name="fruits" id="fruits" ></select>
           <button type="submit" id="scan">Scanner</button>
           <p>Total : <span id="res"></span></p>

        </div>
    )
}

export default Caisse;