import React from "react";
import { Heading, Notes, Slide, Image, Text, Appear, Layout, Fill } from "spectacle";

const style = {
  text: {
    'font-size': '7rem',
  },
}
export default (
    <Slide transition={['FADE']} bgColor= '#F5DD3A'>
       <Layout>
           <Text style={style.text} padding='40px' textColor='black'>ES6‏</Text>
           <Text style={style.text} padding='40px' textColor='black'>ES2018‏</Text>
       </Layout>
    </Slide>

);
