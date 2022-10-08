import React, { useState, useEffect } from 'react'
import './card.css'

const Card = () => {

    let [info, setinfo] = useState()

    const [search, setsearch] = useState("mumbai")

    useEffect(() => {

        let api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ff1a6271d99ac9c4a020371cd0482a1a`

        let data = async (a) => {
            let get = await fetch(a)
            let response = await get.json()
            setinfo(response.main)
        }
        data(api)

    }, [search])

    let changing = (e) => {
        setsearch(e.target.value)
    }

    return (
        <>
            {
                <div className='container'>
                    <div className="search">
                        <input type="text" 
                        value={search}
                        className="search-box" placeholder='search'
                            onChange={changing} />
                    </div>
                    {
                        !info ? (
                            <h2>no found data</h2>
                        ) : (
                            <div>
                     <div className="pune">
                        <h2 className="name">{search}</h2>
                    </div>
                    <div className="temp">
                        <h3>{info.temp}<span>Cel</span></h3>
                    </div>
                    <p>Min:5.25cel | Max:5.25cel</p>
                    </div>
                )
                    }
                   
                </div>
        
        }
        </>
    )
}


export default Card