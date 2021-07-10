import React from 'react'
import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero-main">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <h1>
                        Sushi Junai2
                    </h1>
                    
                    <h4>
                    Unassuming storefront with a stylish interior for sushi, Japanese entrees & all-you-can-eat options.
                    </h4>
                    <div className="hero-options">
                        <p>
                            Go to online order
                            <a href="/"><i class="fas fa-arrow-circle-right"></i></a>
                        </p>

                    </div>
                    <div className="hero-options">
                        <p>
                        Make a reservation
                        <a href="/"><i class="fas fa-arrow-circle-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero
