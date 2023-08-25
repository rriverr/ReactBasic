import React from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    const [price, setPrice] = React.useState(100);
    const sale = () => {
      setPrice(75);
    }
    return (
        <div>
            <p>${price}</p>
            <button onClick={sale}>Apply Discount</button>
        </div>
    );
}