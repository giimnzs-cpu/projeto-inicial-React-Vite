import { useState } from "react";

export default function Contador() {
    const [count, setcount] = useState(0)

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setcount(count + 1)}>
                Somar
            </button>
        </div>
    )
}