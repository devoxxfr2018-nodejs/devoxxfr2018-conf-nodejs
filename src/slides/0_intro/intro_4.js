import React from "react";
import { Heading, Notes, Slide, Layout, Image, Text } from "spectacle";

export default (
    <Slide bgImage="assets/fluo-team.jpg" bgDarken="0.7" >
      
        <Layout margin="-200px" align="center center">
            <Image  src="assets/fluo-logo.png" width="30%" height="30%"/>
            <Text textSize="126" padding="100px 0px"><span role="img" aria-label="love">❤️</span></Text>
            <Image src="assets/js-logo.svg" width="30%" height="30%"/>
        </Layout>

        <Notes>
        </Notes>
    </Slide>
);
