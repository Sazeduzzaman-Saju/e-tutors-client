import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class=" text-center text-white" style={{ backgroundColor: "blueviolet" }}>

            <div class="container p-4 pb-0">

                <section class="mb-4">

                    <Link class="btn btn-outline-light btn-floating m-1" to="/#" role="button"
                    ><FaFacebook /></Link>

                    <Link class="btn btn-outline-light btn-floating m-1" to="/#" role="button"
                    ><FaInstagram /></Link>

                    <Link class="btn btn-outline-light btn-floating m-1" to="/#" role="button"
                    ><FaTwitter /></Link>

                    <Link class="btn btn-outline-light btn-floating m-1" to="/#" role="button"
                    ><FaGithub /></Link>
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