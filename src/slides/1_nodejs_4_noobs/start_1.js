import React from "react";
import { Heading, Notes, Slide, Image, Text, Fit, Layout, Appear } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
        
        <Image src="assets/NodeJS_Foundation_Pantone.png" />
        <Layout>
            <Appear><Image src="assets/logo_IBM.png" width="30%" height="30%"/></Appear>
            <Appear><Image src="assets/logo_google.png"  /></Appear>
            <Appear><Image src="assets/logo_intel.png" width="30%" height="30%" /></Appear>
        </Layout>
        <Layout>
            <Appear><Image src="assets/logo_joyent.png" /></Appear>
            <Appear><Image src="assets/logo_microsoft.png" /></Appear>
        </Layout>    
        <Notes>
            <p>Node aujourd'hui c'est une fondation autour d'un projet OSS </p>
            
        </Notes>
    </Slide>

);