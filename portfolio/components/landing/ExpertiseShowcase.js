'use client';
import React from 'react';
import { useState } from 'react';
import {
    RocketIcon,
    UsersIcon,
    BrainIcon,
    LayoutIcon,
    TargetIcon,
    ShieldIcon,
    CodeIcon,
    DatabaseIcon,
    CloudIcon,
    PaletteIcon,
} from 'lucide-react';

const Tab = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 text-sm font-medium rounded-lg transition-all ${
            active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }`}
    >
        {children}
    </button>
);

const BusinessCard = ({ title, headline, metrics, description, icon: Icon }) => (
    <div className="relative p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-600/20 transition-all">
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-blue-100/50">
                <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        </div>

        <p className="text-lg font-medium text-blue-600 mb-4">{headline}</p>

        <div className="space-y-4 mb-6">
            {metrics.map((metric, index) => (
                <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1 h-1 rounded-full bg-blue-600 mt-3" />
                    <p className="text-slate-600">{metric}</p>
                </div>
            ))}
        </div>

        <p className="text-slate-600 italic">{description}</p>
    </div>
);

const TechnicalCard = ({ title, techStack, implementations, achievements, icon: Icon }) => (
    <div className="relative p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-600/20 transition-all">
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-blue-100/50">
                <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        </div>

        <div className="space-y-6">
            <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Implementations</h4>
                <ul className="space-y-2">
                    {implementations.map((impl, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-600">
                            <span className="text-blue-600">•</span>
                            <span>{impl}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">Technical Achievements</h4>
                <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-600">
                            <span className="text-blue-600">•</span>
                            <span>{achievement}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const ExpertiseShowcase = () => {
    const [activeView, setActiveView] = useState('business');

    const businessAchievements = [
        {
            title: 'Educational Innovation',
            icon: BrainIcon,
            headline: 'Revolutionizing How People Learn to Code',
            metrics: [
                '94% of students solve advanced problems on their first try—nearly 4x the industry average',
                '90% success rate on medium-difficulty problems vs industry average of 25-50%',
                '2-week journey from beginner to advanced problem-solving',
            ],
            description:
                'Created a breakthrough learning system that makes complex programming concepts accessible to everyone.',
        },
        {
            title: 'Product Development',
            icon: RocketIcon,
            headline: 'Building Products People Love',
            metrics: [
                '3,000+ active users on gaming assistant platform',
                '24-hour response time to user feedback',
                'Built and launched two successful platforms from scratch',
            ],
            description: 'Track record of creating and scaling user-focused applications that solve real problems.',
        },
        {
            title: 'Enterprise Impact',
            icon: TargetIcon,
            headline: 'Driving Business Efficiency',
            metrics: [
                'Improved team efficiency by 20% at a major financial firm',
                'Supporting mission-critical systems at a Fortune 100 company',
                '100% success rate in project deliveries',
            ],
            description: 'Proven ability to deliver high-impact solutions for enterprise-level challenges.',
        },
        {
            title: 'Customer Success',
            icon: UsersIcon,
            headline: 'Putting Users First',
            metrics: [
                '97% pattern recognition accuracy in learning platform',
                'Thousands of daily active users across platforms',
                'Consistently high user satisfaction ratings',
            ],
            description: 'Focused on creating intuitive experiences that delight users and exceed expectations.',
        },
        {
            title: 'Technical Leadership',
            icon: BrainIcon,
            headline: 'Leading Complex Projects',
            metrics: [
                'Led full development lifecycle of multiple successful products',
                'Built and managed multi-deployment infrastructure',
                'Integrated complex systems including payment processing',
            ],
            description: 'Successfully managing all aspects of technical projects from conception to deployment.',
        },
        {
            title: 'Design Excellence',
            icon: PaletteIcon,
            headline: 'Engineering Meets Beautiful Design',
            metrics: [
                'Created interfaces that rival professional design agencies',
                "Built products that users describe as 'clean and intuitive'",
                'Seamlessly blending complex functionality with simple user experiences',
            ],
            description:
                "Bringing a designer's eye to engineering, creating products that don't just work well—they look and feel great.",
        },
    ];

    const technicalAchievements = [
        {
            title: 'Full Stack Development',
            icon: CodeIcon,
            techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'PostgreSQL'],
            implementations: [
                'Architected and implemented multi-deployment infrastructure with SSR',
                'Built real-time unit counter system for gaming platform',
                'Developed automated subscription management with Stripe integration',
            ],
            achievements: [
                '93.8% first-attempt solving success rate in learning platform',
                'Serving 3,000+ daily active users',
                'Implemented server-side rendering boosting SEO performance',
            ],
        },
        {
            title: 'Database & Backend',
            icon: DatabaseIcon,
            techStack: ['PostgreSQL', 'Node.js', 'Express', 'Sequelize ORM'],
            implementations: [
                'Designed multi-dimensional performance tracking system',
                'Implemented scalable backend services on Railway',
                'Built automated subscription management system',
            ],
            achievements: [
                'Migrated 70+ stored procedures to Java Prepared Statements',
                'Enhanced database flexibility for financial markets',
                'Designed efficient data schema for educational platform',
            ],
        },
        {
            title: 'Frontend Development',
            icon: LayoutIcon,
            techStack: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Framer Motion'],
            implementations: [
                'Created responsive single-page applications',
                'Built interactive educational content delivery system',
                'Developed real-time game analysis interface',
            ],
            achievements: [
                'Improved client configuration team efficiency by 20%',
                'Implemented 3 user-requested features within 24 hours',
                'Built intuitive interfaces for complex technical concepts',
            ],
        },
        {
            title: 'Testing & Quality',
            icon: ShieldIcon,
            techStack: ['JUnit', 'Jest'],
            implementations: [
                'Developed comprehensive test suites for enterprise systems',
                'Implemented automated CI/CD pipelines',
                'Created regression testing framework',
            ],
            achievements: [
                'Developed 70+ JUnit regression tests',
                'Maintained 100% functionality parity',
                'Zero critical bugs in production',
            ],
        },
        {
            title: 'DevOps & Infrastructure',
            icon: CloudIcon,
            techStack: ['Vercel', 'Railway', 'Git'],
            implementations: [
                'Set up multi-deployment infrastructure for optimal performance',
                'Implemented automated deployment pipelines',
                'Configured monitoring and analytics systems',
            ],
            achievements: [
                'Achieved 99.9% uptime',
                'Reduced deployment time by 80%',
                'Optimized performance across multiple platforms',
            ],
        },
        {
            title: 'UI/UX Engineering',
            icon: PaletteIcon,
            techStack: ['Tailwind CSS', 'Framer Motion', 'Figma', 'CSS Animations', 'Responsive Design'],
            implementations: [
                'Built reusable component libraries with consistent design language',
                'Implemented responsive designs that work flawlessly across all devices',
                'Created smooth animations and transitions for enhanced user experience',
            ],
            achievements: [
                'Reduced design implementation time by 40% using systematic approach',
                'Built pixel-perfect interfaces matching design specifications',
                'Designed and Implemented 20+ accessible user interfaces',
            ],
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Excellence</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Transforming complex technical challenges into successful, user-loved solutions
                    </p>

                    <div className="flex justify-center gap-4">
                        <Tab active={activeView === 'business'} onClick={() => setActiveView('business')}>
                            Business Impact
                        </Tab>
                        <Tab active={activeView === 'technical'} onClick={() => setActiveView('technical')}>
                            Technical Deep Dive
                        </Tab>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activeView === 'business'
                        ? businessAchievements.map((achievement) => (
                              <BusinessCard key={achievement.title} {...achievement} />
                          ))
                        : technicalAchievements.map((achievement) => (
                              <TechnicalCard key={achievement.title} {...achievement} />
                          ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseShowcase;
