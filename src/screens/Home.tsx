import React from "react";
import { CardContent, Grid, Card, CardMedia } from "@material-ui/core";
import dp from "../assets/1577147829913.jpeg";
import "../styles/home-page.scss";
import "../styles/util.scss";
export default function Home() {
  return (
    <Grid container spacing={1} alignItems="center" className="extra-space-x">
      <Grid item md={4} xs={12} sm={4}>
        <Card>
          <CardMedia image={dp} className="intro-media" />
        </Card>
      </Grid>
      <Grid item md={8} xs={12} sm={8}>
        <Card>
          <CardContent>
            <h2>In a nutshell</h2>
            <ul className="intro-items">
              <li>
                ⚡ 4+ years of applicable industry experience in full-stack web
                applications development.
              </li>
              <li>
                🔥 Good at JavaScript, React.js, Vue.js, Node.js, Express.js,
                MySQL and mongoDB.
              </li>
              <li>
                👨‍🏭 Worked in Education,Finance, Food industry, E-commerce and
                ERP domains.
              </li>
              <li>❤️ Passionate to work with [anything].js / cutting edge.</li>
              <li>
                🇱🇰 25 years old, Made in Sri lanka (GMT+5:30) , Ready to work in
                any time zone.
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
      <Grid md={12} xs={12} sm={12}>
        <Card>
          <CardContent>
            <h2>In details</h2>
            <Grid container>
              <p className="intro-details">
                I am Pathum Kalhan, 25 years old senior software engineer based
                on Sri lanka. I have wide range of applicable industry
                experience in working with local startups like "Eatme" to well
                known global brands like "Wurth Louis and Company". Apart from
                that I have build my own software products as a side hustle.
                Hence I have some insight about the business world such as
                managing relationships with clients, founders and entrepreneurs
                and also leading junior developers in project teams.
              </p>
              <p className="intro-details">
                I am really passionate about working with technologies which is
                known as cutting edge. I am eagerly waiting to work with cool
                new techs such as Docker, Kubernetes, Unit testing, GraphQL,
                Micro services and Flutter mobile apps development even though I
                only have tutorial level experience on those. Also I already
                have a remote working experience. I am happy to work as a remote
                developer in any timezone. Feel free to reach me on Whats app,
                Mobile, Email or LinkedIn
              </p>
              <p className="intro-details">Thanks!</p>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
