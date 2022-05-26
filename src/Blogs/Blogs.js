import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className='text-3xl text-center text-primary my-6'>Welcome To My Blog Page</h1>
                <div>
                    <div className=''>
                        <h2 className='text-xl text-black'>Question :How will you improve the performance of a React Application?</h2>
                        <p> To improve the performance of a react application  we can follow several technique.We can keep component state local where necessary to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code We can use Memoization which saves the result in memory, and returns the cached result for the same input.We can use several hooks that prevent duplication on code and make code cleaner. We can optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.By using code-splitting in our app we can also improve the performance of our react app.</p>

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;