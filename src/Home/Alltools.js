import React from 'react';
import useTools from '../hooks/useTools';
import SingleTool from './SingleTool';

const Alltools = () => {
    const [tools, setTools] = useTools()
    if (tools.length > 6) {
        const newTools = tools.slice(0, 6)
        setTools(newTools)

    }
    return (
        <div className='bg-base-100 my-8 container' data-aos='zoom-in-right'
            data-aos-duration='1000'
            data-aos-delay='200'>
            <h1 className='text-3xl text-primary text-center font-bold my-24'> Available Tools </h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 '>
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