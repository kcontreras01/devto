import React , { Component } from 'react';

class MainArticleCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: []
        }

        this.getMainArticle = this.getMainArticle.bind(this);
    }


    getMainArticle(article) { 
        return (
         <section className="primary-sticky-nav">
            <a className="primary-sticky-nav-element" href="/koduki/how-do-you-write-production-code-for-unittest-5f30" id="main-card">
                <div>{article.title}</div>
            
                <div>

                <img src="https://vignette.wikia.nocookie.net/micronations/images/0/0e/DarkAllianceSkull_90x90.png/revision/latest?cb=20110821035701" alt="#" className="primary-sticky-nav-profile-image" />
                <div className="primary-sticky-nav-element-details">
                        <span>#testing</span>
                        <span>#java</span>
                        <span>#beginners</span>
                </div>

                </div>        
            </a>
        </section>
      

        )
    }

    render() {
        return (
            <div>{this.getMainArticle(this.props.article)}</div>
        )
    }
};

export default MainArticleCard;