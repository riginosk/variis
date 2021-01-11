import React from 'react'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="wrapper grid">
                <div className="footer__newsletter">
                    <p>Get on the list to stay connected and up to date.</p>
                    <form className="form">
                        <input className="form__input" type="email" placeholder="Email address"/>
                        <input className="form__submit" type="submit" value="Subscribe"/>
                    </form>
                </div>
                <div className="footer__links">
                    <ul>
                        <li>My Account</li>
                        <li>Press Inquiries</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Careers</li>
                        <li>Bike Warranty</li>
                    </ul>
                </div>
                <div className="footer__social">
                    <p>Follow Us</p>
                    <ul>
                        <li>
                            <a href="/" className="footer__social-link">
                                <figure>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9 2.64643C10.8 7.34643 8.1 10.6464 4 10.9464C2.3 11.0464 1.1 10.4464 0 9.74643C1.1 9.94643 2.7 9.34643 3.6 8.54643C2.4 8.44643 1.6 7.74643 1.3 6.54643C1.7 6.64643 2.1 6.54643 2.3 6.54643C1.2 6.14643 0.4 5.44643 0.3 3.74643C0.6 3.94643 1 4.04643 1.3 4.04643C0.5 3.64643 -0.1 1.64643 0.6 0.446429C1.8 1.84643 3.3 3.14643 5.8 3.34643C5.1 0.446429 8.7 -1.05357 10.1 0.846429C10.8 0.746429 11.2 0.446429 11.7 0.246429C11.5 0.946429 11.1 1.34643 10.7 1.74643C11.2 1.64643 11.6 1.54643 12 1.34643C11.8 1.84643 11.3 2.24643 10.9 2.64643Z" fill="white" />
                                    </svg>

                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__social-link">
                                <figure>
                                    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.76 3.92V2.88C3.76 2.72 3.76 2.64 3.76 2.48C3.76 2.4 3.84 2.32 3.84 2.24C3.92 2.24 4 2.16 4.08 2.08C4.16 2.08 4.32 2 4.56 2H5.6V0H3.92C2.96 0 2.32 0.24 1.84 0.72C1.44 1.12 1.2 1.84 1.2 2.72V4H0V6.08H1.2V12H3.68V6H5.36L5.6 3.92H3.76Z" fill="white" />
                                    </svg>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__social-link">
                                <figure>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.65714 0H3.34286C1.45714 0 0 1.45714 0 3.34286V8.74286C0 10.5429 1.45714 12 3.34286 12H8.74286C10.5429 12 12.0857 10.5429 12.0857 8.65714V3.34286C12 1.45714 10.5429 0 8.65714 0ZM10.9714 8.65714C10.9714 9.85714 9.94286 10.8857 8.74286 10.8857H3.34286C2.14286 10.8857 1.11429 9.85714 1.11429 8.65714V3.34286C1.11429 2.14286 2.14286 1.11429 3.34286 1.11429H8.74286C9.94286 1.11429 10.9714 2.14286 10.9714 3.34286V8.65714Z" fill="white" />
                                        <path d="M6.00014 3.42871C4.543 3.42871 3.42871 4.543 3.42871 6.00014C3.42871 7.45728 4.543 8.57157 6.00014 8.57157C7.45728 8.57157 8.57157 7.45728 8.57157 6.00014C8.57157 4.543 7.45728 3.42871 6.00014 3.42871ZM6.00014 7.71443C5.05728 7.71443 4.28585 6.943 4.28585 6.00014C4.28585 5.05728 5.05728 4.28585 6.00014 4.28585C6.943 4.28585 7.71443 5.05728 7.71443 6.00014C7.71443 6.943 6.943 7.71443 6.00014 7.71443Z" fill="white" />
                                        <path d="M8.99986 2.57129C8.91415 2.57129 8.74272 2.657 8.657 2.657C8.657 2.74272 8.57129 2.91415 8.57129 2.99986C8.57129 3.08557 8.657 3.257 8.657 3.34272C8.74272 3.34272 8.91415 3.42843 8.99986 3.42843C9.08557 3.42843 9.257 3.34272 9.34272 3.34272C9.34272 3.257 9.42843 3.08557 9.42843 2.99986C9.42843 2.91415 9.34272 2.74272 9.34272 2.657C9.257 2.657 9.08557 2.57129 8.99986 2.57129Z" fill="white" />
                                    </svg>
                                </figure>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__secondary-links">
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer__copyright">
                    <p>©Equinox Media LLC 2019-2020. All rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;