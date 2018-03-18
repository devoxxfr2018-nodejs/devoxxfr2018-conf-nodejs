import React from "react";
import { Heading, Notes, Slide, List, ListItem, Link, Text } from "spectacle";

export default (
    <Slide transition={['zoom']} textFont="secondary">
                     <Heading size={2} caps>
           THE END
          </Heading>
          <List >

            <ListItem>jsGiven : <Link textColor="tertiary">https://jsgiven.org</Link></ListItem>
            <ListItem>jsVerify : <Link textColor="tertiary">https://jsverify.github.io</Link></ListItem>
            <ListItem>Stryker : <Link textColor="tertiary">https://stryker-mutator.io</Link></ListItem>
          </List>
        
          <Notes>
              j'espère qu'alert coucou c'est fini
              </Notes>
                </Slide>


);