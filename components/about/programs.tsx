import React from 'react';
import Link from 'next/link';
import Header from '../header';

const listOfPrograms = [
    {
        name: 'Access to primary healthcare',
        link: '#'
    },
    {
        name: 'Sexual reproductive health and rights',
        link: '#'
    },
    {
        name: 'Access to quality education and vocational training',
        link: '#'
    },
    {
        name: 'Women Empowerment',
        link: '#'
    },
    {
        name: 'Social inclusion',
        link: '#'
    }
]

function ListPrograms({ name, link }: { name: string, link: string }) {
    return (
        <div className='flex flex-col gap-4 px-8 py-8 bg-white border border-neutral-200 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-0.5'>
            <div className='font-bold text-xl lg:text-2xl text-[#111]'>{name}</div>
            <Link href={link} className='text-sm text-primary font-semibold flex items-center gap-2 group'>
                Learn More
                <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M9 5l7 7-7 7" />
                </svg>
            </Link>
        </div>
    )
}

function OurPrograms() {
    return (
        <section className='bg-neutral-50 py-20 lg:py-28 px-4 lg:px-8 xl:px-20'>
            <div className='max-w-7xl mx-auto flex flex-col gap-12'>
                <div className="text-center max-w-3xl mx-auto">
                    <Header content="Our Programs" />
                    <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
                        Explore our comprehensive programs designed to empower communities and transform lives.
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        listOfPrograms.map((program, index) => (
                            <ListPrograms key={index} name={program.name} link={program.link} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurPrograms