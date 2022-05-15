import React from 'react';
import Buketgirl from '../../assets/images/bucketgirl.png';

const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16 pb-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='max-w-xl'>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            className='text-xl'>Best Quality</p>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="1500"
                            data-aos-duration="1000"
                            class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button
                            data-aos="zoom-in"
                            data-aos-delay="2000"
                            data-aos-duration="2000"
                            class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='shrink-0 h-[60vh]'>
                        <img src={Buketgirl} alt='' class="h-full" />
                    </div>
                </div>
            </div>
            <div className='bg-base-200 md:w-5/6 mx-auto relative z-50 mt-[-20px] p-10 rounded-2xl shadow-lg'>
                <div className='text-primary text-2xl mb-5'>
                    <h1>Get Free Estimate</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button class="btn btn-primary mt-5">Request a Quote</button>
            </div>
        </>
    );
};

export default Landing;