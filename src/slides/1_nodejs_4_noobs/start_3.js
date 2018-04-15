import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';

import example from './hello.example';

export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={example}
          fit
          ranges={[
            { loc: [0, 3] },
            { loc: [3, 11] },
            { loc: [13, 30] },
            { loc: [32, 49] },
            { loc: [50, 56] }
          ]}
          showLineNumbers={true}
        />

);
