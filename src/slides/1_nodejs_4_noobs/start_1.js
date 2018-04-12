import React from "react";
import { Heading, Notes, Slide, Image, Text, Fit, Layout, Appear } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
        
        <Image src="assets/NodeJS_Foundation_Pantone.png" />
        <Layout>
            <Image src="assets/logo_IBM.png" width="30%" height="30%"/>
            <Image src="assets/logo_google.png"  />
            <Image src="assets/logo_intel.png" width="30%" height="30%" />
        </Layout>
        <Layout>
            <Image src="assets/logo_joyent.png" />
            <Image src="assets/logo_microsoft.png" />
        </Layout>    
        <Notes>
            <p>Node aujourd'hui c'est une fondation autour d'un projet OSS </p>
            
        </Notes>
    </Slide>

);