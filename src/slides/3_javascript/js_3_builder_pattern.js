import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";
import CodeSlide from 'spectacle-code-slide';

import example from './js_3_builder_pattern.example';

export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={example}
          fit
          ranges={[
            { loc: [0, 8] }, // class Cover
            { loc: [9, 17], title: 'dans les tests' }, // créer une cover dans les tests sans builder
            { loc: [18, 27], title: 'avec le pattern Builder Java-like' }, // exemple avec le pattern builder java-like
            { loc: [28, 45] }, // le code du builder java-like 1/2
            { loc: [46, 72] }, // le code du builder java-like 2/2
            { loc: [74, 88] }, // le builder JS idiomatique
            { loc: [89, 96] }, // exemple d'utilisatino du builder JS idiomatique
          ]}
          showLineNumbers={false}
        />

);
