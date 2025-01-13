function calculateStringLengs(...args) {
    console.log(args);
    for(let i = 0; i < args; i++) {
        const stringLengsths = args.map(calculateStringLengs());
        console.log(stringLengsths);
        const stringLengsthsSum = args.reduce(calculateStringLengs);
    }
}

calculateStringLengs(1, 2, 3, 4, 5);
