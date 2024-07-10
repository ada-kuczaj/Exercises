function translate2d(dx, dy) {
    return function (x, y) {
        return [x + dx, y + dy];
    };
}

function scale2d(sx, sy) {
    return function (x, y) {
        return [x * sx, y * sy];
    };
}

function composeTransform(f, g) {
    // Return a new function that applies both transformations
    return function (x, y) {
        // Apply the first transformation
        const [intermediateX, intermediateY] = f(x, y);
        // Apply the second transformation to the result of the first
        return g(intermediateX, intermediateY);
    };
}

function memoizeTransform(f) {
    let lastArgs = null;
    let lastResult = null;
  
    return function(x, y) {
      // Check if the arguments are the same as in the last call
      if (lastArgs && x === lastArgs[0] && y === lastArgs[1]) {
        // If so, return the last result without recalculating
        return lastResult;
      } else {
        // If not, calculate a new result
        lastResult = f(x, y);
        lastArgs = [x, y];
        return lastResult;
      }
    };
  }
  

module.exports = {
    translate2d,
    scale2d,
    composeTransform,
    memoizeTransform
}

