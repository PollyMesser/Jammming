import { useState, useEffect } from 'react';
import { CirclePlus } from 'lucide-react';
import trackList from './tracklist.json'; // Import the JSON file

function SearchResults() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        setTracks(trackList.tracks);
    }, []);
    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <p>Results will be displayed here.</p>
            <ul>
                {tracks.slice(0, 10).map((track) => (
                    <li key={track.id} className="listItem">
                        <div><strong>{track.title}</strong><br />{track.artist}</div>
                        <div><CirclePlus /></div></li>
                ))}
                
            </ul>
        </div>
    );
}

export default SearchResults;