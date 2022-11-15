import React from "react";

export default function Trending({trending}) {
    return(
        <div>
            <div className='indv'>
                <p>Trending Today</p>
                {trending.map((elem, i) => (
                    <div key={elem.item.id}>
                        <img src={elem.item.small}/>
                        <p>{elem.item.symbol}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}