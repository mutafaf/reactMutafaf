import React from 'react';

export class Services extends React.Component {
  render() {
    return (
      <section class="section services" id="service">
        <div class="section-container">
          <div class="section-description">
            <div class="section-heading brand_c">Service</div>
            <div class="section-detail">I am offering several technology based services with best quality work you \'ve ever experienced. I take ownership a complete ownership of your product/project and deeply look into it from development to deployment. Some of my services are as follows:</div>
          </div>
          <div class="services-container srv">
            <div class="service-item">
              <h5 class="service-title brand_c">
                <span><i class="fas fa-road brand_c"></i>
                </span>Web Development</h5>
              <div class="service-desc">
                <div class="desc">I provide the all kind of web solutions from basic to advanced level. The services can be further customized as per your requirements and budget. I'm also an expert team player to deliver huge sized web applications collaborating with my team.</div>
              </div>
            </div>
            <div class="service-item">
              <h5 class="service-title brand_c">
                <span><i class="fas fa-road brand_c"></i>
                </span>Mobile Development</h5>
              <div class="service-desc">
                <div class="desc">Mobile apps are now most used as of web applications according to a research, there are 2.3 Billions mobiles users worldwide. If you gotta business you need to have a mobile app first. I with my team delivers the best mobile apps both design-wise and development point of view.</div>
              </div>
            </div>
            <div class="service-item">
              <h5 class="service-title brand_c">
              <span><i class="fas fa-road brand_c"></i>
              </span>Graphic Design</h5>
              <div class="service-desc">
                <div class="desc">
                  I started designing as a hobby and took it to professional level via learning advance designing tools. Now I have 7+ years of design experience as a hobbyist. I have good command on Photoshop, Lightroom, Illustrator and some others
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
