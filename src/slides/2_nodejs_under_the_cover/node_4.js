import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';

import { startSlide } from './child_process.example';

export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code="Loading..."
          fit
          ranges={[
            { loc: [0, 2] },
            { loc: [0, 3] },
            { loc: [0, 9] },
            { loc: [0, 10] },
            { loc: [12, 19] },
            { loc: [15, 26] },
            { loc: [0, 21] },
          ]}
          showLineNumbers={true}
          onActive={() => startSlide()}
        />
);