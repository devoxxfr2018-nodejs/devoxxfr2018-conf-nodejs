import React from "react";
import { Heading, Notes, Slide, List, ListItem, Link, Text, Image, Appear } from "spectacle";

export default (
  <Slide>
      <Heading>Merci !</Heading>
      <List ordered margin="50px -200px">
        <ListItem>Cette présentation : <Link href="https://devoxxfr2018-nodejs.github.io/devoxxfr2018-conf-nodejs">https://devoxxfr2018-nodejs.github.io/devoxxfr2018-conf-nodejs</Link></ListItem>
        <ListItem>Blogs posts sur NodeJs : <Link href="https://medium.freecodecamp.org/@samerbuna">https://medium.freecodecamp.org/@samerbuna</Link></ListItem>
        <ListItem>NodeJs la première conf : <Link href="https://www.youtube.com/watch?v=ztspvPYybIY">https://www.youtube.com/watch?v=ztspvPYybIY</Link></ListItem>
      
      </List>
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