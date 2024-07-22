function isPaired(text) {

    const stack = [];
    // the order of the brackets is important
    // because later we check whether the closing bracket has a corresponding opening bracket on the stack
    const pairs = {
        ']': '[',
        '}': '{',
        ')': '('
    };

    for (let char of text) {
        if (['[', '{', '('].includes(char)) {
            stack.push(char);
        }
        else if ([']', '}', ')'].includes(char)) {
            //checks whether the last opening brace on the stack matches the current closing brace
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    // if the stack is empty, it means all the brackets have been paired correctly
    return stack.length === 0;
}

module.exports = {
    isPaired
}