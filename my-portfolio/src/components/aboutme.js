import React ,{ Component } from 'react';
import { Grid, Cell, List,ListItem,ListItemContent } from 'react-mdl';

class About extends Component{
    render(){
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={12}>
                    <h2>Kitumba Derrick</h2>
                    <img src="https://cdn4.iconfinder.com/data/icons/bussines-people/572/man-glasses-computer-256.png"
                    alt="avatar" style={{height:'250px'}}/>
                    <p style={{width:'70%', margin:'auto', paddingTop:'1em'}}>Dont be a starnger Just Say hello and contact me hit the subscribe button for more information 
                    on the latest programming languages and open source technologhy on the spot.
                    </p>
                </Cell>
            
            </Grid>
            </div>
        )
    }
}
export default About;