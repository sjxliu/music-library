// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'

const ArtistView = () => {
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView