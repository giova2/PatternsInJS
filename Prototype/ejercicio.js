class Point
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }
}

class Line
{
  constructor(start, end)
  {
    this.start = start;
    this.end = end;
  }

  deepCopy()
  {
    const copy = new Line(this.start, this.end);
    return copy;
  }
}

const line = new Line(new Point(1,2), new Point(2,3));
const clonedLine = line.deepCopy();
console.log({clonedLine});
line.start = new Point(10, 12);
line.end =  new Point(12, 13);
console.log({line, clonedLine});