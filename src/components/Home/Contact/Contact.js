import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container" id="contact">
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <div className='mt-5 text-center pt-5'>
                            <h2 className=''>Get In Touch</h2>
                        </div>
                        <form className="p-5" method="post" data-form-title="CONTACT US">
                            <input type="hidden" data-form-email="true"></input>
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" required="" placeholder="Name" data-form-field="Name"></input>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" required="" placeholder="Email Address" data-form-field="Email"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" placeholder="Subject" data-form-field="Subject"></input>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" placeholder="Message" rows="3" data-form-field="Message"></textarea>
                            </div>
                            <div className="mx-auto mt-3" style={{ width: '150px' }}>
                                <button type="submit" value="send" className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Contact;