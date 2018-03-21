// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';


// Import theme
import createTheme from 'spectacle/lib/themes/default';

import code11 from './slides/2_nodejs_under_the_cover/child_process.example';


// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    rose: '#ff4081'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

// https://app.mindmup.com/map/_free/2018/03/e9c0df702a2811e8b24fcd4c7233e614

const slidesImports = [
  import("./slides/0_intro/intro_1"),
  import("./slides/0_intro/intro_2"),
  import("./slides/0_intro/intro_3"),
  import("./slides/0_intro/intro_4"),
  import("./slides/0_intro/intro_5"),
  import("./slides/1_nodejs_4_noobs/start_1"),
  import("./slides/1_nodejs_4_noobs/start_2"),
  import("./slides/1_nodejs_4_noobs/start_3"),
  import("./slides/2_nodejs_under_the_cover/node_1"),
  import("./slides/2_nodejs_under_the_cover/node_2"),
  import("./slides/2_nodejs_under_the_cover/node_3"),
  import("./slides/2_nodejs_under_the_cover/node_4"),
  /*
voir plan.md 

*/
  
];

const codeSamples = {
  11: code11
}

localStorage.clear();

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.startTicker = this.startTicker.bind(this);
    this.stopTicker = this.stopTicker.bind(this);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
      
    });
  }

  startTicker(onActiveFun) {
    return () => {
      if (!this.ticker) {
        this.ticker = setInterval(() => {
          const now = new Date();
          console.log("tick tick");
          this.setState({tick: now});
        }, 1000);
      }
      onActiveFun && onActiveFun(); 
    }
  }

  stopTicker(onActiveFun) {
    return () => {
      if (this.ticker) {
        clearInterval(this.ticker);
        this.ticker = undefined;
      }
      onActiveFun && onActiveFun(); 
    }
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {
          slides.map((slide, index) => {

            if (codeSamples[index]) {
              return React.cloneElement(slide, {key: index, code: codeSamples[index](), onActive: this.startTicker(slide.props.onActive)});
            }
            
            return React.cloneElement(slide, {key: index, onActive: this.stopTicker(slide.props.onActive) });
          })
        }
      </Deck>
    );
  }
}
