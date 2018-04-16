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
              <ListItem>...</ListItem>
            </List>
    <Notes>
      <p>pas de gras avec node - un sdk rikiki - résultat ça démarre très vite, emprunte mémoire minimum</p>
   
    </Notes>
  </Slide>
);