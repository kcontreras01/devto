import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OnPageNav extends Component {
	render() {
		return (
			<div className="on-page-nav-controls" id="on-page-nav-controls">
        {/*<div className="on-page-nav-label">
          <div className="wide-nav-links">
            <a className="nav-chronofiter-link selected" href="/">
              FEED
            </a>
            <span className="separator"></span>
            <a className="nav-chronofiter-link " href="/top/week">
              WEEK
            </a>
            <a className="nav-chronofiter-link " href="/top/month">
              MONTH
            </a>
            <a className="nav-chronofiter-link " href="/top/year">
              YEAR
            </a>
            <a className="nav-chronofiter-link " href="/top/infinity">
              INFINITY
            </a>
            <span className="separator"></span>
            <a className="nav-chronofiter-link " href="/latest">
              LATEST
            </a>
          </div> 
          <div className="narrow-nav-select" aria-label="feed-filter-select">
              <button type="button" id="narrow-feed-butt">&lt;MY DEV FEED&gt;</button>
          </div>
        </div>*/}
        <button type="button" className="on-page-nav-butt on-page-nav-butt-left" id="on-page-nav-butt-left" aria-label="nav-button-left">
          <FontAwesomeIcon icon="layer-group" alt="left-sidebar-nav"/>
        </button>

        <div className="narrow-nav-select" aria-label="feed-filter-select">
          &lt;MY DEV FEED&gt;
        </div>

        <button type="button" className="on-page-nav-butt on-page-nav-butt-right" id="on-page-nav-butt-right" aria-label="nav-button-right">
          <FontAwesomeIcon icon="bolt" alt="right-sidebar-nav"/>
        </button>
      </div>
			)
	}
}

export default OnPageNav;