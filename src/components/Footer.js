import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
const Footer = () => {
  return (
    <>
      <section className='footer my-5'>
        <div className='footer-wrapper'>
          <div className='box text-light'>
            <h3>Quick Link</h3>
            <Link to='#home'>Home</Link>
            <Link to='#home'>About</Link>
            <Link to='#feature'>Feature</Link>
            <Link to='#pricing'>Priciing</Link>
            <Link to='#trainers'>Trainers</Link>
            <Link to='#blogs'>Blogs</Link>
          </div>

          <div className='box'>
            <h3>Operation Hours</h3>

            <p>
              Monday: <i>7.00am - 10.30pm</i>
            </p>
            <p>
              Tuesday: <i>7.00am - 10.30pm</i>
            </p>
            <p>
              Wednesday: <i>7.00am - 10.30pm</i>
            </p>
            <p>
              Friday: <i>7.00am - 10.30pm</i>
            </p>
            <p>
              Saturday: <i>7.00am - 10.30pm</i>
            </p>
            <p>
              Sunday: <i>7.00am - 10.30pm</i>
            </p>
          </div>

          <div className='box'>
            <h3>Contact Number</h3>

            <p>
              {' '}
              <i class='fas fa-phone'></i> +65-9888-7890{' '}
            </p>
            <p>
              {' '}
              <i class='fas fa-phone'></i> +65-2222-3333{' '}
            </p>
            <p>
              {' '}
              <i class='fas fa-envelope'></i> gym@gmail.com{' '}
            </p>
            <p>
              {' '}
              <i class='fas fa-map'></i> Singapore - 168168{' '}
            </p>
            <div className='share'>
              <Link to='#' class='fab fa-facebook-f'></Link>
              <Link to='#' class='fab fa-twitter'></Link>
              <Link to='#' class='fab fa-linkedin'></Link>
              <Link to='#' class='fab fa-pinterest'></Link>
            </div>
          </div>

          <div className='box'>
            <h3>Newsletter</h3>
            <p>Subscribe for latest updates</p>
            <form action=''>
              <input
                type='email'
                name=''
                className='email'
                placeholder='enter your email'
                id=''
              />
              <input type='submit' value='subscribe' className='btn btn-red' />
            </form>
          </div>
        </div>

        <h2 className='createdBy text-center text-light'>
          Created By<span className='text-red'>Jayden Designer</span>| All
          Rights Reserved!
        </h2>
      </section>
    </>
  )
}

export default Footer
