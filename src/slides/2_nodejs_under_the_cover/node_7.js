import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';

import code from './cluster.example';

export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={code}
          fit
          ranges={[
            { loc: [0, 0], image: "assets/cluster.png" },
            { loc: [0, 2] },
            { loc: [0, 3] },
            { loc: [0, 5] },
            { loc: [0, 10] },
            { loc: [0, 19] },
          ]}
          showLineNumbers={true}
        />
);