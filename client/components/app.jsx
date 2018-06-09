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
      categories: ['Sandwiches', 'Salad', 'American (New)'],
    }
  }
  render() {
    const nav_bar_icons = ['fas fa-utensils', 'fas fa-glass-martini', 'fas fa-screwdriver']

    return (
      <div>
        <css.header.h>

          <css.header.h_content>

            <css.header_spacing>
              <css.header.logo>
              </css.header.logo>
            </css.header_spacing>

            <css.header_spacing>
              <css.header.search type="text" placeholder="tacos, cheap dinner, Max's">
              </css.header.search>
            </css.header_spacing>

            <css.header.search type="text" placeholder="Los Angeles, CA">
            </css.header.search>

            <css.header.search_button>
              <span> <i className="fas fa-search"></i> </span>
            </css.header.search_button>

            <css.header.divForSignup>
              <css.header.signup_button href="/">
                Sign up
             </css.header.signup_button>
            </css.header.divForSignup>

          </css.header.h_content>

        </css.header.h>

        <css.header.nav>

          {/* Align nav bar with yelp logo */}
          <css.header.nav_content_header>

            {/* Container for all nav links */}
            <css.header.nav_contents>

              <css.header.nav_link_div>
                <div style={{ display: 'inline-block' }}>
                  {this.state.static_nav_links.map((value, index) => (
                    <css.header.nav_link key={index} href="/">
                      <i className={nav_bar_icons[index]}></i> {value}
                    </css.header.nav_link>
                  ))}
                </div>

                <div id="beefore"> &#183; </div>

                <div style={{ display: 'inline-block' }}>
                  {this.state.static_nav_links_2.map((value, index) => (
                    <css.header.nav_link key={index} href="/">
                      {value}
                    </css.header.nav_link>
                  ))}
                </div>
              </css.header.nav_link_div>

              <css.header.nav_login_div>
                <css.header.nav_login href="/">
                  Login
                </css.header.nav_login>
              </css.header.nav_login_div>

            </css.header.nav_contents>

          </css.header.nav_content_header>

        </css.header.nav>

        {/* Container for restaurant header */}
        <css.rest_details.h>

          <css.rest_details.left_h>

            {/* Container to hold title and claim status */}
            <css.rest_details.title_claim_div>
              <h1 style={{ fontSize: '38px', fontWeight: 'bold', display: 'inline', paddingRight: '10px' }}>
                Urbane Cafe
              </h1>

              <div style={{ display: 'inline-block' }}>
                <span style={{ width: '18px', height: '18px', paddingRight: '10px'}}>
                  <i className="far fa-check-circle"></i>
                </span>
                Claimed
              </div>
            </css.rest_details.title_claim_div>
            
            {/* Container to hold stars and reviews count */}
            <css.rest_details.ratings_div>
              {/* <div style={{width: '215px', height: '24px'}}> */}
                <css.rest_details.rating_stars style={{backgroundPosition: '0 -192px'}}>
                </css.rest_details.rating_stars>
                <span style={{color: '#666'}}> 46 Reviews </span>
              {/* </div> */}
            </css.rest_details.ratings_div>

            <css.rest_details.category_div>
              <span style={{letterSpacing: '1px'}}> $$   &#183; </span>
              {this.state.categories.map((value, index) => (
                <css.rest_details.category href = "/"> {value}, </css.rest_details.category>
              ))}
            </css.rest_details.category_div>

          </css.rest_details.left_h>

        </css.rest_details.h>


      </div> // main div components
    )
  }
}

export default App;