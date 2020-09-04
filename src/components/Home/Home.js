import React from 'react';
import './Home.scss';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class Home extends React.Component{
    constructor(props){
        super();
        this.state={
            Name:'',
            Zip:'',
            Email:'',
            Mobile:''
        }
    }
    
    handleChange = (event) => {
          
        event.preventDefault();
        
            this.setState({
                [event.target.name]: event.target.value
            });}

            handleSubmit=()=>{
                console.log(this.state.Name)
                let params={
                    Name:this.state.Name,
                    zipcode:this.state.Zip,
                    email:this.state.Email,
                    Mobile:this.state.Mobile

                }
                axios.post(`http://localhost:8080/create`, params)
  .then(res => {
    console.log(res);
    
    
  })
            }
    render(){
        return(
            <div>
                <Grid container>
                <Grid item xs={2} sm={2} md={2} lg={2}>          
                
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>    
                <div className="homeForm">                                
                    <div className="InnerFormDesign">
                        <div>
                            
                            
                            
                            <div className='homeform-wrapper'>
                                <div>
                                    <div className='Hometxtbox'>
                                        
                                        <label  className="homeformtxt">Lorem Ipsum Lorem  </label>
                                        <label  className="homeFormtxt1">Lorem Ipsum Lorem  </label>
                                        
                                        <input type='text' name="Name"
                                        onChange={this.handleChange}
                                        //value={this.state.Name} 
                                        placeholder="Your Name"
                                        className="homeinputbox"                            
                                        />  
                                        <input type='text' name="Zip" 
                                        onChange={this.handleChange}
                                        placeholder="Zip Code"
                                        //value={this.state.Zip} 
                                        className="homeinputbox"                            
                                        />  
                                        <input type='text' name="Email" 
                                        onChange={this.handleChange}
                                        //value={this.state.Email}
                                        placeholder="Email Address"
                                        className="homeinputbox"                            
                                        />  
                                        <input type='text' name="Mobile" 
                                        onChange={this.handleChange}
                                        //value={this.state.Mobile}
                                        placeholder="Mobile No"
                                        className="homeinputbox"                            
                                        />  

                                        <button  
                                        onClick={this.handleSubmit}
                                        className="homebutton"                            
                                        > 
                                        Book
                                        </button>   
                                                                                          
                                    </div>
                                
                                    
                                </div>
                            </div>                                                        
                        </div>
                    </div>                
                </div>
                </Grid>

                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <div className="Homecontent">
                        <div>
                            <p className="HomeContenthead">Book your professional</p>
                            <p className="HomeContenthead">Lorem Ipsum Lorem</p>
                        </div>
                        <div></div>
                        <div style={{paddingTop:"5vh"}}>
                    <div>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={2} lg={2} >
                            <img src='./Images/calendar.png' className="homeimg" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} lg={10}>
                            <label className="homecontentlisthead">1.Book A Professional</label>
                            
                            <p  className="homesubcontent">Lorem Ipsum Lorem Ipsum
                             Lorem Ipsum Lorem Ipsum
                             Lorem Ipsum Lorem IpsumLorem Ipsum 
                             
                             </p>
                            
                            
                            </Grid>
                            
                        </Grid>
                    
                    
                    
                    </div>
                    <div>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={2} lg={2} >
                            <img src='./Images/lock.png' className="homeimg1" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} lg={10}>
                            <label className="homecontentlisthead">2.Confirm booking</label>
                            
                            <p  className="homesubcontent">Lorem Ipsum Lorem Ipsum
                             Lorem Ipsum Lorem Ipsum
                             Lorem Ipsum Lorem IpsumLorem Ipsum 
                             
                             </p>                                                        
                            </Grid>
                            
                        </Grid>
                    
                    
                    
                    </div>
                    <div>
                    <Grid container>
                            <Grid item xs={2} sm={2} md={2} lg={2} >
                            <img src='./Images/home.png' className="homeimg1" />
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} lg={10}>
                            <label className="homecontentlisthead">3.We'll do it for</label>
                            
                            <p  className="homesubcontent">Lorem Ipsum Lorem Ipsum
                             Lorem Ipsum Lorem Ipsum
                             Lorem Ipsum Lorem IpsumLorem Ipsum 
                             
                             </p>                                                        
                            </Grid>
                            
                        </Grid>
                    </div>
                    </div>
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                       
                </Grid>
                </Grid>
                
            </div>
        );
    }
}

export default Home