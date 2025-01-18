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

- Recoil has a concept of atom store the state.
- Atom can be defined outside the component.
- can be teleported in any component.
- atom -------> useState

- RecoilRoot -> wrap via this the component renders
- atom
- useRecoilState -> useState(currentValue, howToUpdateTheCurrentValue)
- useRecoilValue ->  Just want the value
- useSetRecoilState -> Only want to update variable, and not actually get the value 
- Selector

#### useState Vs Recoil atom
- **useState** for component-local state.
-  useState when the state is local to a single component or is shared only with closely related child components via props.
-  Ideal for managing state that doesn't need to be shared globally or across multiple components.
  
- **Recoil** atom for global or shared state across distant components.
-  atom when the state needs to be global or shared across multiple components that are not directly related or nested.
-  Ideal for managing app-wide state or state shared between distant components.