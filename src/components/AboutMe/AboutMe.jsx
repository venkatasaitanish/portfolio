import React from "react";
import styles from "./AboutMe.module.css";
import { Grid } from "@material-ui/core";
import imageURL from "../../images/profile-photo.jpg";

function AboutMe() {
    return (
        <div id="about" className={styles.container}>
            <h1 className={styles.heading}>ABOUT ME</h1>
            <Grid container spacing={4} justifyContent="center">
                <Grid xs={12} md={4} lg={3} className={styles.image}>
                    {/* <img className={styles.photograph} src="https://media-exp1.licdn.com/dms/image/C5603AQFqcI11tChi-g/profile-displayphoto-shrink_400_400/0/1633506438188?e=1640822400&v=beta&t=ko_vKynNWRhyQIP9dN7Xmd0UEJsOky63N323yl3Q5sc"  alt="profile-pic" /> */}
                    <img className={styles.photograph} src={imageURL}  alt="profile-pic" />
                </Grid>
                <Grid xs={12} md={8} className={styles.info}>
                    Hi! Myself Jonnadula Venkata Sai Tanish from Nellore, India. <br/>
                    I am a Computer Science Undergradute at National Institute of Technology Raipur. <br/>
                    I am an enthusiastic person with zeal to learn, explore and grow.
                    As of now, I am a Front-end web developer and currently exploring Backend web technologies. <br/>
                    I also do competitive programming on different platforms like <a className={styles.link} href="https://www.codechef.com/users/jvs_tanish" rel="noreferrer" target="_blank">Codechef: jvs_tanish</a>, <a className={styles.link} href="https://codeforces.com/profile/venkatasaitanish" rel="noreferrer" target="_blank">Codeforces: venkatasaitanish</a> and <a className={styles.link} href="https://leetcode.com/venkatasaitanish" rel="noreferrer" target="_blank">Leetcode: venkatasaitanish</a>. <br/>  
                    Apart from this, I love travelling a lot.
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutMe;