import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';

import code from './hello.nest.example';

export default (
  <Slide transition={['spin']} bgImage="assets/codesandbox.png" bgSize="50%" bgRepeat="no-repeat" bgColor="black">
     
      <Notes>
        <ul>
          <li>annotations - decorateurs</li>
          <li>typage fort - se lit de gauche à droite comme en go, scala ou kotlin</li>
          <li>inférence de type comme en Java 10</li>
          <li>le compilo/transpilateur typescript check plein de choses</li>
          <li>interface des méthodes mais aussi propriétés</li>
          <li>typage structurel comme en go</li>
        </ul>
      </Notes>
    </Slide>
);