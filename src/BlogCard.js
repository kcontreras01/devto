import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogCard extends Component {
	// constructor(props) {
	//   super(props);
	//   this.state = { 
	//   	articles: [];
	//   	hello: 'hello'
	//   };
	// }

	// componendDidMount() {
	// 	fetch('https://dev.to/api/articles')
 //        .then(res => res.json())
 //        .then((data) => { console.log('data ', data)
 //          this.setState({ articles: data })
 //        })
 //        .catch(console.log)
 //  }

	render() {
		return (
		<section className="primary-sticky-nav">
      <a className="primary-sticky-nav-element" href="/koduki/how-do-you-write-production-code-for-unittest-5f30">
        
      	<div className="article-header-container">
      		<img src="https://vignette.wikia.nocookie.net/micronations/images/0/0e/DarkAllianceSkull_90x90.png/revision/latest?cb=20110821035701" alt="#" className="primary-sticky-nav-profile-image" />
        
	        <div className="article-header">
	        	<span className="article-title">How do you write &quot;Production Code&quot; for UnitTest?</span>
	        	<h4 className="article-author">Subtitle goes here yes it does</h4>
		        <div className="primary-sticky-nav-element-details">
		            <span>#testing </span>
		            <span>#java </span>
		            <span>#beginners </span>
		        </div>

	        </div>	
      	</div>

      	<div>
      		<div className="primary-sticky-nav-author-follow article-footer">
      			<div className="article-icon-container">
      				<FontAwesomeIcon icon="heart" />
      				<span style={{margin: "3px"}}>5</span>
      			</div>

      			<div className="article-icon-container">
      				<FontAwesomeIcon icon="comments" />
      				<span style={{margin: "3px"}}>12</span>
      			</div>

      			<div className="article-icon-container">
      				<span style={{margin: "3px"}}>3 minute read</span>
				      <button className="save-button"> SAVE </button>
      			</div>
      		
				    </div>
      	</div>
        
        
        
      </a>
		</section>
      
		)
	}
}

export default BlogCard;