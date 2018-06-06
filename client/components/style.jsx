import React from 'react';
import styled from 'styled-components';

const headerDiv = styled.div`
  vertical-align: baseline;
`;

const header_padding = headerDiv.extend`
  // margin-left: -18px;
  // margin-right: -18px;
  // border-collapse: separate;
  // border-spacing: 18px 0;
`;


const header = {
  h: styled.div`
    padding: 12px 0;
    background: #D3231C url(https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/15ee41b0c3b2/assets/img/structural/header_stars@2x.png) no-repeat center;
    background-size: 1135px auto, 100%;
  `,

  //wrapper for logo and search boxes
  h_content: header_padding.extend`
    width: 960px;
    margin: 0 auto;
    padding: 0 15px;

    display: table;
    table-layout: auto;
  `,
  logo: headerDiv.extend`
    background-image: url(https://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_design_web/48792dd29811/assets/img/logos_desktop/default.png);
    background-size: 80px 40px;
    width: 80px;
    height: 40px; 
    display: table-cell;
  `,
  
  search: styled.input`
    display: table-cell;
    width: 285px;
    padding: 0 30px;
    border-radius: 4px 0 0 4px;
    vertical-align: middle;
    height: 36px;
    line-height: 20px;
  `,

  search_button: styled.button`
    display: table-cell;  
    width: 54px;
    height: 36px;
    border: none:
    border-radius: 4px 0 0 4px;
    vertical-align: middle;
    background: #bd1f1f;
    line-height: 36px;
    font-size:100%;
  `,
  //wrapper for whole nav bar
  nav: styled.div` 
    background: #bd1f1f;
    min-width: 1080px;
  `,
  
  //Need this in order to allign with yelp logo
  nav_content_header: styled.div`
    width: 960px;
    margin: 0 auto;
    padding: 0 15px;
  `,

  //nav bar to hold all a href links
  nav_content: styled.nav`
    margin-left: -12px;
    whitespace: nowrap !important;
  `,
  nav_link: styled.a`
    color: #fff;
    display: inline;
    padding: 3px 15px;
    // font-family: monospace;
    font-size: 15px;
    font-weight: bold;
    line-height: 21px;
    border-radius: 3px;
    text-decoration: none;
    &:hover{
      background: rgba(51,51,51,0.3);
      }
  `,
  nav_link2: styled.a`
    color: #fff;
    display: inline;
    padding: 3px 15px;
    // font-family: monospace;
    font-size: 15px;
    font-weight: bold;
    line-height: 21px;
    border-radius: 3px;
    text-decoration: none;
    &:hover{
      background: rgba(51,51,51,0.3);
      }
  `,
}

module.exports = {
  header, header_padding
};