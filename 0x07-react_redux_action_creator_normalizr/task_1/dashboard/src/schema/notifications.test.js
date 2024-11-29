import { getDataById } from './notifications';

describe('getDataById', () => {
  it('should return the correct data for ID 5debd764a7c57c7839d722e9', () => {
    const inputId = '5debd764a7c57c7839d722e9';

    
    const expectedData = [
      {
        guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
        isRead: true,
        type: 'urgent',
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      },
      {
        guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
        isRead: false,
        type: 'urgent',
        value:
          'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed',
      },
    ];

    // Call the function and store the result
    const result = getDataById(inputId);

    // Compare the result with the expected data
    expect(result).toEqual(expectedData);
  });
});
