type Props = {
    name: string;
    age: number;
};

function useMessage({ name, age }: Props) {
    function show() {
        console.log(`Mensagem do Hook! ${name}, ${age}`);
    }

    return {
        show,
    };
}
export { useMessage };
