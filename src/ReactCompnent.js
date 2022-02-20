import React from 'react';

// Nested Components, React Tools

function ReactCompnent() {
    return (
        <div>
          <Person />
          <Message />
        </div>
    );
}

const Person = () => <h2>Jhon Doe</h2>
const Message = () => {
    return <p>This is getting interesting</p>
};

export default ReactCompnent;