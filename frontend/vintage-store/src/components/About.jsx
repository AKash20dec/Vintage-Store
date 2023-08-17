import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='whole'>
   <>
  <section className="container imgHead ">
    <div className="row">
      <div className="col-lg-12 text-center  text-light">
        <h2 className="about-heading">About Vinatge Store</h2>
        <p>
          Welcome to Vinatge Store, your premier online destination for all your
          shopping needs. We take pride in offering a wide selection of
          high-quality products at competitive prices, delivered right to your
          doorstep.
        </p>
        <p>
          Founded in 20XX, Vinatge Store has quickly become a trusted name in the
          e-commerce industry. Our commitment to customer satisfaction and
          exceptional service has enabled us to build a loyal customer base.
        </p>
      </div>
    </div>
  </section>
  {/* Mission Section */}
  <section className="mission-section backdown">
    <div className="container ">
      <div className="row">
        <div className="col-md-6 ">
          <h2>Our Mission</h2>
          <p>
            At Vinatge Store, our mission is to make online shopping a seamless and
            enjoyable experience for everyone. We strive to offer a diverse
            range of products, from electronics and fashion to home essentials
            and beyond, catering to the unique preferences of our customers.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Values</h2>
          <ul>
            <li>
              Quality: We are committed to offering only the finest products
              that meet the highest standards of quality.
            </li>
            <li>
              Customer Satisfaction: Our customers are at the heart of
              everything we do, and their satisfaction is our top priority.
            </li>
            <li>
              Innovation: We embrace innovation and technology to enhance the
              shopping experience and stay ahead in the ever-changing e-commerce
              landscape.
            </li>
            <li>
              Transparency: We believe in transparency and open communication
              with our customers, partners, and stakeholders.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</>


    </div>
  )
}

export default About
