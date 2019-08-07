import React from 'react';

export class Navbar extends React.Component {
  render() {
    return (
      <header class="header clear mtf-header brand_bg">
        <div className="header-bar">
          <div className="header-container">
            <h3 className="cp-hover logo"><a href="/"><span> MUTAFAF</span> <span className="last-name">WAHHAJ</span> </a></h3>
              <div id="main-header">
              <nav className="nav-container brand_hover amp-sidebar-toolbar-target-hidden i-amphtml-toolbar">
                <ul>
                  <li role="button" on="tap:home.scrollTo" id="nav-menu-item-51" className="folio-menu main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom" tabindex="1"><a className="menu-link main-menu-link">Home</a></li>
                  <li role="button" on="tap:about.scrollTo" id="nav-menu-item-88" className="folio-menu main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom" tabindex="1"><a className="menu-link main-menu-link">About</a></li>
                  <li role="button" on="tap:service.scrollTo" id="nav-menu-item-49" className="folio-menu main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom" tabindex="1"><a className="menu-link main-menu-link">Services</a></li>
                  <li role="button" on="tap:portfolio.scrollTo" id="nav-menu-item-48" className="folio-menu main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom" tabindex="1"><a className="menu-link main-menu-link">Portfolio</a></li>
                  <li role="button" on="tap:footer.scrollTo" id="nav-menu-item-62" className="folio-menu main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom" tabindex="1"><a className="menu-link main-menu-link">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
