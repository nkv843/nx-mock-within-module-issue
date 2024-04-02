export const thisFunctionShouldBeMocked = jest.fn().mockImplementation((parent: string) => {
  return `this function is mocked in ${parent}`;
});
