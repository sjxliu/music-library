// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState, useEffect } from 'react'

const AlbumView = () => {
    const [ albumData, setalbumData ] = useState([])

    return (
        <div>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView