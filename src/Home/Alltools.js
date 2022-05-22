import React from 'react';
import useTools from '../hooks/useTools';
import SingleTool from './SingleTool';

const Alltools = () => {
    const [tools] = useTools()
    return (
        <div className='bg-base-100 my-8'>
            <h1 className='text-3xl text-primary text-center font-bold my-6'> Available Tools </h1>
            <div className='mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <SingleTool
                        key={tool._id}
                        tool={tool}
                    ></SingleTool>)
                }

            </div>
        </div>
    );
};

export default Alltools;