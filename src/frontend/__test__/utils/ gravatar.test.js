import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'eric.gomez.sanchez@gmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/456861d835d3e44d23f5df1eea1a766e';
  expect(gravatarUrl).toEqual(gravatar(email));
}); 