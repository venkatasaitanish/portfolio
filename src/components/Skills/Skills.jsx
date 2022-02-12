import React from "react";
import styles from "./Skills.module.css";
import {Grid} from "@material-ui/core";
import Tilt from "react-parallax-tilt";
import SkillList from "./SkillsList";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
    Aos.init({
        delay: 100,
        duration: 3000
    })

    return (
        <div id="skills" className={styles.container}>
            <h1 className={styles.heading}>SKILLS</h1>
            <Grid container spacing={6} justifyContent="center">
                {SkillList.map((skill) => {
                    return(
                        <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="flip-up">
                            <Tilt className={styles.skillBox}>
                                <div>{skill.icon}</div>
                                <div className={styles.skillName}>{skill.name}</div>
                            </Tilt>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default Skills;