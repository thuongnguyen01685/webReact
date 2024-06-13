import React from "react";

const Contact = () => {
  return (
    <div className='container mt-4'>
      <h1>Contact Us</h1>

      <div className='row mt-4'>
        <div className='col-md-6'>
          <h3>Contact Information</h3>
          <p>
            <strong>Address:</strong> 123 ABC Street, City, Country
          </p>
          <p>
            <strong>Phone:</strong> +123 456 789
          </p>
          <p>
            <strong>Email:</strong> contact@example.com
          </p>
        </div>
        <div className='col-md-6'>
          <h3>Send us a message</h3>
          <form>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Your Name
              </label>
              <input type='text' className='form-control' id='name' />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Your Email
              </label>
              <input type='email' className='form-control' id='email' />
            </div>
            <div className='mb-3'>
              <label htmlFor='subject' className='form-label'>
                Subject
              </label>
              <input type='text' className='form-control' id='subject' />
            </div>
            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <textarea
                className='form-control'
                id='message'
                rows='5'></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Optional: Google Maps Embed */}
      <div className='mt-4'>
        <h3>Our Location</h3>
        {/* Replace with your Google Maps embed code or other map service */}
        <iframe
          title='Our Location'
          width='100%'
          height='400'
          frameBorder='0'
          scrolling='no'
          marginHeight='0'
          marginWidth='0'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.12115654161!2d106.62966371415353!3d10.82333479228319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2562f13029%3A0x95f4e0843a911ab6!2zVHLGsOG7nW5nIExvbmcgUXXhu5FjIFRy4buNbmcgSOG7kyBLaW5oIFbEg24gVGjhu5EgUXXhuqNuZyAtIE5nbmnFqSBIw6AgTuG7mWkgVGjDoW5n!5e0!3m2!1sen!2sca!4v1623555503647!5m2!1sen!2sca'></iframe>
      </div>
    </div>
  );
};

export default Contact;
