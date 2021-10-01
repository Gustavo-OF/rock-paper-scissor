import { React, useState } from "react";

import { 
    Banner, 
    Game,
    Score 
} from "./ui/BannerRPS";

import { 
    H1,
    H2,
    H5
 } from "./ui/BannerRPS/fonts"

function BannerRPS() {
    const [score, setScore] = useState(12);

    return (
        <Banner>
            <Game>
                <H1>ROCK</H1>
                <H1>PAPER</H1>
                <H1>SCISSOR</H1>
            </Game>
            <Score>
                <H5>
                    SCORE
                </H5>
                <H2>
                    {score}
                </H2>
            </Score>
        </Banner>
    )
}

export { BannerRPS }