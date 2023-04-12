import React from 'react'
import { makeStyles } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import o1 from './Images/o1.jpg';
import o2 from './Images/o2.jpg';
import o3 from './Images/o3.jpg';
import o4 from './Images/o4.jpg';
import o5 from './Images/o5.jpg';
import j1 from './Images/j1.jpg';
import j2 from './Images/j2.jpg';
import j3 from './Images/j3.jpg';
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
  
  export default function Photographer1() {
    const classes = useStyles();
    return (
      <div>
        <img   src="https://media.istockphoto.com/id/519622494/photo/capturing-a-beautiful-view.jpg?s=612x612&w=0&k=20&c=kyrDAU3swzyDn9Uyi5EfQal2Er-teQ1NOVq3rRtGgoY="  style={{width:"2000px",height:"900px"}} alt="/" />
        <div className={classes.root}><br />
        <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <ButtonBase className={classes.images}>
              <img src={o1} alt="/" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs style={{marginLeft:"-200px"}}>
                <Typography gutterBottom variant="subtitle1" style={{fontWeight:"bold"}}>
                smit Patel 
                </Typography>
                <Typography variant="body2" style={{paddingBottom:"30px",marginTop:"25px"}} >
                  Area:Ahmedabad
                </Typography>
                <Typography variant="body2" style={{marginTop:"-15px"}} >
                  Exprince : 4 year
                </Typography>
                <Typography variant="body2" style={{marginRight:"-400px",marginTop:"-55px",}}  >
                  Category:Wedding<br/>
                </Typography>
                <Typography variant="body2" style={{marginRight:"-450px"}}>
                  Event
                </Typography>
              </Grid>
              
              
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Rating</Typography>
              
              {(<Rater style={{fontSize:"30px"}} total={5} rating={0} />)
} <br/><br/>
      
            < KeyboardDoubleArrowRightIcon/>    
      
            </Grid>
          </Grid>
        </Grid>
       
      </Paper><br />

      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <ButtonBase className={classes.images}>
              <img src={o2}  alt="/"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs style={{marginLeft:"-200px"}}>
                <Typography gutterBottom variant="subtitle1" style={{fontWeight:"bold"}}>
                madhur purohit 
                </Typography>
                <Typography variant="body2" style={{paddingBottom:"30px",marginTop:"25px"}} >
                  Area:Rajkot
                </Typography>
                <Typography variant="body2" style={{marginTop:"-15px"}} >
                  Exprince : 3 year
                </Typography>
                <Typography variant="body2" style={{marginRight:"-400px",marginTop:"-55px"}}  >
                Category:Wedding<br/>
                </Typography>
                <Typography variant="body2" style={{marginRight:"-450px"}}>
                  Event
                </Typography>
              </Grid>
              
                
              
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Rating</Typography>
              
              
              {(<Rater style={{fontSize:"30px"}} total={5} rating={0} />)
}<br/><br/>

          < KeyboardDoubleArrowRightIcon/>
            

            </Grid>
          </Grid>
        </Grid>
      </Paper><br />

      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <ButtonBase className={classes.images}>
              <img src={o3} alt="/0"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs style={{marginLeft:"-200px"}}>
                <Typography gutterBottom variant="subtitle1" style={{fontWeight:"bold"}}>
                jeet Patel 
                </Typography>
                <Typography variant="body2" style={{paddingBottom:"30px",marginTop:"25px"}} >
                  Area:Surat
                </Typography>
                <Typography variant="body2" style={{marginTop:"-15px"}} >
                  Exprince : 2 year
                </Typography>
                <Typography variant="body2" style={{marginRight:"-400px",marginTop:"-55px"}}  >
                Category:Wedding<br/>
                </Typography>
              </Grid>
              
              </Grid>
            <Grid item>
              <Typography variant="subtitle1">Rating</Typography>
              
              
              
              {(<Rater style={{fontSize:"30px"}} total={5} rating={0} />)
}<br/><br/>

                < KeyboardDoubleArrowRightIcon/>

            </Grid>
          </Grid>
        </Grid>
      </Paper><br />

      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <ButtonBase className={classes.images}>
              <img src={o4} alt="/"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs style={{marginLeft:"-200px"}}>
                <Typography gutterBottom variant="subtitle1" style={{fontWeight:"bold"}}>
                Ayush Patel 
                </Typography>
                <Typography variant="body2" style={{paddingBottom:"30px",marginTop:"25px"}} >
                  Area:Patan
                </Typography>
                <Typography variant="body2" style={{marginTop:"-15px"}} >
                  Exprince : 1 year
                </Typography>
                <Typography variant="body2" style={{marginRight:"-400px",marginTop:"-55px"}}  >
                Category:Wedding
                </Typography>
              </Grid>
              
                
              
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Rating</Typography>
              
              
              
              {(<Rater style={{fontSize:"30px"}} total={5} rating={0} />)
}<br/><br/>

                      < KeyboardDoubleArrowRightIcon/>

            </Grid>
          </Grid>
        </Grid>
      </Paper><br />

      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <ButtonBase className={classes.images}>
              <img src={o5} alt="/"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs style={{marginLeft:"-200px"}}>
                <Typography gutterBottom variant="subtitle1" style={{fontWeight:"bold"}}>
                Nisarg Trivedi 
                </Typography>
                <Typography variant="body2" style={{paddingBottom:"30px",marginTop:"25px"}} >
                  Area:valsad
                </Typography>
                <Typography variant="body2" style={{marginTop:"-15px"}} >
                  Exprince : 1.7 year
                </Typography>
                <Typography variant="body2" style={{marginRight:"-400px",marginTop:"-55px"}}  >
                Category:Wedding<br/>
                </Typography>
                <Typography variant="body2" style={{marginRight:"-450px"}}>
                  Event
                </Typography>
                <Typography variant="body2" style={{marginRight:"-500px"}}>
                  Birthday-party
                </Typography>
              </Grid>
              
                
              
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Rating</Typography>
              
              
              {(<Rater style={{fontSize:"30px"}} total={5} rating={0} />)
}<br/><br/>

                  < KeyboardDoubleArrowRightIcon/>
        

            </Grid>
          </Grid>
        </Grid>
      </Paper><br />

      <section class="text-black-600 body-font ">
  <div class=" items-center container px-9 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 ml-96">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0 ">
        <h1 style={{textAlign:"center",fontSize:"xxx-large",color:"skyblue"}}>View Other Photographer</h1>
        {/* <div class="h-1 w-20 bg-indigo-500 rounded"></div>  */}
       </div>
      
    </div>
    <div class="sm:gap-44 items-center flex flex-wrap -m-4 ">
    
    

      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg round shadow-lg hover:shadow-indigo-600 hover:shadow-md">
          <img class="h-60 rounded w-full object-cover object-center mb-6 " src={j1} alt="content" />
          <h1 class="text-2xl m-16 ">Fashoin</h1>
          
          
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg round shadow-lg hover:shadow-indigo-600 hover:shadow-md">
          <img class="h-60 rounded w-full object-cover object-center mb-6" src={j2} alt="content"/>
          <h1 class="text-2xl  m-16">Pre-Wedding</h1>
          
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg round shadow-lg hover:shadow-indigo-600 hover:shadow-md">
          <img class="h-60 rounded w-full object-cover object-center mb-6" src={j3} alt="content"/>
          <h1 class="text-2xl m-16 from-white">Party</h1>
          
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
        </div>
    )  
}
  