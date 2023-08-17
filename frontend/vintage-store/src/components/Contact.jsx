import React from 'react'


const Contact = () => {
  return (
    <div  style={{backgroundColor: "#c3cbdc",
      backgroundImage: "linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)"
      }}>
      <section className="container border border-dark my-5 py-2 px-1 rounded shadow">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="contact-heading">Contact Us</h2>
      <p>
        Have a question or need assistance? Fill out the form below, and we'll
        get back to you as soon as possible.
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-8 offset-md-2">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows={5}
            placeholder="Your Message"
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</section>


    </div>
  )
}

export default Contact
