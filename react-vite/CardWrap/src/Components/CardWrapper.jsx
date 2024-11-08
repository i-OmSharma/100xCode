
// export  const CardWrapper = ({innerComponent}) => {
//     return( <div style={{border: " solid black"}}>
//             {innerComponent }
//     </div> 
//     )
// }

export  const CardWrapper = ({children}) => {
    return( <div style={{border: " solid black"}}>
        {children}
    </div> 
    )
}

 