import { Fragment, React, useState } from "react";
import { BannerRPS } from "./BannerRPS";

import { Triangle } from "./ui/BannerRPS/styleSvg";
import { BackgroundIcon, Options } from "./ui/ChooseRPS";

import { Link } from "react-router-dom";

import { ReactComponent as TriangleImg } from "./ui/images/bg-triangle.svg";
import { ReactComponent as PaperIcon } from "./ui/images/icon-paper.svg";
import { ReactComponent as RockIcon } from "./ui/images/icon-rock.svg";
import { ReactComponent as ScissorIcon } from "./ui/images/icon-scissors.svg"; 


function ChooseRPS() {

    const [option, setOption] = useState();

    return (
        <Fragment>
            <BannerRPS></BannerRPS>
            <Options>
                <Triangle>
                    <TriangleImg></TriangleImg>
                </Triangle>
                <Link to={{ pathname: `/play/${option}`}}> 
                    <BackgroundIcon onMouseEnter={() => setOption("paper")} mode="#4865f4" float="left" position="relative" marginTop="-40%">
                        <PaperIcon></PaperIcon>
                    </BackgroundIcon>
                </Link>
                <Link to={{ pathname: `/play/${option}`}}>
                    <BackgroundIcon value="scissor" onMouseEnter={()=> setOption("scissor")} mode="#ec9e0e" float="right" position="relative" marginTop="-40%">
                        <ScissorIcon></ScissorIcon>
                    </BackgroundIcon>
                </Link>
                <Link to={{ pathname: `/play/${option}`}}>
                    <BackgroundIcon value="rock" onMouseEnter={()=> setOption("rock")} mode="#dc2e4e" position="relative" marginLeft="33%">
                        <RockIcon></RockIcon>
                    </BackgroundIcon>
                </Link>
            </Options>
        </Fragment>
    )
}

export { ChooseRPS }