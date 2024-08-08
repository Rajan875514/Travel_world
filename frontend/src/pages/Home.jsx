import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import HeroImg from '../assets/images/HeroImg.jpg';
import HeroImg1 from '../assets/images/HeroImg2.jpg';
import worldmg from '../assets/images/worldmg.jpg';
import video1 from '../assets/images/video (2).mp4';
import Subtitle from './../shared/subtitle'; 
import SearchBar from '../shared/SearchBar';

const Home = () => {
  return (
    <>
      {/*============hero section start=============*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero_content'>
                <div className='hero_subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldmg} alt="World Map" />
                </div>
                <h1>
                  Traveling opens the door to creating{' '}
                  <span className='highlight'>memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  quisquam, facere dolorem eaque corporis quidem temporibus.
                  Voluptatem veritatis eligendi ratione porro iusto quasi sed
                  quaerat distinctio explicabo est.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero_img-box'>
                <img src={HeroImg} alt="Hero Image" />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero_img-box mt-4'>
                <video src={video1} alt="Video" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero_img-box mt-5'>
                <img src={HeroImg1} alt="Hero Image 1" />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/*==================hero section end ============*/}
    </>
  );
};

export default Home;
