import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";

export default (
    <Slide bgColor="black" textColor="rose">
        <Heading size={4} textColor="white">
        Scaling vertical
        </Heading>
        <Heading size={1} textColor="rose" bold>
        Node Cluster FTW!
        </Heading>
        <Notes>
            <p>un thread à l'heure des laptops à 8 coeurs, des serveurs à 32 coeurs</p>
            <p>un node par coeur, pas un node tout court</p>
        </Notes>
    </Slide>

);