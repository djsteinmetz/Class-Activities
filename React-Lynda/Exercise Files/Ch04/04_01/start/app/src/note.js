import React from 'react';

class Note extends React.Component {
    render() {
        return(
            <div className="note">
                <p>Learn React</p>
                <spam>
                    <button>Edit</button>
                    <button>Remove</button>
                </spam>
            </div>
        )
    }
}

export default Note;