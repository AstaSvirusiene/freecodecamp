// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() 
{
  for (let i = 1; i < 3; i++)
  {
    s.push(s[0]);
    s.shift(s[0]);
  }
}
editInPlace();
