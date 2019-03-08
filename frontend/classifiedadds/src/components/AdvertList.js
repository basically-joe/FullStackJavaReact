import React from 'react'

const AdvertList = ({adverts}) => {

    if (!adverts._embedded) return null;
    const adSpecificData = adverts._embedded.adverts;
    console.log(adverts._embedded.adverts)

    const advertNodes = adSpecificData.map(advert => {
        return (
            <div key = {advert.category}>
            <h1>{advert.title}</h1>
            <p>{advert.category}</p>
            <p>{advert.askingPrice}</p>
            <p>{advert.description}</p>
            </div>
        )
    })

    return(
        <div className="advert-list">
            {advertNodes}
        </div>
    )

}
export default AdvertList;