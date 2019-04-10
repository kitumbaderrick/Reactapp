import React , { Component } from 'react'
import { Grid , Cell} from 'react-mdl'

class Landingpage extends Component{
    render(){
        return(
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid"> 
                    <Cell col={12}> 
                        <img src="https://www.shareicon.net/download/2015/12/14/207820_face_300x300.png" 
                        alt="avatar"
                        className="avatar-img"
                        />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Boostrap | JavaScript | React | React Native | NodeJS | Express | SQLServer | PHP | MVC</p>
                        <div className="social-links">

                            {/*Linkeind*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>

                            {/*github*/}
                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>

                            {/*free-code-camp*/}
                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                            </a>

                             {/*youtube*/}
                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-youtube-square"  aria-hidden="true"/>
                            </a>

                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landingpage;