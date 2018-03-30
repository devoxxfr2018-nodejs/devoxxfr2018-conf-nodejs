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
            { loc: [0, 8], title: 'Pattern Builder' }, // class Cover
            { loc: [0, 8], note: `type d'objet pour l'exemple` },
            { loc: [9, 17], note: 'dans les tests sans Pattern Builder' }, // créer une cover dans les tests sans builder
            { loc: [18, 27], note: 'dans les tests avec le Pattern Builder Java-like' }, // exemple avec le pattern builder java-like
            { loc: [28, 45], note: 'builder Java-like 1/2' }, // le code du builder java-like 1/2
            { loc: [46, 72], note: 'builder Java-like 2/2' }, // le code du builder java-like 2/2
            { loc: [74, 88], note: 'builder JS idiomatique' }, // le builder JS idiomatique
            { loc: [89, 96], note: 'usage de ce builder' }, // exemple d'utilisatino du builder JS idiomatique
          ]}
          showLineNumbers={false}
        />

);
