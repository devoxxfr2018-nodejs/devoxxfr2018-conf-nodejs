import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';

import code from './hello.nest.example';

export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="java"
          code={code}
          fit
          ranges={[
            { loc: [0, 12], image: "assets/nest-logo.svg" },
            { loc: [0, 12], note: "TypeScript / nest" },
            { loc: [14, 23] },
            { loc: [14, 25], note: "Inférence..." },
            { loc: [14, 26]  },
            { loc: [27, 30], note: "Interfaces à la C#" },
            { loc: [27, 32], note: "Typage structurel" },
          ]}
          showLineNumbers={true} >
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
    </CodeSlide>
);