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
            { loc: [0, 1], title: 'Un shallow clone avec le spread operator' },
            { loc: [1, 2], title: 'Equivalent à' },
            { loc: [2, 3], title: 'Merge de 2 objets' },
            { loc: [3, 4], title: 'Equivalent à' },
            { loc: [4, 9], title: 'Exemple' },
          ]}
          showLineNumbers={false}
        />

);
