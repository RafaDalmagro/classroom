import "./global.css";
import { useEffect, useState } from "react";

import { Button } from "./components/button";
// import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
    // const { show } = useMessage({ name: "Rafael", age: 26 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count mudouu:", count);
    }, [count]);

    return (
        <div className={styles.container}>
            <Button name="Adicionar" onClick={() => setCount(count + 1)} />
            <span>{count}</span>
            <Button name="Remover" onClick={() => setCount(count - 1)} />
        </div>
    );
}
