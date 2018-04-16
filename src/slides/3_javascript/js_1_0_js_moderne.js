import React from "react";
import { Heading, Notes, Slide, List, ListItem, Link, Text, Image, Appear } from "spectacle";

export default (
  <Slide>
      <Image src="assets/1000px-Node.js_logo_2015.svg.png" />
      <Heading size={3} textColor="tertiary">
        5 bonnes raisons ? 
        </Heading>
        <List ordered margin="50px 200px" bold>
              <ListItem>Simplicité</ListItem>
              <ListItem>Légèreté</ListItem>
              <ListItem>Le JS moderne</ListItem>
              <ListItem>...</ListItem>
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