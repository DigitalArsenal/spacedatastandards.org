export const migrationCases = Object.freeze([
  {
    name: 'legacy loader has no wallet attributes',
    scriptAttributes: {},
    presenter: null,
    expectWalletButtons: 0,
  },
  {
    name: 'partial client configuration',
    scriptAttributes: { 'data-wallet-client-id': 'sdn-standards-web-v1' },
    presenter: null,
    expectWalletButtons: 0,
  },
  {
    name: 'invalid client integrity',
    scriptAttributes: { complete: true, 'data-wallet-client-integrity': 'sha384-invalid' },
    presenter: null,
    expectWalletButtons: 0,
  },
  {
    name: 'native presenter suppresses shared presenter',
    scriptAttributes: { complete: true },
    presenter: 'none',
    expectWalletButtons: 0,
  },
  {
    name: 'complete ready shared presenter',
    scriptAttributes: { complete: true },
    presenter: null,
    expectWalletButtons: 1,
  },
]);
