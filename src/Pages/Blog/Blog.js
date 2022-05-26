import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl mb-2 mt-3'>How will you improve the performance of a React Application?</h1>
            <p>A devoloper has been encontering about performance of application and bound to face this issues . <br />
                 React is one such example of ui framework which is one of the best in term of performance <br />
                In react a devoloper can sort out more than halg performance issues by analyzing how components interacted. <br /> 
                Profiling components using chorme browser.
                Using the relevent package. We should avoid modifying the state if there is no change in state from <div className="br"></div>
                Remove unnecessary awaits.
                  </p>
                  <h1 className='text-3xl mb-2 mt-3'>What are the different ways to manage a state in a React application?</h1>
                  <p>There are four main types of state to manage in React ... <br />
                      1 Local State. <br />
                      2 Global state .<br />
                      3 Server state .<br />
                      4 URL state .

                  </p>

                  <h1 className='text-3xl mb-2 mt-3'>
                  How does prototypical inheritance work? 
                  </h1>
                  <p>javaScript is a prototype-based, object oriented programming language <br />
                      After the ES6 updates, javaScript allowed for prototypal inheritance that <br />
                      mean that object can be shared , extended.
                      The methode cand inherit <br /> the properties and methods of another object. <br />

                  </p>

                  <h1 className='text-2xl mb-2 mt-3'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                  <p> React components are components that state with the updated state to decide if the components needs to be-renderd. <br />
                   It will distrub this process if we modify the state directly that is why components behave unexpectedly <br />
                      hooks are powerful and expresive new to reuse functionality between components. <br />
                  </p>

                  <h1>What is a unit test? Why should write unit tests?</h1>
                  <p>Unit testing is a kind of testing a unit -the smallest pice of code that can be logically isolated in a system. <br /> Most of the programming language has function a method or property. <br />
                      It is one kind of software testing method by which test individual of code. <br />
                       In a word we can say it is  a method of testing to test specific part of a code. <br />
                       We should use unit testing , it is much more powerful tool for software quality. It provide a basic check of an application . <br /> By using this method a devoloper can reach majority adoption. 
                       When the devolopment enviroments  <br />supports until tests and most of the programmers konw the basic frameworks and tools.

                  </p>

        </div>
    );
};

export default Blog;