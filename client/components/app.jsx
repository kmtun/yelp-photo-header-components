import React from 'react';
import { Component } from 'react';
import css from './style.jsx';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      static_nav_links: ['Restaurants', 'Nightlife', 'Home Services'],
      static_nav_links_2: ['Write a review', 'Events', 'Talk', 'Collections'],
    }
  }
  render() {
    const nav_bar_icons = ['fas fa-utensils', 'fas fa-glass-martini', 'fas fa-screwdriver']
    return (
      <div style = {{backgroundSize: '1135px auto, 100%'}}>
        <css.header.h>
          <css.header.h_content>
            
            <css.header.logo>
            </css.header.logo>

            <css.header.search type="text" placeholder="tacos, cheap dinner, Max's">
            </css.header.search>

            <css.header.search type="text" placeholder="Los Angeles, CA">
            </css.header.search>

            <css.header.search_button primary>
              <span> <i className="fas fa-search"></i> </span>
            </css.header.search_button>
        

          </css.header.h_content>
        </css.header.h>

        <css.header.nav>
          <css.header_padding>
            <css.header.nav_content_header>
              <css.header.nav_content>
                <div style={{display: 'inline-block'}}>
                {this.state.static_nav_links.map((value, index) => (
                  <css.header.nav_link key={index} href="/">
                    <i className={nav_bar_icons[index]}></i> {value}
                  </css.header.nav_link>
                ))}
                </div>

                <div id="beefore"> &#183; </div> 

                <div style={{display: 'inline-block'}}>
                {this.state.static_nav_links_2.map((value, index) => (
                  <css.header.nav_link2 key={index} href="/">
                  {value}
                  </css.header.nav_link2>
                ))}
                </div>


              </css.header.nav_content>
            </css.header.nav_content_header>
          </css.header_padding>
        </css.header.nav>

      </div> // main div components
    )
  }
}

export default App;