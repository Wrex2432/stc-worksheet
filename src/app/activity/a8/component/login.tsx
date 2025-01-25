
export function Login() {
    const handleLength = (text: string): string => {
        return text.length >= 10 ? text.slice(0, 25).concat("...") : text.concat("...");
    };
    return (
        <form action="">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
        </form>
    );
}
