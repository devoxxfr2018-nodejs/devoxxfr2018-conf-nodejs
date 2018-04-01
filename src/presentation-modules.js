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

import code19 from './slides/2_nodejs_under_the_cover/child_process.example';


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
  import("./slides/0_intro/intro_3a_fluo_cards"),
  import("./slides/0_intro/intro_3b_fluo_auto"),
  import("./slides/0_intro/intro_3c_fluo_loan"),
  import("./slides/0_intro/intro_4"),
  import("./slides/0_intro/intro_5"),
  import("./slides/1_nodejs_4_noobs/start_0"),
  import("./slides/1_nodejs_4_noobs/start_1"),
  import("./slides/1_nodejs_4_noobs/start_2"),
  import("./slides/1_nodejs_4_noobs/start_3"),
  import("./slides/2_nodejs_under_the_cover/node_1"),
  import("./slides/2_nodejs_under_the_cover/node_2.a"),
  import("./slides/2_nodejs_under_the_cover/node_2.b"),
  import("./slides/2_nodejs_under_the_cover/node_3"),
  import("./slides/2_nodejs_under_the_cover/node_4.a"),
  import("./slides/2_nodejs_under_the_cover/node_4.b"),
  import("./slides/2_nodejs_under_the_cover/node_4.c"),
  import("./slides/2_nodejs_under_the_cover/node_4.d"),
  import("./slides/2_nodejs_under_the_cover/node_5"),
  import("./slides/2_nodejs_under_the_cover/node_6"),
  import("./slides/2_nodejs_under_the_cover/node_7"),
  import("./slides/3_javascript/js_1_0"),
  import("./slides/3_javascript/js_1_1_spring"),
  import("./slides/3_javascript/js_1_2_nest"),
  import("./slides/3_javascript/js_1_3_sandbox"),
  import("./slides/3_javascript/js_2_spread_operator_on_object"),
  import("./slides/3_javascript/js_3_builder_pattern"),
  import("./slides/4_ecosystem/eco_1_0"),
  import("./slides/4_ecosystem/eco_1_1_vscode"),
  import("./slides/4_ecosystem/eco_1_2_vscode_debug"),
  import("./slides/4_ecosystem/eco_1_3_chrome"),
  import("./slides/4_ecosystem/eco_1_4_chrome_cpu"),
  import("./slides/4_ecosystem/eco_1_5_chrome_memory"),
  import("./slides/4_ecosystem/eco_2_web_fwk"),
  import("./slides/4_ecosystem/eco_3_db_drivers"),
  import("./slides/4_ecosystem/eco_4_integration"),
  import("./slides/4_ecosystem/eco_5_react_everywhere"),
  import("./slides/5_conclusion/conclusion_fluo_languages"),
  import("./slides/5_conclusion/5_bonnes_raisons"),
  import("./slides/4_ecosystem/eco_3_mysql_driver_perf"),
  /*
voir plan.md

*/

];

const codeSamples = {
  19: code19
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
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
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
