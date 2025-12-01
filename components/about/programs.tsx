import React from 'react';
import Header from '../header';

interface Program {
    name: string;
    description: string;
    icon: React.ReactNode;
}

const listOfPrograms: Program[] = [
    {
        name: 'Access to primary healthcare',
        description: 'We believe that health is a fundamental human right. Through our primary healthcare initiatives, we provide essential medical services, health education, and preventive care to underserved communities. Our mobile clinics and community health programs ensure that families receive the care they need, when they need it, regardless of their economic circumstances.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        name: 'Sexual reproductive health and rights',
        description: 'Empowering individuals with knowledge and access to comprehensive sexual and reproductive health services is at the heart of our mission. We provide safe spaces for education, counseling, and support, ensuring that every person can make informed decisions about their health and future. Our programs break down barriers and create pathways to dignity and well-being.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    },
    {
        name: 'Access to quality education and vocational training',
        description: 'Education is the cornerstone of transformation. We create opportunities for learning that extend beyond traditional classrooms, offering vocational training programs that equip individuals with practical skills for sustainable livelihoods. From literacy programs to technical workshops, we invest in human potential and open doors to brighter futures.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        name: 'Women Empowerment',
        description: 'When women thrive, communities flourish. Our empowerment programs provide women with the tools, resources, and support they need to become leaders, entrepreneurs, and change-makers. Through mentorship, skills development, and advocacy, we help women break cycles of poverty and create lasting impact in their families and communities.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        )
    },
    {
        name: 'Social inclusion',
        description: 'Every person deserves to belong. Our social inclusion initiatives create bridges between communities, fostering understanding, acceptance, and mutual support. We work to eliminate discrimination, provide opportunities for marginalized groups, and build inclusive societies where diversity is celebrated and everyone has a voice.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    }
]

interface ListProgramsProps {
    name: string;
    description: string;
    icon: React.ReactNode;
}

const ListPrograms: React.FC<ListProgramsProps> = ({ name, description, icon }) => {
    return (
        <div className='group flex flex-col gap-6 px-6 py-8 bg-white border border-neutral-200 rounded-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden'>
            {/* Decorative gradient overlay on hover */}
            <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
            
            <div className='relative z-10 flex flex-col gap-6'>
                {/* Icon container */}
                <div className='w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110'>
                    {icon}
                </div>
                
                {/* Content */}
                <div className='flex flex-col gap-4 flex-1'>
                    <h3 className='font-bold text-xl lg:text-2xl text-[#111] leading-tight group-hover:text-primary transition-colors duration-300'>
                        {name}
                    </h3>
                    <p className='text-sm lg:text-base text-neutral-600 leading-relaxed line-clamp-4'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

const OurPrograms: React.FC = () => {
    return (
        <section className='bg-neutral-50 py-20 lg:py-28 px-4 lg:px-8 xl:px-20'>
            <div className='max-w-7xl mx-auto flex flex-col gap-16'>
                <div className="text-center max-w-3xl mx-auto">
                    <Header content="Our Programs" />
                    <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
                        Explore our comprehensive programs designed to empower communities and transform lives through sustainable, impactful initiatives.
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        listOfPrograms.map((program, index) => (
                            <ListPrograms 
                                key={index} 
                                name={program.name} 
                                description={program.description}
                                icon={program.icon}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurPrograms