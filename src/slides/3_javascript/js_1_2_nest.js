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
            { loc: [0, 12] },
          ]}
          showLineNumbers={true}
        />
);