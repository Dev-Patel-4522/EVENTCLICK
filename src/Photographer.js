import React from 'react'
import { makeStyles } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import o1 from "./Images/o1.jpg";
import o2 from "./Images/o2.jpg";
import o3 from "./Images/o3.jpg";
import o4 from "./Images/o4.jpg";
import o5 from "./Images/o5.jpg";
import o6 from "./Images/o6.jpg";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1100,
  },
  images: {
    width: 128,
    height: 128,
  },
   
}));

function Photographer() {
  const classes = useStyles();
  return (
    <div>
      <img
        src="https://media.istockphoto.com/id/519622494/photo/capturing-a-beautiful-view.jpg?s=612x612&w=0&k=20&c=kyrDAU3swzyDn9Uyi5EfQal2Er-teQ1NOVq3rRtGgoY="
        style={{ width: "2000px", height: "900px" }}
        alt="/"
      />
      <div className={classes.root}>
        <br />
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonBase className={classes.images}>
                <img 
                src={o1} 
                alt="/" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs style={{ marginLeft: "-200px" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    Harsh Patel
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ paddingBottom: "30px", marginTop: "25px" }}
                  >
                    Area:Ahmedabad
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: "-15px" }}>
                    Exprince : 4 year
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ marginRight: "-400px", marginTop: "-55px" }}
                  >
                    Category:Wedding
                  </Typography>
                  <Typography variant="body2" style={{ marginRight: "-450px" }}>
                    Event
                  </Typography>
                  <Typography variant="body2" style={{ marginRight: "-500px" }}>
                    Birthday-party
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Rating</Typography>

                {<Rater style={{ fontSize: "30px" }} total={5} rating={0} />}
                <br></br>
                <KeyboardDoubleArrowRightIcon />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br />

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonBase className={classes.images}>
                <img 
                src={o2} 
                alt="/" 
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs style={{ marginLeft: "-200px" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    Meet Patel
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ paddingBottom: "30px", marginTop: "25px" }}
                  >
                    Area:Ahmedabad
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: "-15px" }}>
                    Exprince : 2 year
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ marginRight: "-400px", marginTop: "-55px" }}
                  >
                    Category:Wedding
                  </Typography>
                  <Typography variant="body2" style={{ marginRight: "-450px" }}>
                    Event
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Rating</Typography>

                {<Rater style={{ fontSize: "30px" }} total={5} rating={0} />}
                <br></br>
                <KeyboardDoubleArrowRightIcon />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br />

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonBase className={classes.images}>
                <img 
                src={o3} 
                alt="/" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs style={{ marginLeft: "-200px" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    Raj Patel
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ paddingBottom: "30px", marginTop: "25px" }}
                  >
                    Area:Ahmedabad
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: "-15px" }}>
                    Exprince : 5 year
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ marginRight: "-400px", marginTop: "-55px" }}
                  >
                    Category:Wedding
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Rating</Typography>

                {<Rater style={{ fontSize: "30px" }} total={5} rating={0} />}
                <br></br>
                <KeyboardDoubleArrowRightIcon />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br />

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonBase className={classes.images}>
                <img 
                src={o4} 
                alt="/" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs style={{ marginLeft: "-200px" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    Tarun Maheshwari
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ paddingBottom: "30px", marginTop: "25px" }}
                  >
                    Area:Ahmedabad
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: "-15px" }}>
                    Exprince : 4 year
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ marginRight: "-400px", marginTop: "-55px" }}
                  >
                    Category:Wedding
                  </Typography>
                  <Typography variant="body2" style={{ marginRight: "-450px" }}>
                    Event
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Rating</Typography>

                {<Rater style={{ fontSize: "30px" }} total={5} rating={0} />}
                <br></br>
                <KeyboardDoubleArrowRightIcon />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br />

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonBase className={classes.images}>
                <img 
                src={o5} 
                alt="/" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs style={{ marginLeft: "-200px" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    Rutul Patel
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ paddingBottom: "30px", marginTop: "25px" }}
                  >
                    Area:Ahmedabad
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: "-15px" }}>
                    Exprince : 4 year
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ marginRight: "-400px", marginTop: "-55px" }}
                  >
                    Category:Wedding
                  </Typography>
                  <Typography variant="body2" style={{ marginRight: "-500px" }}>
                    Birthday-party
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Rating</Typography>

                {<Rater style={{ fontSize: "30px" }} total={5} rating={0} />}
                <br></br>
                <KeyboardDoubleArrowRightIcon />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br />

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonBase className={classes.images}>
                <img 
                src={o6} 
                alt="/" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs style={{ marginLeft: "-200px" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    Dev Patel
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ paddingBottom: "30px", marginTop: "25px" }}
                  >
                    Area:Ahmedabad
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: "-15px" }}>
                    Exprince : 4 year
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ marginRight: "-400px", marginTop: "-55px" }}
                  >
                    Category:Wedding
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Rating</Typography>

                {<Rater style={{ fontSize: "30px" }} total={5} rating={0} />}
                <br></br>
                <KeyboardDoubleArrowRightIcon />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br />

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Photographer;