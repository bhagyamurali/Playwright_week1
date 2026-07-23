function isgradeCalculation(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("The student grade is A");
            break;
        case (score >= 80):
            console.log("The student grade is B");
            break;
        case (score >= 65):
            console.log("The student grade is C");
            break;
        default:
            console.log("The student grade is F");
            break;
    } 
}
isgradeCalculation(100)