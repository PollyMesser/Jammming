function SearchBar() {
    return (
        <div className="search-bar">
            <input className="text-input" type="text" placeholder="Search..." />
            <button type="submit">Search</button>
        </div>
    );
}

export default SearchBar;