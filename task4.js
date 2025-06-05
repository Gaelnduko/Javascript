function runLoginGatekeeper() {
    let attempts = 2;

    let maxAttempts = 10;
    let isLockedOut = attempts >=maxAttempts;
    let canTryAgain = !isLockedOut;

    console.log("Attempts made:" ,attempts);
    console.log("Locked out:" ,isLockedOut);
    console.log("can try again:" ,canTryAgain)
}
runLoginGatekeeper();