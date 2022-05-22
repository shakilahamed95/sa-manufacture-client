import React from 'react';
import SingleTool from '../Home/SingleTool';
import useTools from '../hooks/useTools';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const AllAvailableTools = () => {
    const [tools] = useTools()
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-base-100 my-8'>
                <h1 className='text-3xl text-primary text-center font-bold my-6'> All Available Tools </h1>
                <div className='mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        tools.map(tool => <SingleTool
                            key={tool._id}
                            tool={tool}
                        ></SingleTool>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllAvailableTools;