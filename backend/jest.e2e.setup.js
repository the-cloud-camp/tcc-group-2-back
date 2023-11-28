jest.mock('typeorm-transactional', () => ({
  addTransactionalDataSource: (value) => value,
  initializeTransactionalContext: () => {},
  Transactional: () => () => ({}),
}));

afterAll(() => {
  if (typeof globalThis.gc === 'function') {
    globalThis.gc();
  }
});
