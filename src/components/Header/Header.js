import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.scss';
import { sortedIndexOf } from 'lodash';


let page=[{name:'Home'},{name:'Reviews'},{name:'Services'},{name:'FAQs'},{name:'Contact'}]

class Header extends React.Component{
    constructor(props){
        super();
        this.state={
            colorChange:0,
            flag:true,
        }

    }
    
    static getDerivedStateFromProps(props, state) {
        return {colorChange: props.data.PageIndex,
            flag:false
        };
      }
    
    
render(){
    return(
        <div>
            <Grid container style={{paddingTop:"4vh",paddingBottom:"4vh"}} >
                <Grid item xs={2} sm={2} md={2} lg={2}>          
                
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>          
                <img src='./Images/logo.png' className="headerLogo" />
                </Grid>
                <Grid item xs={5} sm={5} md={5} lg={5}> 
                {page.map((page, index) =>(
                    
                    <span 
                    className= {this.state.colorChange===index ? "headermenuscolor":"headermenus"}
                                                                                            
                    onClick={()=>{this.props.data.PageChange({page,index})}}
                    >{page.name}</span>   ))}     
                        <span className="headerContact">
                                    <img src='./Images/phone.png' className="headerphone"/>
                                    <span>1234-567-890</span>
                        </span>     
                            
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1}>          
                
                </Grid>
            </Grid>
            
        </div>
    );
}

}

export default Header