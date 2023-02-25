import { Container } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import monitor_image from "../assets/icon-4.png"
import book_image from "../assets/icon-5.png"
const ContactUs = () => {
  return (

    <>
      <NavigationBar/>
      <Container>
        <section className="page-header">
                <h2>Tell us about yourself</h2>
                <h5>Whether you have questions or you would just like to say hello, contact us.</h5>
        </section>
        <section className="contact-content">
                <div className="contact-widget media">
                    <img src={monitor_image} alt="monitor" width="50px"/>
                    <div className="media-body">
                        <h6 className="widget-title">Production Office</h6>
                        <p className="widget-content">hello@youriste.com</p>
                    </div>
                </div>
                <div className="contact-widget media">
                    <img src={book_image} alt="book" width="40px"/>
                    <div className="media-body">
                        <h6 className="widget-title">Administration Office</h6>
                        <p className="widget-content">hello@youriste.com</p>
                    </div>
                </div>
        </section>
        <section className="contact-form-wrapper">
                <form action="index.html">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label for="name">YOUR NAME <sup>*</sup></label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name *"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="email">YOUR EMAIL ADDRESS <sup>*</sup></label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="feeney.matteo@schmeler.com"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label for="subject">SUBJECT <sup>*</sup></label>
                            <input type="text" className="form-control" id="name" name="subject" placeholder="Development"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="phone">YOUR PHONE NUMBER <sup>*</sup></label>
                            <input type="text" className="form-control" id="phone" name="phone" placeholder="635-396-9570"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12">
                            <label for="message">HOW CAN WE HELP YOU? <sup>*</sup></label>
                            <textarea name="message" id="message" className="form-control" rows="7" placeholder="Hi there, I would like to ..."></textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mb-4">Submit</button>
                        <p className="form-footer-text">We'll get back to you in 1-2 business days.</p>
                    </div>
                </form>
            </section>
      </Container>
    </>
  );
};

export default ContactUs;
