
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Sajid</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Computer Science</span>{" "}
                        <br />
                        Student
                    </h1>
                    <p className="hero--section-description">Solving Problems with Code | Software Enthusiast
                        {/*<br /> description's break tag*/}
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
        <div className="hero--section--img">
            <img src="./img/ProfilePhoto.png" alt="Hero Section"></img>
        </div>

        </section>
    );
}
