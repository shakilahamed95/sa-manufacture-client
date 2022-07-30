import React from 'react';

const Expert = ({ name, post, img }) => {
    return (
        <div className="card w-96 bg-base-100 ml-12">
            {/* <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" style={{ width: '300px', height: "250px" }} className="avatar w-34 rounded-full" />
            </figure> */}
            <div className="avatar">
                <div className="w-60 rounded-full ml-20">
                    <img src={img} alt='' />
                </div>
            </div>
            <div className="card-body mt-4 text-center">
                <h2 className="text-2xl font-medium">{name}</h2>
                <h2 className='text-xl font-medium'>{post}</h2>
                <div className='flex items-center justify-center mt-3'>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" style={{ color: "#1877F2" }}> <i className="fab fa-facebook-square mr-3 text-xl"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" style={{ color: "#017FBB" }}>  <i className="fab fa-linkedin mr-3 text-xl"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" style={{ color: "#1C9CEA" }}> <i className="fab fa-twitter text-xl"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Expert;