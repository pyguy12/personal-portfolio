import React from 'react';

const SkillCategory = ({ title, skills }) => (
    <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const SkillsOverview = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'Tailwind CSS', 'Framer Motion'],
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express', 'PostgreSQL', 'RESTful APIs', 'SQL'],
        },
        {
            title: 'Languages',
            skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL'],
        },
        {
            title: 'Tools & Platforms',
            skills: ['Git', 'Vercel', 'Railway', 'Contentful', 'Stripe', 'AWS S3'],
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Skills & Technologies</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {skillCategories.map((category) => (
                            <SkillCategory key={category.title} title={category.title} skills={category.skills} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsOverview;
