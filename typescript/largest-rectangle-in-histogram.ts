function largestRectangleArea(heights: number[]): number {
  const stack = new Array();
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let idx = i;

    while (stack.length && heights[i] < stack[stack.length - 1][1]) {
      const top = stack.pop();
      const area = (i - top[0]) * top[1];
      maxArea = Math.max(area, maxArea);
      idx = top[0];
    }

    stack.push([idx, heights[i]])
  }

  while (stack.length) {
    const top = stack.pop();
    const area = (heights.length - top[0]) * top[1];
    maxArea = Math.max(area, maxArea);
  }

  return maxArea;
}
