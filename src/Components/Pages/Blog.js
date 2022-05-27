/** @format */

import React from "react";

const Blog = () => {
  return (
    <div style={{ width: "95%" }} className="text-left mx-auto py-11">
      <h1 className="text-xl font-bold">
        What are the different ways to manage a state in a React application:
      </h1>
      <p>
        There are four main types of state you need to properly manage in your
        React apps:
        <ul className="list-disc px-4">
          <li>Local state</li>
          <li>Global state</li>
          <li>Server state</li>
          <li>URL state</li>
        </ul>
        <br />
        <span className="font-bold">Local (UI) state –</span> Local state is
        data we manage in one or another component. Local state is most often
        managed in React using the useState hook. For example, local state would
        be needed to show or hide a modal component or to track values for a
        form component, such as form submission, when the form is disabled and
        the values of a form’s inputs. <br />
      </p>
      <p>
        <span className="font-bold"> Global (UI) state – </span> Global state is
        data we manage across multiple components. Global state is necessary
        when we want to get and update data anywhere in our app, or in multiple
        components at least. A common example of global state is authenticated
        user state. If a user is logged into our app, it is necessary to get and
        change their data throughout our application. Sometimes state we think
        should be local might become global.
      </p>
      <p>
        <span className="font-bold"> Server state – </span>
        Data that comes from an external server that must be integrated with our
        UI state. Server state is a simple concept, but can be hard to manage
        alongside all of our local and global UI state. There are several pieces
        of state that must be managed every time you fetch or update data from
        an external server, including loading and error state. Fortunately there
        are tools such as SWR and React Query that make managing server state
        much easier.
      </p>

      <p>
        <span className="font-bold"> URL state – </span>
        Data that exists on our URLs, including the pathname and query
        parameters. URL state is often missing as a category of state, but it is
        an important one. In many cases, a lot of major parts of our application
        rely upon accessing URL state. Try to imagine building a blog without
        being able to fetch a post based off of its slug or id that is located
        in the URL! There are undoubtedly more pieces of state that we could
        identify, but these are the major categories worth focusing on for most
        applications you build.
      </p>
      <h1 className="text-xl py-4 font-bold">
        {" "}
        How does prototypical inheritance work:
      </h1>
      <p>
        When we write to create an Object like this, this creates from the
        master object, If you check student.__proto__ this will tell you which
        one is the parent of this object. Inside every constructor function of
        creator function, there is a property called “prototype”, when we want
        to access any value from an Object, the JS engine will look into the
        student object, if not available it will look into its creator’s
        prototype object. When we use object literals, under the hood one object
        is created by a constructor function.
      </p>
      <p>
        run this student.proto.constructor.prototype Creating JS object by
        constructor function! Yes in js you can create objects from a function.
        if we write code like this
      </p>
      <div className="py-3">
        {" "}
        <img
          style={{ height: "300px", width: "600px" }}
          src="https://hirahasan.com/wp-content/uploads/2021/10/carbon.png"
          alt=""
        />
      </div>

      <p>
        Some rules to keep the game simple
        <p>
          1.This is similiar like person class, if you want to create object
          from this blueprint, you just need to write let demo = new person();!
        </p>
        with every constructor function, there is a prototype property that we
        know 2.there is a __proto__ property as well to hold reference of
        parent. Now let say, for example, we want to extend person in our
        Employee class! we shall write code like this!
      </p>
      <p>
        now we can see that here. age is not getting value from its prototype
        chain. If you want to override any function inherited from the parent
        just write employee. prototype.name_ofthe_function = new function JS
        engine shares values to its chield through prototype and creates a chain
        of the prototype while creating instances.
      </p>
      <div className="py-3">
        {" "}
        <img
          style={{ height: "300px", width: "600px" }}
          src="https://hirahasan.com/wp-content/uploads/2021/10/carbon-5.png"
          alt=""
        />
      </div>
      <h1 className="text-xl font-bold">
        Why you do not set the state directly in React.
      </h1>
      <p>
        <p>
          If you try to update state directly then it won't re-render the
          component. Instead use setState() method. It schedules an update to a
          component's state object. When state changes, the component responds
          by re-rendering. If you try to update state directly then it won't
          re-render the component. Instead use setState() method. It schedules
          an update to a component's state object. When state changes, the
          component responds by re-rendering. Note: You can directly assign to
          the state object either in constructor or using latest javascript's
          class field declaration syntax.
        </p>
      </p>
      <h1 className="text-xl font-bold">
        What is a unit test? Why should write unit tests
      </h1>
      <p className="py-2">
        <span className="font-bold">Unit test:</span> A unit test is a way of
        testing a unit - the smallest piece of code that can be logically
        isolated in a system. In most programming languages, that is a function,
        a subroutine, a method or property. The isolated part of the definition
        is important. In his book "Working Effectively with Legacy Code", author
        Michael Feathers states that such tests are not unit tests when they
        rely on external systems: “If it talks to the database, it talks across
        the network, it touches the file system, it requires system
        configuration, or it can't be run at the same time as any other test."
        Modern versions of unit testing can be found in frameworks like JUnit,
        or testing tools like TestComplete. Look a little further and you will
        find SUnit, the mother of all unit testing frameworks created by Kent
        Beck, and a reference in chapter 5 of The Art of Software Testing .
        Before that, it's mostly a mystery. I asked Jerry Weinberg about his
        experiences with unit testing -- "We did unit testing in 1956. As far as
        I knew, it was always done, as long as there were computers". Regardless
        of when and where unit testing began, one thing is for sure. Unit
        testing is here to stay. Let's look at some more practical aspects of
        unit testing
      </p>
      <p className="py-2">Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.So  we should write unit test</p>

      <h1 className="text-xl font-bold">How will I improve perfomance in react app</h1>
      <p>I can improve perfomance in react app different way.some way wrire below
     
        <div className="font-semibold">
        <p>1. Using Immutable Data Structures</p>
        <p>2.Function/Stateless Components and React.PureComponent</p>
        <p>3.Multiple Chunk Files</p>
        <p>4.Using Production Mode Flag in Webpack</p>
        <p>5.Dependency optimization</p>
        <p>6. Use React.Fragments to Avoid Additional HTML Element Wrappers</p>
        <p>7.Avoid Inline Function Definition in the Render Function.</p>
        <p>8.Throttling and Debouncing Event Action in JavaScript</p>
        <p>9.Avoid using Index as Key for map</p>
        <p>10. Avoiding Props in Initial States</p>
        <p>11.Spreading props on DOM elements</p>
        <p>12.Use Reselect in Redux to Avoid Frequent Re-render</p>
        <p> 13. Avoid Async Initialization in componentWillMount()</p>
        <p>14.Memoize React Components</p>
        </div>
      </p>
      <p></p>
    </div>
  );
};

export default Blog;
