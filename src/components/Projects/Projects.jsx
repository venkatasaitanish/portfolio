import React from "react";
import ProjectList from "./ProjectsList";
import styles from "./Projects.module.css";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
    Aos.init({
        delay: 100,
        duration: 2000
    });

    return (
        <div id="projects" className={styles.container}>
            <h1 className={styles.heading}>PROJECTS</h1>
            <Grid container spacing={4} justifyContent="center">
                {ProjectList.map((project) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} spacing={6} className={styles.grid}>
                            <Card className={styles.card} data-aos="zoom-out">
                                <CardContent>
                                    <Typography className={styles.title} variant="h5" gutterBottom>{project.title}</Typography>
                                    <Typography className={styles.subtitle} variant="body1" gutterBottom>{project.used}</Typography>
                                    <Typography variant="body1" gutterBottom className={styles.description}>{project.description}</Typography>
                                    <div className={styles.iconSet}>
                                        <a className={styles.icon} rel="noreferrer" href={project.webUrl} target="_blank" ><i className="fas fa-globe fa-2x"></i> </a>
                                        <a className={styles.icon} rel="noreferrer" href={project.githubRepo} target="_blank" ><i class="fab fa-github fa-2x"></i></a>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default Projects;