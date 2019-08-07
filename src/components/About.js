import React from 'react';

export class About extends React.Component {
  render() {
    return (

      <section className="section about" id="about">
        <div className="section-container">
          <div className="section-description">
            <div className="section-heading brand_c">About</div>
            <div className="section-detail col2">
              <div className="about-img">
                <amp-img src={{"http://www.mutafaf.com/wp-content/uploads/2018/05/landing-e1533131080247.jpg"}} width={{"20"}} height={{"12"}} layout={{"responsive"}}></amp-img>
              </div>
              <div className="about-detail"><p>I am a passionate Senior Full Stack Engineer with proven ability to craft wide range of web applications, varying from small scale to large scale. I have worked with Leading Technology Companies and Consumer-based Businesses. I have experience leading the development teams in-house and remote.</p>
                <p>I have experience of working in a dozen of web technologies. When it comes to web application, it involves Client-side &amp; Server-side development as well as designing the Databases and deploying the code base.</p>
                <p>Server-side stack includes Rails, PHP, Asp.Net and Client-side stack includes AngularJS, Coffee, JavaScript, jQuery, HTML, HAML, SLIM, CSS, SCSS, SASS. He is pretty good at PostgreSQL, mySQL, SQLite databases, Also experience deploying code-base at Amazon’s EC2, Heroku, AppHarbor and various Linux Hostings.</p>
                <p>I received my Graduation degree in Computer Science from University of the Punjab, Lahore.</p>
                <p>Besides his technology background, also served as Visiting Lecturer in University of Gujrat. I was part of NGOs, non-profit Organizations as a Graphic Designer. Also writes tech article time-to-time.</p>
                <p>In sports, I love Cricket, Table Tennis and Badminton.</p>
                <p>I am always eager to work for next-generation applications. Cheers! </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
