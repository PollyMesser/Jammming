import { CircleMinus, ChevronDown, ChevronUp } from 'lucide-react';

function Playlist() {
    return (
        <div className="playlist">
            <h2>Playlist</h2>
            <p>Playlist is empty</p>
            <ul>
                <li><div className="trackContainer">
                    <div className="listItem">
                      <div>Track 1</div>
                      <div><CircleMinus /></div>  
                    </div>
                    <div className="trackControls">
                      <div><ChevronUp /></div>
                      <div><ChevronDown /></div>
                    </div>
                </div></li>
                <li><div className="trackContainer">
                    <div className="listItem">
                      <div>Track 2</div>
                      <div><CircleMinus /></div>  
                    </div>
                    <div className="trackControls">
                      <div><ChevronUp /></div>
                      <div><ChevronDown /></div>
                    </div>
                </div></li>
                <li><div className="trackContainer">
                    <div className="listItem">
                      <div>Track 3</div>
                      <div><CircleMinus /></div>  
                    </div>
                    <div className="trackControls">
                      <div><ChevronUp /></div>
                      <div><ChevronDown /></div>
                    </div>
                </div></li>
                <li><div className="trackContainer">
                    <div className="listItem">
                      <div>Track 4</div>
                      <div><CircleMinus /></div>  
                    </div>
                    <div className="trackControls">
                      <div><ChevronUp /></div>
                      <div><ChevronDown /></div>
                    </div>
                </div></li>
            </ul>
        </div>
    );
}

export default Playlist;
