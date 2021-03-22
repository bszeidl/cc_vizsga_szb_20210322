import React from 'react';
import Box from "@material-ui/core/Box";
import MenuComp from "./MenuComp";
import "../style/style.css";



function HomepageComp() {
  return (    
    <div className="App">

      <div className="headline">
        <h2 className="App-main-title">MEDIA APPEREANCES</h2>
        <Box className="App-icon">  
          <MenuComp />                
        </Box>        
      </div>

      <div className="App-square">
        <h3>Science</h3>
        <h3>Magazine</h3>  
        <h3>11.12.2018</h3>
        <p>Want to master your professional and social networks tp maximize recognition? 
          Want to learn how to build productive team that create lasting impact?
          In this new book, The formula: The universal laws of Success, 
          András-László Barabási translates almost a decade of scholarly research on the science to success into lively...
        </p>
      </div>

    	<a href="{#}" className="readmore">Read more</a>

      <div className="App-square-light">
        <h3>Nature</h3>
        <h3>27.11.2018</h3>
        <p>Want to master your professional and social networks tp maximize recognition? 
          Want to learn how to build productive team that create lasting impact?
          In this new book, The formula: The universal laws of Success, 
          András-László Barabási translates almost a decade of scholarly research on the science to success into lively...
        </p>
      </div>

    	<a href="{#}" className="readmore">Read more</a>
    </div>
  )
}

export default HomepageComp

