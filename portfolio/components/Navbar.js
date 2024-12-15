'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <span className="text-xl font-bold text-blue-600">warren.wu</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#work" className="text-slate-600 hover:text-blue-600 transition-colors">
                            Work
                        </a>
                        <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
                            About
                        </a>
                        <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">
                            Skills
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white">
                    <div className="px-4 py-2 space-y-1">
                        <a
                            href="#work"
                            className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                        >
                            Work
                        </a>
                        <a
                            href="#about"
                            className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            href="#contact"
                            className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
