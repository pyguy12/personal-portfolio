import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, subtitle, description, image, tags, demoLink, githubLink, metrics }) => (
    <div className="grid lg:grid-cols-5 gap-8 mb-24 last:mb-0">
        {/* Project Image - Takes up 3 columns */}
        <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-xl aspect-video bg-slate-800">
                <img src={image} alt={title} className="object-cover w-full h-full" />
            </div>

            {/* Action buttons always visible */}
            <div className="flex gap-4 mt-4">
                <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                    <ExternalLink className="w-4 h-4" />
                    Visit Site
                </a>
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        View Code
                    </a>
                )}
            </div>
        </div>

        {/* Project Info - Takes up 2 columns */}
        <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-blue-600 font-medium">{subtitle}</p>
                </div>

                <p className="text-slate-600">{description}</p>

                {/* Key Metrics */}
                <div className="space-y-3">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-1 h-1 rounded-full bg-blue-600 mt-3" />
                            <p className="text-slate-600">{metric}</p>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const FeaturedProjects = () => {
    const projects = [
        {
            title: 'DSA Steps',
            subtitle: 'Educational Platform',
            description:
                'A revolutionary learning platform that helps developers master coding interviews through pattern recognition and systematic learning.',
            image: '/images/dsa_steps.png',
            tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Next.js'],
            demoLink: 'https://dsasteps.com',
            metrics: [
                '93.8% first-attempt solving success rate with 113+ problems solved',
                '90.7% success rate on medium-difficulty problems vs. industry average of 25-50%',
                'Comprehensive pattern-based learning system with 97.4% pattern recognition accuracy',
            ],
        },
        {
            title: 'Mechabellum Assistant',
            subtitle: 'Gaming Strategy Tool',
            description:
                'An advanced unit counter system helping thousands of players make better strategic decisions in real-time gameplay.',
            image: '/images/mechabellum_assistant.png',
            tags: ['React', 'TypeScript', 'Redux', 'Framer Motion', 'Tailwind CSS'],
            demoLink: 'https://mechabellum-assistant.com',
            githubLink: 'https://github.com/pyguy12/mechabellum-composition-calculator',
            metrics: [
                'Serving 3,000+ active users in the gaming community',
                '24-hour turnaround on user-requested features',
                'Privacy-compliant analytics integration',
            ],
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                    <p className="text-lg text-slate-600">
                        Here are some of my recent projects that showcase my expertise in full-stack development and
                        UI/UX design.
                    </p>
                </div>

                <div className="space-y-24">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
