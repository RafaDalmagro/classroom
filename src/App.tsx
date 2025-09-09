import { Button } from "./components/button.tsx";

export function App() {
    return (
        <div>
            <Button name="Salvar" onClick={() => alert("Clicado")} />
            <Button name="Cancelar" />
            <Button name="Excluir" />
        </div>
    );
}
