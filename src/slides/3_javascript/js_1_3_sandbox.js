import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';

import code from './hello.nest.example';

export default (
  <Slide transition={['spin']} >
          <iframe 
            title="TypeScript FTW"
            src="https://codesandbox.io/embed/725n32j8jx?autoresize=1&expanddevtools=1&fontsize=42&hidenavigation=1&module=%2Fsrc%2Fhello-typescript.ts&view=editor" 
            style={ {
              position: "absolute",
              left: "0",
              right: "0",
              top: "0",
              bottom: "0",
              height: "900px",
              width: "150%",
              marginTop: "-40%",
              marginBottom: "-30%",
              marginLeft: "-25%",
             
          } } 
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
          </iframe>
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