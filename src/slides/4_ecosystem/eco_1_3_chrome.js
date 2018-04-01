import React from "react";
import { Heading, Notes, Slide, Image, Text, Fit, Layout, Appear } from "spectacle";

export default (
    <Slide transition={['fade']} bgColor="white">

        <Image src="assets/chrome_logo.svg" width="70%" height="70%" />
        <Appear><Heading size={1} textColor="black" bold>
        chrome://inspect
        </Heading></Appear>
        
    </Slide>
);
