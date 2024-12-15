import Hero from '../components/landing/Hero';
import Navbar from '../components/Navbar';
import FeaturedProjects from '../components/landing/FeaturedProjects';
import ExpertiseShowcase from '../components/landing/ExpertiseShowcase';
import AboutMe from '../components/landing/AboutMe';
import SkillsSection from '../components/landing/SkillsSection';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedProjects />
            <ExpertiseShowcase />
            <SkillsSection />
            <AboutMe />
            <Contact />
            <Footer />
        </>
    );
}
