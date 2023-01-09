import { useAbby } from "../src/abby"

export default function ABTestingPage(){
    const { variant } = useAbby("footer")    
    return (
        <>
            <h1>AB Testing Page</h1>
            <p>Here's a button that's only visible to 50% of users:</p>
            {variant === "A" && <button>Secret!</button>}
            {variant === "B" && null}
        </>
    )
}