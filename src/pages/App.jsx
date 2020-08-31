import React from 'react';



import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';


import NavBar from '../components/NavBar';

const useStyles = makeStyles({
  header: {
    height: '80vh',
    margin: '60px auto'
  },
  imgs: {
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '95%',
    height: '95%',
    position: 'static',
    border: '4px solid black',
    '&:hover': {
      border: '4px solid blue'
    }
  },
  gri: {
    display: 'flex',
    justifyContent: 'center'
  }
});


const Diplomes = [{
  title: ' C Sharp',
  url: 'https://www.sololearn.com/Certificate/1080-18089038/pdf/'
},
{
  title: 'JavaScript',
  url: 'https://www.sololearn.com/Certificate/1024-18089038/pdf/'
},
{
  title: 'HTML',
  url: 'https://www.sololearn.com/Certificate/1014-18089038/pdf/'
},
{
  title: 'CSS',
  url: 'https://www.sololearn.com/Certificate/1023-18089038/pdf/'
},
{
  title: 'PHP',
  url: 'https://www.sololearn.com/Certificate/1059-18089038/pdf/'
},
{
  title: 'jQuery',
  url: 'https://www.sololearn.com/Certificate/1082-18089038/pdf/'
},
{
  title: 'SQL',
  url: 'https://www.sololearn.com/Certificate/1060-18089038/pdf/'
},
{
  title: 'React + Redux',
  url: 'https://www.sololearn.com/Certificate/1097-18089038/pdf/'
}
]

export default function App() {
  const classes = useStyles();
  return (
    <div>


      <Container >
        <NavBar />
        <div className={classes.header}>
       
          <Grid
            container
            spacing={4}
            direction="row"
          >
            {

              Diplomes.map((d, i) => (
                <Grid item key={i} xs={12} sm={6} lg={4} xl={3} className={classes.gri}>
                  <a href={d.url}>
                    <img src={require(`../assets/img/${i + 1}.JPG`)} className={classes.imgs} alt="" title={d.title} />
                  </a>

                </Grid>
              ))

            }
          </Grid>


        </div>



      </Container>

    </div>
  );
}
