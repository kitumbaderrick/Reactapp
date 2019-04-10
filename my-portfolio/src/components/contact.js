import React ,{ Component } from 'react';
import { Grid, Cell, List,ListItem,ListItemContent } from 'react-mdl';

class Contact extends Component{
    render(){
        return( 
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Kitumba Derrick</h2>
                    <img src="https://cdn4.iconfinder.com/data/icons/bussines-people/572/man-glasses-computer-256.png"
                    alt="avatar" style={{height:'250px'}}/>
                    <p style={{width:'70%', margin:'auto', paddingTop:'1em'}}>Dont be a starnger Just Say hello and contact me hit the subscribe button for more information 
                    on the latest programming languages and open source technologhy on the spot.
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                            (+256)7590-100-24
                             </ListItemContent>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                            <i className="fa fa-fax" aria-hidden="true"/>
                            (+256)7590-100-24
                             </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            kitumbaderro@gmail.com
                             </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                            <i className="fa fa-skype" aria-hidden="true"/>
                            kitumbaderro@gmail.com
                             </ListItemContent>
                    </ListItem>

                    </List>
                    </div>
                    
                </Cell>
            </Grid>
            </div>
    )
    }
}

export default Contact;