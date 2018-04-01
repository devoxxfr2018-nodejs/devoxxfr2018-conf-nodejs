import React from "react";
import { Heading, Notes, Slide, Image, Text, Fit, Layout } from "spectacle";

export default (
    <Slide transition={['fade']} bgColor="white">

        <Layout>
            <Text textSize="100" bold>REST</Text>
            <Image src="assets/grpc_logo.png" width="40%" height="40%" />
        </Layout>
        <Layout>
            <Image src="assets/graphql_logo.png" width="60%" height="60%" />
        </Layout>
        <Layout>
            <Image src="assets/0mq_logo.gif" width="20%" height="20%" margin="20"/>
            <Image src="assets/kafka-logo.jpg" width="40%" height="40%" />
            <Image src="assets/rabbitmq_logo.png" width="50%" height="50%" />
        </Layout>
        
    </Slide>
);
