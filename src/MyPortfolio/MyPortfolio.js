import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import myimg from '../Images/myimg.jpg'

const MyPortfolio = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={myimg} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 className='text-2xl text-black text-center'> Name:Md.Shakil Ahamed</h2>
                        <h2 className='text-2xl text-black text-center'> Email:shakilahamed.ict.iu@gmail.com</h2>
                        <h2 className='text-2xl text-black text-center'> My Skills:React,Nodejs,Mongodb,Express js,Bootstrap,Tailwind</h2>
                        <h2 className='text-2xl text-black text-center'>My Recent Project:</h2>
                        <h2 className='text-2xl text-black text-center'> <a href="https://monumental-marigold-1d6491.netlify.app/"> Laptop Warehouse</a><span>,</span> <a href="https://zippy-raindrop-d0d504.netlify.app/">Dentist website</a> <span>,</span> <a href="https://biker-review.netlify.app/">Bikers Review</a></h2>

                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-3xl text-primary text-center mt-6'>Educational background</h2>
                <table class="table w-full my-5">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th> Exam Name</th>
                            <th>Group/Subject</th>
                            <th>Passing Year</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>SSC</td>
                            <td>Science</td>
                            <td>2011</td>
                            <td>GPA-5</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>HSC</td>
                            <td>Science</td>
                            <td>2013</td>
                            <td>GPA-5</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>B.Sc(Honours)</td>
                            <td>Information and Communication Technology</td>
                            <td>2019</td>
                            <td>CGPA-3.39</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>M.Sc(Engg.)</td>
                            <td>Information and Communication Technology</td>
                            <td>2022</td>
                            <td>CGPA-3.48</td>
                        </tr>


                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;