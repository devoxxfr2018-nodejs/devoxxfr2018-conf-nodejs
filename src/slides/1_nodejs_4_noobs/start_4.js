import React from "react";
import CodeSlide from 'spectacle-code-slide';
import { Heading, Notes, Slide, Image, Text } from "spectacle";


export default (
  <Slide transition={['zoom']} bgColor="primary">
        <Image src="assets/speccollab2.gif" width="90%" />
        <Text>
            mock http
        </Text>
        <Notes>
            
            
        </Notes>
    </Slide>
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={example}
          fit
          ranges={[
            { loc: [34, 40] },
            { loc: [31, 40] },
            { loc: [29, 40] },
            { loc: [28, 40] },
            { loc: [26, 40] },
            { loc: [0, 22]},
          ]}
          showLineNumbers={true}
        />
    
);