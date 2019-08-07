import React from 'react';

export class Banner extends React.Component {
  render() {
    return (
      <section class="landing" id="home">
        <div class="landing_wrapper">
            <div class="landing-overlay"></div>
            <div class="landing-content">
              <div class="animated slideInLeft"><h1 class="">MUTAFAF WAHHAJ</h1></div>
        <div class="position animated slideInRight"><h3 class="">Full Stack Developer</h3>  </div>
            <div class="animated fadeInDownBig">
              <button class="cp-hover theme-btn see-port" on="tap:portfolio.scrollTo"><a href="#portfolio"><span>See More Work</span></a></button>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
