import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem, Layout, Fill, Image } from "spectacle";

export default (
    <Slide>
        <Heading margin="0px 0px 50px 0px">NOUS</Heading>
     <Layout>
         <Fill>
             <Image src="assets/fluo_diag.png" />
             
         </Fill>
         <Fill>
            <Heading size={4} textAlign="left">Alexandre Victoor</Heading>
            <Text textAlign="left" margin="30px">@Alex_Victoor</Text>
            <Text textAlign="left" margin="30px">github.com/alexvictoor</Text>
            <Heading size={4} textAlign="left">Thierry Abaléa</Heading>
            <Text textAlign="left" margin="30px">@ThierryAbalea ‏</Text>
            <Text textAlign="left" margin="30px">github.com/ThierryAbalea</Text>
            
         </Fill>
    </Layout>
    <Image src="assets/fluo_logo.png" margin="40px 40 px" />
     <Notes>
     
    </Notes>
    </Slide>
);
