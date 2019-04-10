import React ,{ Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton,CardText } from 'react-mdl'

class Project extends Component{
    constructor(props){
        super(props);
        this.state ={activeTab: 0};
    }
       toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/*project 1*/} 
               <Card shadow={5} style={{minWidth: '500', margin: '60px'}}>
                  <CardTitle style={{color:'#fff', height:'176px',background:'url(https://image.slidesharecdn.com/reactpp-140913113910-phpapp02/95/reactjs-code-impact-1-638.jpg?cb=1410608441) center/cover'}}>React Project #1</CardTitle>
                 <CardText>
                   Front-end self driver project on React Js
                 </CardText>
                 <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                 </CardActions>
                 <CardMenu style={{color:'#fff'}}>
                    <IconButton name ="share"/>
                 </CardMenu>

               </Card>

            {/*project 2*/} 
            <Card shadow={5} style={{minWidth: '500' , margin: '60px'}}>
                            <CardTitle style={{color:'#fff', height:'176px',background:'url(https://image.slidesharecdn.com/reactpp-140913113910-phpapp02/95/reactjs-code-impact-1-638.jpg?cb=1410608441) center/cover'}}>React Project #2</CardTitle>
                            <CardText>
                            Front-end self driver project on React Js
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name ="share"/>
                            </CardMenu>

                        </Card>

                        {/*project 3*/} 
                    <Card shadow={5} style={{minWidth: '500' , margin: '60px'}}>
                            <CardTitle style={{color:'#fff', height:'176px',background:'url(https://image.slidesharecdn.com/reactpp-140913113910-phpapp02/95/reactjs-code-impact-1-638.jpg?cb=1410608441) center/cover'}}>React Project #3</CardTitle>
                            <CardText>
                            Front-end self driver project on React Js
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name ="share"/>
                            </CardMenu>

                        </Card>

                </div>
                )
        } else if(this.state.activeTab ===1){
            return(
                <div className="projects-grid">
                {/*project 1*/} 
               <Card shadow={5} style={{minWidth: '500', margin: '60px'}}>
                  <CardTitle style={{color:'#fff', height:'176px',background:'url(https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Python-Programming-Wallpaper_1.jpg) center/cover'}}>python Project #1</CardTitle>
                 <CardText>
                    driver project on Python
                 </CardText>
                 <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                 </CardActions>
                 <CardMenu style={{color:'#fff'}}>
                    <IconButton name ="share"/>
                 </CardMenu>

               </Card>

            {/*project 2*/} 
            <Card shadow={5} style={{minWidth: '500' , margin: '60px'}}>
                            <CardTitle style={{color:'#fff', height:'176px',background:'url(https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Python-Programming-Wallpaper_1.jpg) center/cover'}}>Python Project #2</CardTitle>
                            <CardText>
                             Python projects on mobile apps
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name ="share"/>
                            </CardMenu>

                        </Card>

                        {/*project 3*/} 
                    <Card shadow={5} style={{minWidth: '500' , margin: '60px'}}>
                            <CardTitle style={{color:'#fff', height:'176px',background:'url(https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Python-Programming-Wallpaper_1.jpg) center/cover'}}>Python Project #3</CardTitle>
                            <CardText>
                            Python starter apps
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name ="share"/>
                            </CardMenu>

                        </Card>

                </div>
            )
        }else if(this.state.activeTab ===2){
            return(
                <div className="projects-grid">
                {/*project 1*/} 
               <Card shadow={5} style={{minWidth: '500', margin: '60px'}}>
                  <CardTitle style={{color:'#fff', height:'176px',background:'url(http://icons.iconarchive.com/icons/icons8/windows-8/512/Files-Sql-icon.png) center/cover'}}>python Project #1</CardTitle>
                 <CardText>
                    driver project on SQL
                 </CardText>
                 <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                 </CardActions>
                 <CardMenu style={{color:'#fff'}}>
                    <IconButton name ="share"/>
                 </CardMenu>

               </Card>

            {/*project 2*/} 
            <Card shadow={5} style={{minWidth: '500' , margin: '60px'}}>
                            <CardTitle style={{color:'#fff', height:'176px',background:'url(http://icons.iconarchive.com/icons/icons8/windows-8/512/Files-Sql-icon.png) center/cover'}}>Python Project #2</CardTitle>
                            <CardText>
                             SQL on Web apps
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name ="share"/>
                            </CardMenu>

                        </Card>

                        {/*project 3*/} 
                    <Card shadow={5} style={{minWidth: '500' , margin: '60px'}}>
                            <CardTitle style={{color:'#fff', height:'176px',background:'url(http://icons.iconarchive.com/icons/icons8/windows-8/512/Files-Sql-icon.png) center/cover'}}>Python Project #3</CardTitle>
                            <CardText>
                            SQL starter apps
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name ="share"/>
                            </CardMenu>

                        </Card>

                </div>
            )
        }else if(this.state.activeTab ===3){
            return(
                <div className="projects-grid">
                {/*project 1*/} 
               <Card shadow={5} style={{minWidth: '500', margin: '60px'}}>
                  <CardTitle style={{color:'#fff', height:'176px',background:'url(https://cdn-images-1.medium.com/max/1200/0*3K-v0FaueC28VdDZ.png) center/cover'}}>python Project #1</CardTitle>
                 <CardText>
                    Asp.net project on SQL
                 </CardText>
                 <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                 </CardActions>
                 <CardMenu style={{color:'#fff'}}>
                    <IconButton name ="share"/>
                 </CardMenu>

               </Card>

            {/*project 2*/} 
            <Card shadow={5} style={{minWidth: '500' , margin: '60px'}}>
                            <CardTitle style={{color:'#fff', height:'176px',background:'url(https://cdn-images-1.medium.com/max/1200/0*3K-v0FaueC28VdDZ.png) center/cover'}}>Python Project #2</CardTitle>
                            <CardText>
                             ASP.net on Web apps
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name ="share"/>
                            </CardMenu>

                        </Card>

                        {/*project 3*/} 
                    <Card shadow={5} style={{minWidth: '500' , margin: '60px'}}>
                            <CardTitle style={{color:'#fff', height:'176px',background:'url(https://cdn-images-1.medium.com/max/1200/0*3K-v0FaueC28VdDZ.png) center/cover'}}>Python Project #3</CardTitle>
                            <CardText>
                            ASP.net starter apps
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name ="share"/>
                            </CardMenu>

                        </Card>

                </div>
            )
        }else if(this.state.activeTab ===4){
            return(
                <div className="projects-grid">
                {/*project 1*/} 
               <Card shadow={5} style={{minWidth: '500', margin: '60px'}}>
                  <CardTitle style={{color:'#fff', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center/cover'}}>python Project #1</CardTitle>
                 <CardText>
                    driver project on PHP
                 </CardText>
                 <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                 </CardActions>
                 <CardMenu style={{color:'#fff'}}>
                    <IconButton name ="share"/>
                 </CardMenu>

               </Card>

            {/*project 2*/} 
            <Card shadow={5} style={{minWidth: '500' , margin: '60px'}}>
                            <CardTitle style={{color:'#fff', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center/cover'}}>Python Project #2</CardTitle>
                            <CardText>
                             PHP projects on mobile apps
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name ="share"/>
                            </CardMenu>

                        </Card>

                        {/*project 3*/} 
                    <Card shadow={5} style={{minWidth: '500' , margin: '60px'}}>
                            <CardTitle style={{color:'#fff', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center/cover'}}>Python Project #3</CardTitle>
                            <CardText>
                            PHP starter apps
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name ="share"/>
                            </CardMenu>

                        </Card>

                </div>
            )
        }
       }
      
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(TabId) => this.setState({activeTab: TabId })} ripple>
                    <Tab>REACT</Tab>
                    <Tab>PYTHON</Tab>
                    <Tab>SQL</Tab>
                    <Tab>MVC</Tab>
                    <Tab>PHP</Tab>
                </Tabs>  

               
                    <Grid>
                     <cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                     </cell>
                    </Grid>  
               
            </div>
        )
    }
}

export default Project;