import React from 'react';

const SocialCard = () => {
		return (
			<section>
				<div className="primary-sticky-nav">
				  <div className="primary-sticky-nav-element primary-sticky-nav-author">
				    <a href="/saigowthamr"><img src="https://vignette.wikia.nocookie.net/micronations/images/0/0e/DarkAllianceSkull_90x90.png/revision/latest?cb=20110821035701" alt="#" className="primary-sticky-nav-profile-image" /></a>
				    <span className="primary-sticky-nav-author-name">
				      <a href="kiaracontreras.com">
				        Kiara Contreras
				      </a>
				    </span>
				      <div className="primary-sticky-nav-author-summary">
				          Full Stack Developer, Yogi, &amp; Musician
				      </div>
				    <div className="primary-sticky-nav-author-follow">
				      <button className="cta follow-action-button" data-info="{&quot;id&quot;:65999,&quot;className&quot;:&quot;User&quot;,&quot;style&quot;:&quot;full&quot;}" data-follow-action-button="true"> SAVE </button>
				    </div>
				  </div>
				 	<div className="primary-sticky-nav-title">
			        More from <a href="/saigowthamr">@kiarathedev</a>
			    </div>
				</div>
			</section>
			)
};

export default SocialCard;