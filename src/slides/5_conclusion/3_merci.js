import React from "react";
import { Heading, Notes, Slide, List, ListItem, Link, Text, Image, Appear } from "spectacle";

export default (
  <Slide>
      <Heading>Merci !</Heading>
      <List ordered margin="50px -120px">
        <ListItem margin="50px">NodeJs la première conf : <Link textColor="tertiary" href="https://www.youtube.com/watch?v=ztspvPYybIY">https://bit.ly/1bTy7Ay</Link></ListItem>
        <ListItem margin="50px">Blogs posts sur NodeJs : <Link textColor="tertiary" href="https://medium.freecodecamp.org/@samerbuna">https://bit.ly/2HCPcmN</Link></ListItem>
        <ListItem margin="50px">Cette présentation : <Link textColor="tertiary" href="https://devoxxfr2018-nodejs.github.io/devoxxfr2018-conf-nodejs">https://bit.ly/2HsyoBm</Link></ListItem>
      </List>
      <Text bold textColor="tertiary">@Alex_Victoor @ThierryAbalea</Text>
    <Notes>
      <p>la techno n'est qu'unn outil, comme le dit sandro manchusco</p>
    <ul>
        <li>C'est simple</li>
        <li>C'est léger</li>
        <li>Le JS moderne c'est top</li>
        <li>L'écosystème est juste énorme</li>
        <li>React...</li>
    </ul>
    </Notes>
  </Slide>
);