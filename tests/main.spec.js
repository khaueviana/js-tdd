describe('Main', () => {
  let arr;
  // roda uma vez, antes do bloco
  before(() => {
  });

  // roda uma vez, depois do bloco
  after(() => {
  });

  // roda todas as vezes, antes de cada bloco (IT)
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de cada bloco
  afterEach(() => {
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    console.log(arr.length); // 4
  });

  it('should remove the value 3 when use pop in the array', () => {
    console.log(arr.pop() === 3);
  });

  it('should have a size of 2 when pop a value form the array', () => {
    arr.pop();
    console.log(arr.legth);
  });
});
