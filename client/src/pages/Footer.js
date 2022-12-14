import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
padding: 5px 15px;
border-radius: 5px;
outline: 0;
text-transform: uppercase;
margin: 5px;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray;
`

function Footer() {
    return (
        <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <Button disabled>Request</Button> 
            <p>
              Romans 5:8
            </p>
            <a href="https://buy.stripe.com/test_00g7tF3YzdABblucMM">
            <Button >Donate</Button> 
            </a>
          </p>
        </div>
      </footer>  
    );
}


export default Footer;