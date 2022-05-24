import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import ControlSlider1 from './assets/images/ControlSlider1.svg';
import ControlSlider2 from './assets/images/ControlSlider2.svg';
import ControlSlider3 from './assets/images/ControlSlider3.svg';
import ControlSlider4 from './assets/images/ControlSlider4.svg';
import Featured1 from './assets/images/Featured1.png';
import Featured2 from './assets/images/Featured2.png';
import Featured3 from './assets/images/Featured3.png';
import IntroVideoBanner from './assets/images/IntroVideoBanner.png';
import LeftArrowControlSlider from './assets/images/LeftArrowControlSlider.svg';
import Logo from './assets/images/Logo.svg';
import Product1 from './assets/images/Product1.png';
import Product2 from './assets/images/Product2.png';
import Product3 from './assets/images/Product3.png';
import Product4 from './assets/images/Product4.png';
import Project1 from './assets/images/Project1.png';
import Project2 from './assets/images/Project2.png';
import Project3 from './assets/images/Project3.png';
import Project4 from './assets/images/Project4.png';
import Project5 from './assets/images/Project5.png';
import Project6 from './assets/images/Project6.png';
import ServicesRoom1 from './assets/images/ServicesRoom1.png';
import ServicesRoom2 from './assets/images/ServicesRoom2.png';
import ServicesRoom3 from './assets/images/ServicesRoom3.png';
import ServicesRoom4 from './assets/images/ServicesRoom4.png';
import ServicesRoom5 from './assets/images/ServicesRoom5.png';
import ServicesRoom6 from './assets/images/ServicesRoom6.png';
import ProjectControlSlider1 from './assets/images/ProjectControlSlider1.svg';
import ProjectControlSlider2 from './assets/images/ProjectControlSlider2.svg';
import ProjectControlSlider3 from './assets/images/ProjectControlSlider3.svg';
import ProjectControlSlider4 from './assets/images/ProjectControlSlider4.svg';
import Reason from './assets/images/Reason.png';
import RightArrowControlSlider from './assets/images/RightArrowControlSlider.svg';
import Services1 from './assets/images/Services1.png';
import Services2 from './assets/images/Services2.png';
import Services3 from './assets/images/Services3.png';
import LastestMedia from './assets/images/LastestMedia.png';

function App() {
  return (
    <div className='App'>
      <div className='intro-section'>
        <Row>
          <Col offset={3} xxl={2}>
            <img src={Logo} alt='logo' />
          </Col>
          <Col offset={5} xl={11} xxl={11}>
            <div className='nav-container'>
              <div className='nav-item active'>Home</div>
              <div className='nav-item'>Spaces</div>
              <div className='nav-item'>Products & Services</div>
              <div className='nav-item'>Showrooms</div>
              <div className='nav-item'>Company</div>
              <div className='nav-item'>Media</div>
              <div className='nav-item lowercase'>Contact</div>
            </div>
          </Col>
        </Row>
        <div className='intro-content-container container'>
          <Row>
            <Col offset={3} xl={18} xxl={18}>
              <div className='intro-content-wrapper'>
                <Col xl={10} xxl={10}>
                  <div className='intro-content-left-container'>
                    <h2 className='intro-content-title'>
                      New generation ceramic tile
                    </h2>
                    <p className='intro-content-description'>
                      Penatibus sem vitae mollis luctus mi tellus. Maximus eu
                      eleifend aptent dapibus metus maecenas consequat.
                      Elementum interdum a semper. Netus nullam eros nisi
                      volutpat nibh ex ultricies. Pharetra sagittis sit aliquet
                      at. Magna nam platea justo.
                    </p>
                    <div className='btn-learn-more'>Learn more</div>
                  </div>
                </Col>
                <Col offset={2} xl={12} xxl={12}>
                  <img src={IntroVideoBanner} alt='intro-banner' />
                </Col>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={24} xxl={24}>
              <div className='control-slider-container'>
                <img src={ControlSlider1} alt='icon' />
                <img
                  className='control-slider-icon'
                  src={ControlSlider2}
                  alt='icon'
                />
                <img
                  className='control-slider-icon'
                  src={ControlSlider3}
                  alt='icon'
                />
                <img
                  className='control-slider-icon'
                  src={ControlSlider4}
                  alt='icon'
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Row>
        <div className='featured-container container'>
          <Col offset={3} xl={18} xxl={18}>
            <h2 className='home-heading'>Featured Collection</h2>
            <div className='flex margin-top-54'>
              <img
                className='featured-left-arrow-control-slider'
                src={LeftArrowControlSlider}
                alt='icon'
              />
              <div className='featured-slider-container'>
                <div className='feature-slider-item-wrapper'>
                  <div>
                    <img
                      className='featured-slider-img'
                      src={Featured1}
                      alt='product'
                    />
                  </div>

                  <h3 className='feature-slider-title'>
                    Air Insulated Switchgear
                  </h3>
                  <p className='feature-slider-description'>
                    Ante mus blandit sapien sociosqu per consequat ad. Aenean
                    habitasse interdum letius lobortis primis tortor.
                  </p>

                  <div className='feature-slider-btn'>View Collection</div>
                </div>

                <div className='feature-slider-item-wrapper'>
                  <div>
                    <img
                      className='featured-slider-img'
                      src={Featured2}
                      alt='product'
                    />
                  </div>

                  <h3 className='feature-slider-title'>Mira Switches</h3>
                  <p className='feature-slider-description'>
                    Ante mus blandit sapien sociosqu per consequat ad. Aenean
                    habitasse interdum letius lobortis primis tortor.
                  </p>

                  <div className='feature-slider-btn'>View Collection</div>
                </div>

                <div className='feature-slider-item-wrapper'>
                  <div>
                    <img
                      className='featured-slider-img'
                      src={Featured3}
                      alt='product'
                    />
                  </div>

                  <h3 className='feature-slider-title'>
                    Transformers & Package Substations
                  </h3>
                  <p className='feature-slider-description'>
                    Ante mus blandit sapien sociosqu per consequat ad. Aenean
                    habitasse interdum letius lobortis primis tortor.
                  </p>

                  <div className='feature-slider-btn'>View Collection</div>
                </div>
              </div>
              <img
                className='featured-right-arrow-control-slider'
                src={RightArrowControlSlider}
                alt='icon'
              />
            </div>
          </Col>
        </div>
      </Row>
      <div className='products-section'>
        <Row>
          <div className='container'>
            <h2 className='home-heading white-color'>Products</h2>
            <Col offset={3} xl={18} xxl={18}>
              <div className='flex margin-top-60'>
                <div className='product-img-container'>
                  <img src={Product1} alt='product' />
                </div>
                <div className='product-right-wrapper'>
                  <div className='flex'>
                    <div className='product-img-container'>
                      <img src={Product2} alt='product' />
                    </div>

                    <div className='product-img-container margin-left-30'>
                      <img src={Product3} alt='product' />
                    </div>
                  </div>

                  <div className='product-img-container'>
                    <img
                      className='product-kitchen'
                      src={Product4}
                      alt='product'
                    />
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </div>
      <Row>
        <div className='services-container container'>
          <h2 className='home-heading'>Services</h2>
          <Col offset={3} xl={18} xxl={18}>
            <div className='services-item-container'>
              <img src={Services1} alt='services' />
              <div className='services-item-content-container'>
                <div className='services-item-content-wrapper'>
                  <h3 className='services-item-content-text'>
                    Measurement Service
                  </h3>
                  <p className='services-item-content-text services-item-content-description'>
                    Our sales support team will come & measure your property in
                    order to ensure accuracy in design and help you calculate
                    how many tiles you need. Please call our toll free number
                    800 122 22 20 to arrange a visit, or visit one of our
                    Showrooms.
                  </p>
                  <div className='btn-learn-more black-border-text margin-top-40'>
                    Learn more
                  </div>
                </div>
              </div>
            </div>

            <div className='services-item-container flex-direction-row-reverse'>
              <img src={Services2} alt='services' />
              <div className='services-item-content-container justify-content-flex-start'>
                <div className='services-item-content-wrapper'>
                  <h3 className='services-item-content-text'>Product Advice</h3>
                  <p className='services-item-content-text services-item-content-description'>
                    Consult our professionals by calling our toll free number
                    800 122 22 20 or by visiting one of our showrooms where our
                    qualified sales team will offer you product advice
                    highlighting the latest interior and exterior trends.
                  </p>
                  <div className='btn-learn-more black-border-text margin-top-40'>
                    Learn more
                  </div>
                </div>
              </div>
            </div>

            <div className='services-item-container'>
              <img src={Services3} alt='services' />
              <div className='services-item-content-container'>
                <div className='services-item-content-wrapper'>
                  <h3 className='services-item-content-text'>
                    Interior Design
                  </h3>
                  <p className='services-item-content-text services-item-content-description'>
                    Benefit from our free interior design service. Our fully
                    qualified interior designers will provide CAD visuals to
                    help you visualise your selected tiles before you buy.
                  </p>
                  <div className='btn-learn-more black-border-text margin-top-40'>
                    Learn more
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Row>
      <div className='reason-section'>
        <Row>
          <div className='container'>
            <Col offset={3} xl={18} xxl={18}>
              <div className='flex'>
                <img src={Reason} alt='reason-banner' />
                <div className='reason-content-container'>
                  <h1 className='home-heading text-align-left'>
                    Why Choose Us?
                  </h1>
                  <p className='description'>
                    Neque quisque sollicitudin tempor vestibulum elit taciti.
                    Sagittis tempor consequat turpis. Aenean curae elementum
                    vestibulum dapibus vitae laoreet. Bibendum suspendisse
                    himenaeos malesuada. Nisl taciti si platea dui. Euismod
                    malesuada facilisis duis lobortis aliquet massa. Tincidunt
                    vivamus ac consectetuer molestie pharetra. Sodales pulvinar
                    non habitant.
                  </p>
                  <p className='description'>
                    Nisl taciti si platea dui. Euismod malesuada facilisis duis
                    lobortis aliquet massa. Tincidunt vivamus ac consectetuer
                    molestie pharetra. Sodales pulvinar non habitant.
                  </p>
                  <ul className='description'>
                    <li>SUSTAINABLY SOURCED</li>
                    <li>EASY TO RECYCLE</li>
                    <li>IMPROVED HOME RESALE VALUE</li>
                    <li>A SMART WAY TO LEED CERTIFICATION</li>
                  </ul>

                  <button className='reason-btn'>LEARN MORE</button>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </div>

      <Row>
        <div className='container'>
          <Col offset={3} xl={18} xxl={18}>
            <div className='projects-heading-container'>
              <h1 className='home-heading'>Projects</h1>
              <div className='project-heading-btn'>All Projects</div>
            </div>
            <div className='project-content-container'>
              <div>
                <img src={Project1} alt='project' />
                <img className='margin-left-30' src={Project2} alt='project' />
                <img className='margin-left-30' src={Project3} alt='project' />
              </div>

              <div className='project-img-container'>
                <img src={Project4} alt='project' />
                <img className='margin-left-30' src={Project5} alt='project' />
                <img className='margin-left-30' src={Project6} alt='project' />
              </div>
            </div>

            <div className='control-slider-container margin-top-50'>
              <img src={ProjectControlSlider1} alt='icon' />
              <img
                className='control-slider-icon'
                src={ProjectControlSlider2}
                alt='icon'
              />
              <img
                className='control-slider-icon'
                src={ProjectControlSlider3}
                alt='icon'
              />
              <img
                className='control-slider-icon'
                src={ProjectControlSlider4}
                alt='icon'
              />
            </div>
          </Col>
        </div>
      </Row>
      <div className='services-room-section'>
        <Col offset={3} xl={18} xxl={18}>
          <h1 className='home-heading white-color'>Services</h1>
          <div className='project-content-container'>
            <div>
              <img src={ServicesRoom1} alt='project' />
              <img
                className='margin-left-30'
                src={ServicesRoom2}
                alt='project'
              />
              <img
                className='margin-left-30'
                src={ServicesRoom3}
                alt='project'
              />
            </div>

            <div className='project-img-container'>
              <img src={ServicesRoom4} alt='project' />
              <img
                className='margin-left-30'
                src={ServicesRoom5}
                alt='project'
              />
              <img
                className='margin-left-30'
                src={ServicesRoom6}
                alt='project'
              />
            </div>
          </div>
        </Col>
      </div>
      <Row>
        <div className='container'>
          <Col offset={3} xl={18} xxl={18}>
            <h1 className='home-heading lastest-media'>Lastest Media</h1>
            <div className='flex'>
              <div className='lastest-media-item-1'>
                <img src={LastestMedia} alt='LastestMedia' />
                <h4 className='lastest-media-item-title'>
                  Alfanar exa corp innovation at Expo 2020 with the Italian
                  Pavilion
                </h4>
                <p className='description margin-top-5'>
                  Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin
                  eros ullamcorper adipiscing penatibus habitant ex nascetur.
                </p>
                <div className='btn-learn-more black-border-text margin-top-5'>
                  Learn more
                </div>
              </div>
              <div>
                2
                <div>
                  <div>1</div>
                  <div>2</div>
                </div>
                <div>
                  <div>3</div>
                  <div>4</div>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default App;
