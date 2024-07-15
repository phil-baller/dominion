import React from 'react';
import Link from 'next/link';


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
        <div className='flex flex-col gap-2 px-6 py-6 lg:w-auto w-full bg-white shadow-md shadow-gray-300 rounded-sm'>
            <div className='font-medium text-xl text-neutral-800 w-48'>{name}</div>
            <Link href={link}>
                <div className='text-sm text-primary'>Learn More</div>
            </Link>
        </div>
    )
}

function OurPrograms() {
    return (
        <div className='w-container flex flex-col justify-center bg-white lg:px-16 px-4 pb-8'>
            <div className='font-bold lg:text-3xl text-2xl my-2 text-neutral-800'>Our Programs</div>
            <div className='flex flex-wrap gap-4'>
                {
                    listOfPrograms.map((program, index) => (
                        <ListPrograms key={index} name={program.name} link={program.link} />
                    ))
                }
            </div>
        </div>
    )
}

export default OurPrograms