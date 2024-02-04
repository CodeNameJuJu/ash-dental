
import '../Main.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Home = () => {

    return (
        <div>
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-6">
                            <div class="text-center my-5">
                                <h1 class="display-5 fw-bolder text-white mb-2">ASH DENTAL</h1>
                                <p class="lead text-white-50 mb-4">Video </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <div class="ash-welcome">
                    <h2 class="heading2">Welcome to ASH Dental</h2>
                    <p>Our journey begins the moment you step into our practice, where a seamless and visually captivating design welcomes you.
                        We seamlessly blend state-of-the-art technology with a relaxing environment, ensuring a personalized experience from the outset.
                        Our commitment to understanding your unique needs unfolds in a consultation room, where together, we craft the best plan tailored to your individual requirements.
                        Transitioning from consultation to the dental treatment chair, we bring this personalized planning to life,
                        ensuring each step of your dental journey is marked by precision, comfort, and transformative care.</p>
                    <div class="divider"></div>
                </div>

            </div>
            <section class="meet-artists">
                <h2 class="home-h2">Meet Our Dental Artists</h2>
                <p class="home-p" >Our team at ASH Dental is a collective of skilled professionals, each bringing a unique set of expertise
                    and passion to the practice. We are not just dental professionals; we are artists dedicated to creating
                    smiles that reflect the true beauty within each person.</p>
                <a href="#" class="btn btn-gold">Click here to read more</a>
                <img class="home-img" src="./public/images/Dent1.jpg" alt=""></img>
            </section>

            <div>
                <section class="meet-artists">
                    <h2 class="home-h2">A Journey to Transformative Smiles</h2>
                    <p class="home-p" >We envision a world where every smile tells a story of confidence, health, and individuality. We
                        strive to be pioneers in cosmetic and general dentistry, setting new standards for precision, artistry,</p>
                    <a href="#" class="btn btn-gold">Click here to read more</a>
                </section>
            </div>
        </div>
    )
}
export default Home;