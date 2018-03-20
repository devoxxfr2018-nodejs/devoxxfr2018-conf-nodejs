import React from "react";
import { Heading, Notes, Slide, Image, Text, Fit, Layout } from "spectacle";

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
            <p>Node c'est quoi: un projet ope source, v8 + libub,
                 un server http et une fondation avec des grosses
                  boites qui dirigent le projet</p>
            
        </Notes>
    </Slide>

);