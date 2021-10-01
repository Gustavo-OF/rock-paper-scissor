import { React } from "react"
import { useParams } from "react-router"

function PlayRPS() {
    const params = useParams();
    console.log(params);
    return (
        <div>modulo de jogar</div>
    )
}

export { PlayRPS }