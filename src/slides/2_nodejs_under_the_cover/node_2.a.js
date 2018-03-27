import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";

export default (
    <Slide bgColor="primary"  bgImage="assets/Ryan_Dahl_JSConf_2009.png" bgDarken="0.7" >
        <Heading textColor="white">2009</Heading>
        <Heading caps>Ryan Dahl</Heading>
        <Notes>
            <p>JSCOnf en 2009 - Ryan Dahl présente son projet perso au monde , inspiré de nginx</p>
            <p>
                Ryan pense q'il faut des I/O non bloquants
                I/O non bloquants => event loop comme dans nginx
                Le JS a été fait pour tourner avec une event loop

            </p>
            
        </Notes>
    </Slide>

);