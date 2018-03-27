import React from "react";
import { Heading, Notes, Slide, Image, Text, Fit, Layout } from "spectacle";

export default (
    <Slide transition={['fade']} bgColor="white">

        <Layout>
            <Image src="assets/database_logos/mysql.svg" width="30%" height="30%" />
            <Image src="assets/database_logos/postgresql.png" width="40%" height="40%" />
            <Image src="assets/database_logos/sqlite.svg" width="30%" height="30%" />
        </Layout>
        <Layout>
            <Image src="assets/database_logos/microsoft-sql-server.svg" width="30%" height="30%" />
            <Image src="assets/database_logos/oracle-database.png" width="30%" height="30%" />
        </Layout>
        <Layout>
            <Image src="assets/database_logos/redis.svg" width="30%" height="30%" />
            <Image src="assets/database_logos/cassandra.svg" width="30%" height="30%" />
            <Image src="assets/database_logos/elasticsearch.png" width="30%" height="30%" />
        </Layout>
    </Slide>
);
