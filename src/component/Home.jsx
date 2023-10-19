import React from "react";
import Products from "./products";


const Home = () => {
    return (
        <div className="hero">
            <div class="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="Background" height="855px"/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 class="card-title display-3 fw-bolder mb-0">FOR SPRING IN SUMMER</h5>
                    <p class="card-text lead fs-2">
                    FASHION FIT : LOOK DIVINE, LOVE YOUR WEARS!
                    </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;
