import React from "react"

function NewStoreForm({setStores}) {
    function handleSubmit(event){
        event.preventDefault()

    
    const newStore ={
        "name": event.target.name.value,
        "image": event.target.image.value,
        "season": parseInt(event.target.season.value),
        "episode": parseInt(event.target.episode.value),
        "episodeUrl": "",
        "url": event.target.image.value
    }

    fetch("http://localhost:8085/stores", {
    'method':'POST',
    'headers': {
        'Content-Type': 'application/json'
    },
    'body': JSON.stringify(newStore),
    })
    .then(res => res.json())
    .then(data => {
        setStores(prevStores => [...prevStores,data])
    })

    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Store Name"/>
            <input type="text" id="image" placeholder="Image URL" />
            <input type="number" id="season" placeholder="Season" step="1"/>
            <input type="number" id="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;