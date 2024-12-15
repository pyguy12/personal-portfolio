import { ChevronDown } from 'lucide-react';
import { Outfit } from 'next/font/google';

// Initialize the font
const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
});

const Hero = () => {
    return (
        <main
            className={`min-h-screen bg-slate-50 flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative ${outfit.className}`}
        >
            <div className="max-w-5xl mx-auto">
                {/* Main content */}
                <div className="mb-6">
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-slate-900 tracking-tight leading-tight">
                        Hello, I'm
                        <br />
                        <span className="text-blue-600">Warren.</span>
                    </h1>
                </div>

                <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl mb-12 font-normal leading-relaxed">
                    Full Stack Engineer crafting thoughtful digital experiences. I combine technical expertise with an
                    eye for intuitive design to build products people love.
                </p>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#work"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                </div>
            </div>
        </main>
    );
};

export default Hero;
