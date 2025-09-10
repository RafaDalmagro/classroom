import "./global.css";

import { Button } from "./components/button";

import "./style.css";

export function App() {
    return (
        <div className="container">
            <Button name="Salvar" onClick={() => alert("Clicado")} />
            <Button name="Cancelar" />
            <Button name="Excluir" />
        </div>
    );
}
