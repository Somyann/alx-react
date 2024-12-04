import { getDataById } from './notifications';
import { data } from '../notifications.json';

describe('getDataById', () => {
  it('should return the correct data for ID 5debd764a7c57c7839d722e9', () => {

      const expectedData = [ {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
      },
    ];
      const result = getDataById("5debd764a7c57c7839d722e9");
      expect(result).toEqual(expect.arrayContaining(expectedData));
    });
  });
  describe('getDataById', () => {
    it('should return the correct data for ID 5debd764a7c57c7839d722e9', () => {
      const expectedData = [
        {
          guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
          isRead: true,
          type: "urgent",
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        },
        {
          guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
          isRead: false,
          type: "urgent",
          value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
        },
      ];
      const result = getDataById("5debd764a7c57c7839d722e9");
      expect(result).toEqual(expect.arrayContaining(expectedData));
    });

    it('should return an empty array for an unknown ID', () => {
      const result = getDataById("unknown_id");
      expect(result).toEqual([]);
    });

    it('should return the correct data for ID 5debd764a7c57c7839d722e8', () => {
      const expectedData = [
        {
          guid: "1d8e40be-1c78-4de0-afc9-fcc147afd4d1",
          isRead: false,
          type: "default",
          value: "Hello world",
        },
      ];
      const result = getDataById("5debd764a7c57c7839d722e8");
      expect(result).toEqual(expect.arrayContaining(expectedData));
    });
  });
  describe('getDataById', () => {
    it('should return the correct data for ID 5debd764a7c57c7839d722e9', () => {
      const expectedData = [
        {
          guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
          isRead: true,
          type: "urgent",
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        },
        {
          guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
          isRead: false,
          type: "urgent",
          value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
        },
      ];
      const result = getDataById("5debd764a7c57c7839d722e9");
      expect(result).toEqual(expect.arrayContaining(expectedData));
    });

    it('should return an empty array for an unknown ID', () => {
      const result = getDataById("unknown_id");
      expect(result).toEqual([]);
    });

    it('should return the correct data for ID 5debd764a7c57c7839d722e8', () => {
      const expectedData = [
        {
          guid: "1d8e40be-1c78-4de0-afc9-fcc147afd4d1",
          isRead: false,
          type: "default",
          value: "Hello world",
        },
      ];
      const result = getDataById("5debd764a7c57c7839d722e8");
      expect(result).toEqual(expect.arrayContaining(expectedData));
    });

    it('should return the correct user data for ID 5debd764a7c57c7839d722e9', () => {
      const users = [
        {
          age: 25,
          email: "poole.sanders@holberton.nz",
          id: "5debd764a7c57c7839d722e9",
          name: { first: "Poole", last: "Sanders" },
          picture: "http://placehold.it/32x32"
        }
      ];
      const expectedData = [
        {
          age: 25,
          email: "poole.sanders@holberton.nz",
          id: "5debd764a7c57c7839d722e9",
          name: { first: "Poole", last: "Sanders" },
          picture: "http://placehold.it/32x32"
        }
      ];
      const result = getDataById("5debd764a7c57c7839d722e9", users);
      expect(result).toEqual(expect.arrayContaining(expectedData));
    });
  });

describe('Normalized data', ()    => {
  it('it should include the correct message entity with the specified guid', () => {
    const normalizedData = getNormalizedData(data);
    const message = normalizedData.entities.messages["efb6c485-00f7-4fdf-97cc-5e12d14d6c41"];

    expect(message).toEqual({
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    });
  });
});
describe('Normalized data', () => {
  it('it should include the correct notification entity with the specified guid', () => {
    const normalizedData = getNormalizedData(data);
    const notification = normalizedData.entities.notifications["5debd7642e815cd350407777"];

    
    expect(notification).toEqual({
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777",
    });
  });
});