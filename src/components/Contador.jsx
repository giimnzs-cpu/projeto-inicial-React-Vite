import { useEffect, useState } from "react";

export default function Contador() {
    const [count, setcount] = useState(0)

    
    useEffect(() => {
  document.title = "contador apareceu na tela" + count
}, [count])

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setcount(count + 1)}>
                Somar
            </button>
        </div>
    )
}
export default Contador;