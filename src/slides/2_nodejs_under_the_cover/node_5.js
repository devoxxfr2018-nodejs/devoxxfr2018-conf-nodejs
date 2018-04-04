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
            { loc: [0, 1], title: "child process", image: "assets/child_process.png" },
            { loc: [0, 3] },
            { loc: [0, 9], note: "main <= worker" },
            { loc: [0, 10], note: "main => worker" },
            { loc: [12, 19], note: "worker <= main" },
            { loc: [15, 26], note: "worker => main" },
            { loc: [0, 21] },
          ]}
          showLineNumbers={true}
          onActive={() => startSlide()}
        />
);