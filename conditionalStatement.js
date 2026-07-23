//launchBrowser
function launchBrowser(browserName) {
    if (browserName == "Chrome") {
        console.log("Launching the Chrome browser");        
    } else {
        console.log("Launching the other browser ");
    }
    
}
// launchBrowser() -- else statement
launchBrowser("Chrome")

//runTests
function runTests(testType) {
    switch (testType) {
        case 'somke':
            console.log("Running the somke testing");
            break;
        case 'sanity':
            console.log("Running the sanity testing");
            break;
        case 'regression':
            console.log("Running the regression testing");
            break;
        default:
            console.log("Running the somke testing");
            break;
    }
    
}
// runTests()  --  default case
runTests("sanity")