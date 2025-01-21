
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm in the hero lol</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Hero Section but..</span>{" "}
                        <br />
                        developer
                    </h1>
                    <p className="hero--section-description">I'm the hero section description!
                        <br /> description's break tag
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
        <div className="hero--section--img">
            <img src="./img/hero_img.png" alt="Hero Section"></img>
        </div>

        </section>
    );
}