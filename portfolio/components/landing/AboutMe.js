import React from 'react';
import { RocketIcon, CodeIcon, SparklesIcon } from 'lucide-react';

const AboutMe = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left side - Main content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-slate-900">About Me</h2>

                        <div className="space-y-6 text-lg text-slate-600">
                            <p>
                                I'm a Full Stack Engineer based in Fort Worth, Texas, graduating from the University of
                                Texas at Dallas with a degree in Computer Science. I'm passionate about creating
                                thoughtful digital experiences that combine technical excellence with intuitive design.
                            </p>

                            <p>
                                My journey started with a deep dive into algorithms and data structures, which led me to
                                create DSA Steps—a platform that's revolutionizing how people learn programming. What
                                sets me apart is my commitment to both engineering precision and user experience; I
                                believe great software should be both powerful and a pleasure to use.
                            </p>

                            <p>
                                When I'm not coding, I'm often gaming—a hobby that inspired me to create Mechabellum
                                Assistant, helping thousands of players make better strategic decisions. This blend of
                                technical expertise and user empathy defines my approach to every project.
                            </p>
                        </div>

                        {/* Value props */}
                        <div className="grid grid-cols-3 gap-8">
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <RocketIcon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-slate-900">Entrepreneur</h3>
                                <p className="text-slate-600 text-sm">Building products that solve real problems</p>
                            </div>

                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <CodeIcon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-slate-900">Engineer</h3>
                                <p className="text-slate-600 text-sm">Creating robust, scalable solutions</p>
                            </div>

                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <SparklesIcon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-slate-900">Designer</h3>
                                <p className="text-slate-600 text-sm">Crafting beautiful experiences</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="bg-blue-50 rounded-3xl p-6">
                        <img
                            src="/images/profile_image.jpg"
                            alt="Warren Wu"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
