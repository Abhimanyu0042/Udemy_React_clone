import React from 'react'
import "./Home.css"

function Home() {
  return (
    <>
  <div className="in-container-1">
    <div className="picbox">
      <div className="picbox-content">
        <p className="pic-heading">Cyber Sale on now:<br /> Courses from ₹389</p>
        <p>Take the first step toward a brighter future.<br /> Sale ends tomorrow.</p>
      </div>
    </div>
    <div className="course-selection">
      <div><p className="course-heading"> A broad selection of courses</p></div>
      <div><p className="course-heading-desc">Choose from 213,000 online video courses with new additions published every month</p></div>
      <div className="course-list">
        <li>Python</li>
        <li>Excel</li>
        <li>Web development</li>
        <li>Javascript</li>
        <li>Data Science</li>
        <li>AWS Certification</li>
        <li className="Hide-navkeys">Drawing</li>
      </div>
      <div className="python-course">
        <h2>Expand your career opportunities with Python</h2>
        <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its<br />simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll <br />learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
        <button className="explore-pythonbtn">Explore Python</button>
      </div>
    </div>
    <div className="students-viewing">
      <p className="course-heading">Students are viewing</p>
      <div className="students-viewing-scroll">
        <div className="student-viewing-sugg">
          <div className="student-sugg-pic">
            <img alt="Its image" width={275} height={165} className="course-card--course-image--3QvbQ browse-course-card--image--35hYN" src="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg" srcSet="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg 1x, https://img-b.udemycdn.com/course/480x270/1565838_e54e_16.jpg 2x" />
          </div>
          <div className="student-text">
            <p className="heading-student-text">The Complete 2023 Web Development Bootcamp</p>
            <p className="name-student-text">Dr. Angela Yu</p>
            <p className="rating-student-text">4.7 ⭐⭐⭐⭐</p>
            <p className="pricing-student-text">
              ₹389 <span>₹3,499</span>
            </p>
            <p className="bestseller">Bestseller</p>
          </div>
        </div>
        <div className="student-viewing-sugg">
          <div className="student-sugg-pic">
            <img alt="Its image" width={275} height={165} className="course-card--course-image--3QvbQ browse-course-card--image--35hYN" src="https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg" srcSet="https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg 1x, https://img-b.udemycdn.com/course/480x270/2776760_f176_10.jpg 2x" />                      </div>
          <div className="student-text">
            <p className="heading-student-text">100 Days of Code: The Complete Python Pro Bootcamp for 2023</p>
            <p className="name-student-text">Dr. Angela Yu</p>
            <p className="rating-student-text">4.7 ⭐⭐⭐⭐</p>
            <p className="pricing-student-text">
              ₹389 <span>₹3,499</span>
            </p>
            <p className="bestseller">Bestseller</p>
          </div>
        </div>
        <div className="student-viewing-sugg">
          <div className="student-sugg-pic">
            <img alt="Its image" width={275} height={165} className="course-card--course-image--3QvbQ browse-course-card--image--35hYN" src="https://img-b.udemycdn.com/course/240x135/851712_fc61_6.jpg" srcSet="https://img-b.udemycdn.com/course/240x135/851712_fc61_6.jpg 1x, https://img-b.udemycdn.com/course/480x270/851712_fc61_6.jpg 2x" />                      </div>
          <div className="student-text">
            <p className="heading-student-text">The Complete Javascript Course 2023: From Zero to Expert!</p>
            <p className="name-student-text">Jonas Schmedtmann</p>
            <p className="rating-student-text">4.7 ⭐⭐⭐⭐</p>
            <p className="pricing-student-text">
              ₹389 <span>₹3,499</span>
            </p>
            <p className="bestseller">Bestseller</p>
          </div>
        </div>
        <div className="student-viewing-sugg">
          <div className="student-sugg-pic">
            <img alt="Its image" width={275} height={165} className="course-card--course-image--3QvbQ browse-course-card--image--35hYN" src="https://img-b.udemycdn.com/course/240x135/2196488_8fc7_10.jpg" srcSet="https://img-b.udemycdn.com/course/240x135/2196488_8fc7_10.jpg 1x, https://img-b.udemycdn.com/course/480x270/2196488_8fc7_10.jpg 2x" />                      </div>
          <div className="student-text">
            <p className="heading-student-text">Ultimate AWS Certified Solutions Architect Associate...</p>
            <p className="name-student-text">Stephane Maarek | AWS Certified Cloud Engineer</p>
            <p className="rating-student-text">4.7 ⭐⭐⭐⭐</p>
            <p className="pricing-student-text">
              ₹389 <span>₹3,499</span>
            </p>
            <p className="bestseller">Bestseller</p>
          </div>
        </div>
        <div className="student-viewing-sugg">
          <div className="student-sugg-pic">
            <img alt="Its image" width={275} height={165} className="course-card--course-image--3QvbQ browse-course-card--image--35hYN" src="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg" srcSet="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg 1x, https://img-b.udemycdn.com/course/480x270/1565838_e54e_16.jpg 2x" />
          </div>
          <div className="student-text">
            <p className="heading-student-text">The Complete 2023 Web Development Bootcamp</p>
            <p className="name-student-text">Dr. Angela Yu</p>
            <p className="rating-student-text">4.7 ⭐⭐⭐⭐</p>
            <p className="pricing-student-text">
              ₹389 <span>₹3,499</span>
            </p>
            <p className="bestseller">Bestseller</p>
          </div>
        </div>
        <div className="student-viewing-sugg">
          <div className="student-sugg-pic">
            <img alt="Its image" width={275} height={165} className="course-card--course-image--3QvbQ browse-course-card--image--35hYN" src="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg" srcSet="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg 1x, https://img-b.udemycdn.com/course/480x270/1565838_e54e_16.jpg 2x" />
          </div>
          <div className="student-text">
            <p className="heading-student-text">The Complete 2023 Web Development Bootcamp</p>
            <p className="name-student-text">Dr. Angela Yu</p>
            <p className="rating-student-text">4.7 ⭐⭐⭐⭐</p>
            <p className="pricing-student-text">
              ₹389 <span>₹3,499</span>
            </p>
            <p className="bestseller">Bestseller</p>
          </div>
        </div>
        <div className="student-viewing-sugg">
          <div className="student-sugg-pic">
            <img alt="Its image" width={275} height={165} className="course-card--course-image--3QvbQ browse-course-card--image--35hYN" src="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg" srcSet="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg 1x, https://img-b.udemycdn.com/course/480x270/1565838_e54e_16.jpg 2x" />
          </div>
          <div className="student-text">
            <p className="heading-student-text">The Complete 2023 Web Development Bootcamp</p>
            <p className="name-student-text">Dr. Angela Yu</p>
            <p className="rating-student-text">4.7 ⭐⭐⭐⭐</p>
            <p className="pricing-student-text">
              ₹389 <span>₹3,499</span>
            </p>
            <p className="bestseller">Bestseller</p>
          </div>
        </div>
        <div className="student-viewing-sugg">
          <div className="student-sugg-pic">
            <img alt="Its image" width={275} height={165} className="course-card--course-image--3QvbQ browse-course-card--image--35hYN" src="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg" srcSet="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg 1x, https://img-b.udemycdn.com/course/480x270/1565838_e54e_16.jpg 2x" />
          </div>
          <div className="student-text">
            <p className="heading-student-text">The Complete 2023 Web Development Bootcamp</p>
            <p className="name-student-text">Dr. Angela Yu</p>
            <p className="rating-student-text">4.7 ⭐⭐⭐⭐</p>
            <p className="pricing-student-text">
              ₹389 <span>₹3,499</span>
            </p>
            <p className="bestseller">Bestseller</p>
          </div>
        </div>
      </div>
    </div>
    <div className="top-categories">
      <p className="course-heading">Top categories</p>
      <div className="top-categories-list">
        <div className="top-categories-items">
          <figure><img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt="Its image" /></figure>
          <figcaption>Design</figcaption>
        </div>
        <div className="top-categories-items">
          <figure><img src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" alt="Its image" /></figure>
          <figcaption>Development</figcaption>
        </div>
        <div className="top-categories-items">
          <figure><img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" alt="Its image" /></figure>
          <figcaption>Marketing</figcaption>
        </div>
        <div className="top-categories-items">
          <figure><img src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" alt="Its image" /></figure>
          <figcaption>IT and Software</figcaption>
        </div>
        <div className="top-categories-items">
          <figure><img src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" alt="Its image" /></figure>
          <figcaption>Personal Development</figcaption>
        </div>
        <div className="top-categories-items">
          <figure><img src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" alt="Its image" /></figure>
          <figcaption>Business</figcaption>
        </div>
        <div className="top-categories-items">
          <figure><img src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" alt="Its image" /></figure>
          <figcaption>Photography</figcaption>
        </div>
        <div className="top-categories-items">
          <figure><img src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" alt="Its image" /></figure>
          <figcaption>Music</figcaption>
        </div>
      </div>
    </div>
  </div>
  <div className="in-container-2">
    <div className="in-container-1">
      <div className="featured-topics">
        <p className="course-heading">Featured topics by category</p>
        <div className="featured-lists">
          <div className="featured-list-item">
            <li className="list-item-heading">Development</li>
            <li><p className="list-item-content">Python</p>
              <p className="list-item-students">36,354,994 students</p>
            </li>
            <li><p className="list-item-content">Web Development</p>
              <p className="list-item-students">11,415,615 students</p>
            </li>
            <li><p className="list-item-content">Machine Learning</p>
              <p className="list-item-students">7,070,015 students</p>
            </li>
            <button className="explore-pythonbtn Hide-navkeys">Explore more topics</button>
          </div>
          <div className="featured-list-item">
            <li className="list-item-heading">Business</li>
            <li><p className="list-item-content">Financial Analysis</p>
              <p className="list-item-students">1,195,282 students</p>
            </li>
            <li><p className="list-item-content">SQL</p>
              <p className="list-item-students">5,977,561 students</p>
            </li>
            <li><p className="list-item-content">PMP</p>
              <p className="list-item-students">1,733,398 students</p>
            </li>
          </div>
          <div className="featured-list-item">
            <li className="list-item-heading">IT and Software</li>
            <li><p className="list-item-content">AWS Certification</p>
              <p className="list-item-students">6,078,244 students</p>
            </li>
            <li><p className="list-item-content">Ethical Hacking</p>
              <p className="list-item-students">10,931,066 students</p>
            </li>
            <li><p className="list-item-content">Cyber Security</p>
              <p className="list-item-students">3,998,037 students</p>
            </li>
          </div>
          <div className="featured-list-item">
            <li className="list-item-heading">Design</li>
            <li><p className="list-item-content">Photoshop</p>
              <p className="list-item-students">10,909,736 students</p>
            </li>
            <li><p className="list-item-content">Graphic Design</p>
              <p className="list-item-students">3,381,052 students</p>
            </li>
            <li><p className="list-item-content">Drawing</p>
              <p className="list-item-students">2,410,849 students</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="in-container-1">
    <div className="become-instructor">
      <div className="instructor-pic">
        <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="Its image" />
      </div>
      <div className="instructor-content">
        <h2>Become an instructor</h2>
        <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
        <button style={{color: 'white', backgroundColor: 'black'}}> Start teaching today</button>
      </div>
    </div>
  </div>
  <div className="in-container-2">
    <div className="trusted-brands">
      <p className="course-heading" style={{fontFamily: 'aerial'}}>Trusted by over 13,400 great teams</p>
      <p>Leading companies use the same courses to help employees keep their skills fresh.
      </p>
      <p className="trusted-brands-list">
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="Its image" />
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="Its image" />
        <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="Its image" />
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="Its image" />
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="Its image" />
        <img src="https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg" alt="Its image" />
      </p>
    </div>
  </div>
  <div className="in-container-1">
    <div className="become-instructor udemy-business">
      <div className="instructor-content udemy-business1">
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" width="200px" alt="Its image" />
        <p>Get unlimited access to 19,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</p>
        <button style={{color: 'white', backgroundColor: 'black'}}> Get Udemy Business</button>
      </div>
      <div className="instructor-pic">
        <img src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg" alt="Its image" />
      </div>
    </div>
  </div>
  <div className="in-container-1">
    <div className="become-instructor">
      <div className="instructor-pic">
        <img src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" alt="Its image" />
      </div>
      <div className="instructor-content">
        <h2>Transform your life through education</h2>
        <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
        <button style={{color: 'white', backgroundColor: 'black'}}> Find out how</button>
      </div>
    </div>
  </div>
  </>

  )
}

export default Home