# Routing

1. Single page application
2. Client side bundle
3. Client side routing

* Pre-React days, new page --> new req send , get new html, js etc ---> hard reload.
React lets u create single page appication(SPA) --> u justchage the view here somehow.

- Bundle - js

# react-router-dom
client side routing.
We will not recive a fresh bundel eveytime.


when doing client side rotinng everything is done at client side, no server is required.
Because we bundel is not loaded everytime, everything is done at the client side. 

useNavigate - always use inside BrouserRouter, everything everything 
whatever navigates needs to be inside the BrowserRouter.

everywhere using <Link /> we can use <navigate/> but not everywhere <navigate /> use <Link />.


# LazyLoading
complete bundel comes, and then we do client side routing and navigation.
But sometimes the user only comes to the only the landing page, then to load complete bundel.
as the user goes to page 1 load page1 bundel and he visits page 2 load bundel page 2 so on and so for.

* Lazy Loading : 
so its like the user is in page 1 then he will get the react bundel and the code for page 1,
when he goes 2 page 2 will get the code for page 2
and so on and so forth

* Suspense : asynchronousy data fetching

# Prop Drilling
* Least comon ansistor

push it down as much as, but keep common 

* u have a state vari at parent or position 1 nd u want it on the 4-5 child then u have to pass the vari in all rest of 3, which is child 1, 2, 3 or 4.
* everyone will have it and pass it to the lower or other child
* No Rerender
* But code uggly
* prop drilling doesn't means that  parent re-render child. It just means the syntactic unasiness when writting code. 

- Passing props is a great way to explicitly  pipe data through ur UI tree to the components that use it.
- But passing props can become verbose and inconvenient when u need some prop deeply through the tree, or if may components needs the same prop.The nearest ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called "Prop Drilling". 


