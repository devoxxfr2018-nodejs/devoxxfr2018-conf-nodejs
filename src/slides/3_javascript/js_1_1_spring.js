import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';

import code from './hello.rest.spring.example';

export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="java"
          code={code}
          fit
          ranges={[
            { loc: [0, 15], image: "assets/spring-boot-logo.png" },
            { loc: [0, 15], note: "Java / Spring" },
          ]}
          showLineNumbers={true}
        />
);