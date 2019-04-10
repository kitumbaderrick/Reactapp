import React , { Component } from 'react';
import {Grid,Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return(
            <div className="resume-body">
              <Grid className="resume-grid">

             <Cell col={4}>
                <div style={{textAlign:'center'}}>
                     <img src="https://cdn0.iconfinder.com/data/icons/software-engineering-and-video-gaming/512/77_hacker_user_gammer_programmer-256.png"
                    alt="avatar" style={{height:'300px'}}/> 
                 </div>
                 <h2 style={{paddingTop:'1em'}}>Kitumba Derrick</h2>
                 <h4 style={{color:'grey'}}>Programmer</h4>
                 <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                 <p>Go Hard or Go Home</p>
                 <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                 <h5>Kasangati-Gayaza road </h5>
                 <h5>Phone</h5>
                 <p>(+256)759-0100-24</p>
                 <h5>Email</h5>
                 <p>kitumbaderro1@gmail.com</p>
                 <h5>Website</h5>
                 <p>mysite.com</p>
                 <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                </Cell>  
                
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                     <Education 
                     startYear={2012}
                     endYear={2006}
                     schoolName="My University"
                     schoolDescription="Just bring it home"
                     />

                     <Education 
                     startYear={2017}
                     endYear={2009}
                     schoolName="My University"
                     schoolDescription="Just bring it home"
                     />
                     <hr style={{borderTop:'3p solid #e22947'}}/>

                     <h2>Experience</h2>
                     <Experience 
                     startYear={2017}
                     endYear="to date"
                     jobName="programmer"
                     jobDescription="fixbugs"
                     />

                     <hr style={{borderTop:'3p solid #e22947'}}/>
                     <h2>Skills</h2>
                     <Skills
                       skill="Javascript"
                       progress={100}
                     />

                     <Skills
                       skill="HTML/CSS"
                       progress={80}
                     />

                     <Skills
                       skill="React"
                       progress={60}
                     />
                     <Skills
                       skill="SQL"
                       progress={70}
                     />
                </Cell> 

              </Grid>
               
            </div>
        )
    }
}

export default Resume;