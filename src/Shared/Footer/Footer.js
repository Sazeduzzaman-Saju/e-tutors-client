import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class=" text-center text-white" style={{ backgroundColor: "blueviolet" }}>

            <div class="container p-4 pb-0">

                <section class="mb-4">

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><FaFacebook /></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><FaInstagram /></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><FaTwitter /></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><FaGithub /></a>
                </section>

            </div>

            <div class="text-center p-3" style={{ backgroundColor: "blueviolet" }} >
                © 2020 Copyright:
                <Link class="text-white" to="/"> Mr.Perfect </Link>
            </div>
        </footer>
    );
};

export default Footer;