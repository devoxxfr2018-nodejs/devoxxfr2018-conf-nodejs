import React from "react";
import { Heading, Slide, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';
//import code from 'raw-loader!../../../public/assets/code.js';
const code = "HACK";
export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={code}
          ranges={[
            { loc: [0, 5], title: 'Stateless Components' },
            { loc: [3, 4], note: 'They are just functions that receive Props' },
            { loc: [7, 8], note: 'They are just functionsxxx that receive Props' }
          ]}
          showLineNumbers={false}
        />
);
