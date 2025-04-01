function runAfter1Sec(fn: () => void) { // here it return nothing thats why its void
    setTimeout(() => {
        fn()
    }, 1000);
}

runAfter1Sec(function() {
    console.log("After 1 second");
})