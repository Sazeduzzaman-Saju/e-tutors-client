import React from 'react';
import "./Testimonial.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    return (
        <div >
            <OwlCarousel
                className='owl-theme'
                loop
                margin={10}
                nav
                pagination="false"
                items="1"
                autoplay
            >
                <div class='item mt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo quam, omnis, quod atque possimus odio delectus expedita molestias itaque consequuntur unde temporibus blanditiis doloribus error, ea sed velit corporis!</p>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img style={{ width: "50px", height: "50px" }} className="rounded-circle" alt="50x50"
                            src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                        <p>Tom Crush</p>
                    </div>
                </div>
                <div class='item mt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo quam, omnis, quod atque possimus odio delectus expedita molestias itaque consequuntur unde temporibus blanditiis doloribus error, ea sed velit corporis!</p>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img style={{ width: "50px", height: "50px" }} className="rounded-circle" alt="50x50"
                            src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                        <p>Tom Crush</p>
                    </div>
                </div>
                <div class='item mt-5 '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo quam, omnis, quod atque possimus odio delectus expedita molestias itaque consequuntur unde temporibus blanditiis doloribus error, ea sed velit corporis!</p>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img style={{ width: "50px", height: "50px" }} className="rounded-circle" alt="50x50"
                            src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                        <p>Tom Crush</p>
                    </div>
                </div>
                <div class='item mt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo quam, omnis, quod atque possimus odio delectus expedita molestias itaque consequuntur unde temporibus blanditiis doloribus error, ea sed velit corporis!</p>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img style={{ width: "50px", height: "50px" }} className="rounded-circle" alt="50x50"
                            src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                        <p>Tom Crush</p>
                    </div>
                </div>
                <div class='item mt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo quam, omnis, quod atque possimus odio delectus expedita molestias itaque consequuntur unde temporibus blanditiis doloribus error, ea sed velit corporis!</p>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img style={{ width: "50px", height: "50px" }} className="rounded-circle" alt="50x50"
                            src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                        <p>Tom Crush</p>
                    </div>
                </div>
                <div class='item mt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo quam, omnis, quod atque possimus odio delectus expedita molestias itaque consequuntur unde temporibus blanditiis doloribus error, ea sed velit corporis!</p>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img style={{ width: "50px", height: "50px" }} className="rounded-circle" alt="50x50"
                            src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                        <p>Tom Crush</p>
                    </div>
                </div>
                <div class='item mt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo quam, omnis, quod atque possimus odio delectus expedita molestias itaque consequuntur unde temporibus blanditiis doloribus error, ea sed velit corporis!</p>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img style={{ width: "50px", height: "50px" }} className="rounded-circle" alt="50x50"
                            src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                        <p>Tom Crush</p>
                    </div>
                </div>
                <div class='item mt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo quam, omnis, quod atque possimus odio delectus expedita molestias itaque consequuntur unde temporibus blanditiis doloribus error, ea sed velit corporis!</p>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img style={{ width: "50px", height: "50px" }} className="rounded-circle" alt="50x50"
                            src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                        <p>Tom Crush</p>
                    </div>
                </div>
                <div class='item mt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo quam, omnis, quod atque possimus odio delectus expedita molestias itaque consequuntur unde temporibus blanditiis doloribus error, ea sed velit corporis!</p>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img style={{ width: "50px", height: "50px" }} className="rounded-circle" alt="50x50"
                            src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                        <p>Tom Crush</p>
                    </div>
                </div>
            </OwlCarousel>
        </div >
    );
};

export default Testimonial;