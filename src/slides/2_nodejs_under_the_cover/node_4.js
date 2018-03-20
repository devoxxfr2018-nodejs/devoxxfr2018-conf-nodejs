import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';

import example from './child_process.example';

export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={example}
          fit
          ranges={[
            { loc: [0, 2] },
            { loc: [0, 4] },
            { loc: [0, 7] },
            { loc: [0, 8] },
            { loc: [10, 14] },
            { loc: [9, 19] },
            { loc: [0, 19] },
          ]}
          showLineNumbers={true}
        />
// TODO dynamique
);