import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import home1 from '../images/home-bg-1.jpg'
import home2 from '../images/home-bg-2.jpg'
import home3 from '../images/home-bg-3.jpg'
import about from '../images/about-img.jpg'
import f1 from '../images/f-img-1.jpg'
import f2 from '../images/f-img-2.jpg'
import f3 from '../images/f-img-3.jpg'
import icon1 from '../images/icon-1.png'
import icon2 from '../images/icon-2.png'
import icon3 from '../images/icon-3.png'
import trainer1 from '../images/trainer-1.jpg'
import trainer2 from '../images/trainer-2.jpg'
import trainer3 from '../images/trainer-3.jpg'
import trainer4 from '../images/trainer-4.jpg'
import pic1 from '../images/pic-1.png'
import pic2 from '../images/pic-2.png'
import pic3 from '../images/pic-3.png'
import pic4 from '../images/pic-4.png'
import blog1 from '../images/blog-1.jpg'
import blog2 from '../images/blog-2.jpg'
import blog3 from '../images/blog-3.jpg'
import blog4 from '../images/blog-4.jpg'
import blog5 from '../images/blog-5.jpg'

import './main.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

const Main = () => {
  SwiperCore.use([Navigation, Pagination])
  const [sizeChange, setSizeChange] = useState(true)

  const HandleNavigation = () => {
    if (window.innerWidth < 800) {
      setSizeChange(false)
    } else {
      setSizeChange(true)
    }
  }
  window.addEventListener('resize', HandleNavigation)

  return (
    <>
      {/* //-----------home section start -------
        //-----intergrate with swiper */}

      <section className='home' id='home'>
        <div className='home-slider'>
          <div className='wrapper'>
            <Swiper
              spaceBetween={30}
              effect={'fade'}
              centeredSlides={true}
              grabCursor={true}
              navigation={!sizeChange ? false : true}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <div
                  className='slide'
                  style={{ background: `url(${home1}) no-repeat` }}
                >
                  <div className='content'>
                    <span>be strong, be fit</span>
                    <h3>Make yourself stronger than your excuses. </h3>
                    <Link to='#' className='btn btn-red'>
                      Get Started
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className='slide'
                  style={{ background: `url(${home2}) no-repeat` }}
                >
                  <div className='content'>
                    <span>be strong, be fit</span>
                    <h3>Make yourself stronger than your excuses. </h3>
                    <Link to='#' className='btn btn-red'>
                      Get Started
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className='slide'
                  style={{ background: `url(${home3}) no-repeat` }}
                >
                  <div className='content'>
                    <span>be strong, be fit</span>
                    <h3>Make yourself stronger than your excuses. </h3>
                    <Link to='#' className='btn btn-red'>
                      Get Started
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* //--------------home section end--------- */}
      {/*-------- about section start------------- */}

      <section className='about' id='about'>
        <div className='about-wrapper grid'>
          <div className='about-image'>
            <img src={about} alt='' />
          </div>

          <div className='about-detail flex-2 grid grid-4 '>
            <div className='text-light'>
              <p className='text-red sm'>About us</p>
              <h1 className='md'>Everyday Is A Chance To Become Better</h1>
            </div>

            <div className='text-light'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                possimus sequi neque reprehenderit alias recusandae, ex quasi.
                Inventore, natus optio.
              </p>
            </div>
            <div className='grid text-light'>
              <div className='about-group'>
                <h3>
                  <i className='fas fa-check text-red'></i> Body And Mind
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, doloremque?
                </p>
              </div>

              <div className='about-group'>
                <h3>
                  <i className='fas fa-check text-red'></i> Healdthy Life
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, doloremque?
                </p>
              </div>

              <div className='about-group'>
                <h3>
                  <i className='fas fa-check text-red'></i> Strategies
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, doloremque?
                </p>
              </div>

              <div className='about-group'>
                <h3>
                  <i className='fas fa-check text-red'></i> Workout
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, doloremque?
                </p>
              </div>
            </div>

            <div className='about-btn'>
              <Link to='#' className='btn-red'>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*-------- about section end------------- */}
      {/*-------- feature section start------------- */}

      <section className='feature my-3 ' id='feature'>
        <div className='feature-wrapper container'>
          <h1 className='feature-header text-center'>
            {' '}
            <span className='text-red md'>Gym Features</span>{' '}
          </h1>

          <div className='main-feature grid grid-3'>
            <div className='image'>
              <img src={f1} alt='' />
            </div>

            <div className='box'>
              <img src={icon1} alt='' />
              <h3 className='text-red'>Gym for men</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                architecto?
              </p>
              <Link to='3#' className='btn btn-red'>
                Read More
              </Link>
            </div>

            <div className='image'>
              <img src={f2} alt='' />
            </div>

            <div className='box'>
              <img src={icon2} alt='' />
              <h3 className='text-red'>Body building</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                architecto?
              </p>
              <Link to='3#' className='btn btn-red'>
                Read More
              </Link>
            </div>

            <div className='image'>
              <img src={f3} alt='' />
            </div>

            <div className='box'>
              <img src={icon3} alt='' />
              <h3 className='text-red'>Gym for women</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                architecto?
              </p>
              <Link to='3#' className='btn btn-red'>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*--------feature section end------------- */}

      {/*--------pricing start------------- */}
      <section className='pricing my-5' id='pricing'>
        <div className='pricing-wrapper container'>
          <div className='pricing-group grid grid-3'>
            <div className='pricing-box'>
              <h3 className='text-red'>Pricing</h3>
              <h1>Affordable Pricing Plan For You</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati rem quasi quas quaerat ea doloremque ut debitis error
                praesentium tenetur?
              </p>

              <h4>
                <i className='fas fa-check text-red'></i> Cadio Excercise
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Weight Liting
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Diet Plan
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Overall Result
              </h4>
              <Link to='#' className='btn btn-red'>
                All Pricing
              </Link>
            </div>

            <div className='pricing-box second text-center'>
              <h1>Basic Plan</h1>
              <h3 className='text-light'>
                $<span className='text-red'>30</span>/mth
              </h3>
              <h4>
                <i className='fas fa-check text-red'></i> Personal Traning
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Cadio Excercise
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Weight Liting
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Diet Plan
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Overall Result
              </h4>
              <Link to='#' className='btn btn-red'>
                Get Started
              </Link>
            </div>

            <div className='pricing-box text-center outline'>
              <h1>Premium Plan</h1>
              <h3 className='text-light'>
                $<span className='text-red'>30</span>/mth
              </h3>
              <h4>
                <i className='fas fa-check text-red'></i> Personal Traning
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Cadio Excercise
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Weight Liting
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Diet Plan
              </h4>
              <h4>
                <i className='fas fa-check text-red'></i> Overall Result
              </h4>
              <Link to='#' className='btn btn-red'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*--------pricing end------------- */}
      {/*--------trainer start------------- */}
      <section className='trainer my-5' id='trainers'>
        <div className='trainer-wrapper container'>
          <h1 className='trainer-header text-center'>
            <span className='text-red md'>Expert Trainer</span>
          </h1>
          <div className='trainer-group'>
            <div className='box'>
              <img src={trainer1} alt='' />
              <div className='content'>
                <span>expert trainer</span>
                <h3>John</h3>
                <div className='share'>
                  <Link to='#' class='fab fa-facebook-f'></Link>
                  <Link to='#' class='fab fa-twitter'></Link>
                  <Link to='#' class='fab fa-pinterest'></Link>
                  <Link to='#' class='fab fa-linkedin'></Link>
                </div>
              </div>
            </div>

            <div className='box'>
              <img src={trainer2} alt='' />
              <div className='content'>
                <span>expert trainer</span>
                <h3>Joce</h3>
                <div className='share'>
                  <Link to='#' class='fab fa-facebook-f'></Link>
                  <Link to='#' class='fab fa-twitter'></Link>
                  <Link to='#' class='fab fa-pinterest'></Link>
                  <Link to='#' class='fab fa-linkedin'></Link>
                </div>
              </div>
            </div>

            <div className='box'>
              <img src={trainer3} alt='' />
              <div className='content'>
                <span>expert trainer</span>
                <h3>Kent</h3>
                <div className='share'>
                  <Link to='#' class='fab fa-facebook-f'></Link>
                  <Link to='#' class='fab fa-twitter'></Link>
                  <Link to='#' class='fab fa-pinterest'></Link>
                  <Link to='#' class='fab fa-linkedin'></Link>
                </div>
              </div>
            </div>

            <div className='box'>
              <img src={trainer4} alt='' />
              <div className='content'>
                <span>expert trainer</span>
                <h3>Christina</h3>
                <div className='share'>
                  <Link to='#' class='fab fa-facebook-f'></Link>
                  <Link to='#' class='fab fa-twitter'></Link>
                  <Link to='#' class='fab fa-pinterest'></Link>
                  <Link to='#' class='fab fa-linkedin'></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--------trainer end------------- */}
      {/*--------banner start------------- */}

      <section className='banner my-5'>
        <div className='bannertop text-center p-3'>
          <span className='text-red'>Join Us Now</span>
          <h3 className='text-light lg'>get up to 50% off</h3>
          <p className='text-light'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis beatae ab illo, officia dolorem voluptatibus quibusdam
            fuga ut magni reprehenderit.
          </p>
          <Link to='#' className='btn btn-red'>
            Get Discount
          </Link>
        </div>
        <div className='banner-main py-3 container '>
          <div className='testimonials'>
            <h4 className='text-red'>testimonials</h4>
            <h1 className='text-light py-1 md'>What Our Clients Says</h1>
            <p className='text-light py-1'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident, veniam. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Provident, veniam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Provident, veniam.
            </p>
            <Link to='#' className='btn btn-red'>
              Read More
            </Link>
          </div>

          <div className='testimonials-slide'>
            <div className='wrapper'>
              <Swiper
                spaceBetween={20}
                effect={'fade'}
                centeredSlides={true}
                grabCursor={true}
                loop={true} //continously run carusel
                autoplay={{
                  delay: 7500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  375: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className='slide-group'>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident, veniam.
                    </p>
                    <div className='user'>
                      <img src={pic1} alt='' />
                      <div className='info'>
                        <h3>John</h3>
                        <span className='text-red'>Designer</span>
                      </div>
                      <i className='fas fa-quote-left'></i>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='slide-group'>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident, veniam.
                    </p>
                    <div className='user'>
                      <img src={pic2} alt='' />
                      <div className='info'>
                        <h3>Amily</h3>
                        <span className='text-red'>Teacher</span>
                      </div>
                      <i className='fas fa-quote-left'></i>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='slide-group'>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident, veniam.
                    </p>
                    <div className='user'>
                      <img src={pic3} alt='' />
                      <div className='info'>
                        <h3>Kent</h3>
                        <span className='text-red'>Engineer</span>
                      </div>
                      <i className='fas fa-quote-left'></i>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='slide-group'>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident, veniam.
                    </p>
                    <div className='user'>
                      <img src={pic4} alt='' />
                      <div className='info'>
                        <h3>Susan</h3>
                        <span className='text-red'>Admin</span>
                      </div>
                      <i className='fas fa-quote-left'></i>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/*--------banner end------------- */}
      {/*--------blogs start------------- */}
      <section className='blog container' id='blogs'>
        <h1 className='blog-head text-center'>
          <span className='text-red md'> Daily Posts</span>
        </h1>
        <div className='main-blogs-slide'>
          <Swiper
            spaceBetween={30}
            grabCursor={true}
            loop={true} //continously run carusel
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className='slide-group'>
                <div className='image'>
                  <img src={blog1} alt='' />
                </div>
                <div className='content'>
                  <h3>
                    By User <span> | </span> 21st May,2021
                  </h3>
                  <h4>Fitness Is Not Abot Being Better Than Someone Else</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, illo.
                  </p>
                  <Link to='#' className='btn btn-red'>
                    Read more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide-group'>
                <div className='image'>
                  <img src={blog2} alt='' />
                </div>
                <div className='content'>
                  <h3>
                    By User <span> | </span> 21st May,2021
                  </h3>
                  <h4>Fitness Is Not Abot Being Better Than Someone Else</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, illo.
                  </p>
                  <Link to='#' className='btn btn-red'>
                    Read more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide-group'>
                <div className='image'>
                  <img src={blog3} alt='' />
                </div>
                <div className='content'>
                  <h3>
                    By User <span> | </span> 21st May,2021
                  </h3>
                  <h4>Fitness Is Not Abot Being Better Than Someone Else</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, illo.
                  </p>
                  <Link to='#' className='btn btn-red'>
                    Read more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide-group'>
                <div className='image'>
                  <img src={blog4} alt='' />
                </div>
                <div className='content'>
                  <h3>
                    By User <span> | </span> 21st May,2021
                  </h3>
                  <h4>Fitness Is Not Abot Being Better Than Someone Else</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, illo.
                  </p>
                  <Link to='#' className='btn btn-red'>
                    Read more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide-group'>
                <div className='image'>
                  <img src={blog5} alt='' />
                </div>
                <div className='content'>
                  <h3>
                    By User <span> | </span> 21st May,2021
                  </h3>
                  <h4>Fitness Is Not Abot Being Better Than Someone Else</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, illo.
                  </p>
                  <Link to='#' className='btn btn-red'>
                    Read more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/*--------blogs end------------- */}
    </>
  )
}

export default Main
