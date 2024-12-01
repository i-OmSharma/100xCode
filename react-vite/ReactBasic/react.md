To create a React app, 3 things are to keep in mind:-
1.Component
2.State
3.Re-Rendring 

State:-
An Object(js Object) that represents the current state of the app
it represts the dynamic thingsin the app(things to change)
eg- the value of the counter 

Component:-
How a DOM element should render, given a state
It is a re-useable, dynamic, HTML snippet that changes given the state
A function that takes props or state as an input and returns u back the actual html of something on your website 

Give me a state of your application, a very big object that represents the dynamic part of ur application
Give me all ur individual Component and how they are structured together,
Give me how this state is connected to this componets

Re-Rendring:-
A state change triggers a re-render
A re-render request the actual DOM being manipulated when the state changes
You  usually have to define all your Component once,
and then all you have to do is update the state of your app, React takes care of re-rendering your app. 

Virtual DOM:-
Virtual DOM is sort of representation of current DOM that keeps in memory, uses it to calaulate the difference 
the current state and the old state, what updated it needs to make.
