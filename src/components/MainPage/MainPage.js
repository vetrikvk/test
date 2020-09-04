import React from 'react';
import Home from '../Home/Home';
import './MainPage.scss';
import  Header from '../Header/Header';

let pageIndex;
class MainPage extends React.Component{
    constructor(props){
        super();
        this.state={
            PageValue:'Home',
        }

    }

    PageChange=(value)=>{
        console.log(value)
        let index=value.index
        let page=value.page.name;
        pageIndex=index
       this.setState({PageValue:page})
       if(page =='Reviews')
       {
           document.getElementById('HomeBackground').style.background='url(./Images/Reviews.png)';
           document.getElementById('HomeBackground').style.backgroundRepeat='no-repeat';
        document.getElementById('HomeBackground').style.backgroundSize='100vw 100vh'
       }
       if(page =='Home')
       {
        document.getElementById('HomeBackground').style.background='url(./Images/home_background.jpg)';
        document.getElementById('HomeBackground').style.backgroundRepeat='no-repeat';
        document.getElementById('HomeBackground').style.backgroundSize='100vw 100vh'
        
       }
       if(page =="Services")
        {
        document.getElementById('HomeBackground').style.background='url(./Images/Service.jpg)';
        document.getElementById('HomeBackground').style.backgroundRepeat='no-repeat';
        document.getElementById('HomeBackground').style.backgroundSize='100vw 100vh'

        }       
    }

    
    clik=()=>{
        document.getElementById('HomeBackground').style.background='url(./Images/logo.png)';
        
    }
    render(){
        return(
            <div>
                <div id="HomeBackground">
                    
                    <div>
                    
                   <Header
                   data={{
                    PageChange:this.PageChange.bind(this),
                    PageIndex:pageIndex
                   }}
                   />
                   {this.state.PageValue =='Home' ?
                   <Home />:null}
                    
                    </div>
                </div>
                
            </div>
        );
    }
}

export default MainPage