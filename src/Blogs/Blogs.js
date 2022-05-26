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
                    <div className=' border p-4 mb-6 text-black'>
                        <h2 className='text-xl text-black'>Question :How will you improve the performance of a React Application?</h2>
                        <p> To improve the performance of a react application  we can follow several technique.We can keep component state local where necessary to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code We can use Memoization which saves the result in memory, and returns the cached result for the same input.We can use several hooks that prevent duplication on code and make code cleaner. We can optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.By using code-splitting in our app we can also improve the performance of our react app.</p>

                    </div>
                    <div className=' border p-4 mb-6 text-black' >
                        <h2 className='text-xl text-black'>Question :What are the different ways to manage a state in a React application?</h2>
                        <p>
                            There are 4 main types of state to manage state in react applicatopn. They are :Local state React,Global state,Server state ,URL state. UseState is a Local State in React  can take accept any valid data value, including primitive and object values. React components have a built-in state object where the state is encapsulated data where we store assets that are persistent between component renderings.
                        </p>
                    </div>
                    <div className=' border p-4 mb-6 text-black'>
                        <h2 className='text-xl text-black'>Question :How does prototypical inheritance work?</h2>
                        <p>
                            Prototypical inharitance can be define as a method by which an object can inherit the properties and methods of another object. Inheritance in JavaScript describes the notion that one object's methods/properties are available to be used via another object. The way this happens is that the second object is connected to the first via the Prototype system. When we try to use the method/property on the second object, even thought it doesn't exist there,we have the ability to do so, because the second object are likely child the first object, that does have the desired property/method.We can only send methods/properties from upstage to downstage.If we change any property or methods from the firt object then the properties or method of other object will automatically change.
                        </p>
                    </div>

                    <div className=' border p-4 mb-6 text-black'>
                        <h2 className='text-xl text-black'>Question :Why you do not set the state directly in React?</h2>
                        <p>There are some reasons why we do not set the state directly in react.When we update the state of a component all it's children are going to be rendered as well or our entire component tree rendered.If we set the state directly we will lose the control all of thoes component.But when we say our entire component tree is rendered that doesn't mean that the entire DOM is updated. when a component is rendered we basically get a react element, so that is updating our virtual dom.If we update any state directly  we may just replace the update we made.When we directly update the state, it does not change the state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                    </div>
                    <div className=' border p-4 mb-6 text-black'>
                        <h2 className='text-xl text-black'>Question : You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>

                        <p>If we have an array of products in which each product has a name and if we want to finds products by name we can use find,filter or includes method. If we use find method and find by name it will return us the first name  in the array that satisfies the provided testing conndition. If we use the filter method that will return us a new array where all products contais the similar name and that are matched with the search text.But if we use the includes method we will get a new array that contains all the product name that have the name includes search text.  Arry .includes method does not need to match the total name.</p>
                    </div>
                    <div className=' border p-4 mb-6 text-black'>
                        <h2 className='text-xl text-black'>Question : What is a unit test? Why should write unit tests?</h2>

                        <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. Unit Test can be Manual or Autometed. We should write unit tests because unit testing simplifies the debugging process.Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.Well-written unit tests act as documentation for our code and we  can quickly look at our tests and know the purpose of our functions.</p>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;