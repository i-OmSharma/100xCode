# Context API

- First thing first make a Context API, thing that lets u teleport.
- wrap anuone that want to use the teleported value inside a provider.
- wrap all the components u want to use the teleport value.
- <CountContext.Provider value={Count}>
- and give this a prop of ur that this is ur value, u need to teleport this value tp over and over.
  
# Problem with Context
- Doesn't fix re-render, only fixes prop drilling

# Whats is State management 
- It is a cleaner way to store the state of ur app.
- Until now, the cleanest thing you can do is use Context API.It lets you teleport state.

- But there are better solutions that get rid of the problem that context API has - Unnencssary re-renders.
- Its good to have State and Components in seperate Folder.

# Recoil
- is the state management.
- Has a concept of an atom to store the state.
- An atom can be defined outside the component.
- can be teleported to any component.
