import { CirclePlus } from 'lucide-react';

function SearchResults() {
    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <p>Results will be displayed here.</p>
            <ul>
                <li className="listItem"><div>Result 1</div><div><CirclePlus /></div></li>
                <li className="listItem"><div>Result 2</div><div><CirclePlus /></div></li>
                <li className="listItem"><div>Result 3</div><div><CirclePlus /></div></li>
                <li className="listItem"><div>Result 4</div><div><CirclePlus /></div></li>
            </ul>
        </div>
    );
}

export default SearchResults;