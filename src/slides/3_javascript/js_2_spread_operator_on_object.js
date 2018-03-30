import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';

import example from './js_2_spread_operator_on_object.example';

export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={example}
          fit
          ranges={[
            { loc: [0, 1], title: 'Spread Operator', note: 'Shallow clone' },
            { loc: [1, 2], note: 'Merge de 2 objets' },
            { loc: [2, 7], note: 'Exemple' },
          ]}
          showLineNumbers={false}
        />

);
