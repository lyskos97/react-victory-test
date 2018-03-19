/* @flow */

export type Data = {
  [key: string]: Array<{
    count: number,
    createdBy: string,
  }>,
};

export type Point = {|
  date: number,
  count: number,
  createdBy: string,
|};

export type ChartsDataSet = Array<Array<Point>>;

export type PieData = Array<{ x: string, y: number }>;

export type XYData = {
  [key: string]: Array<Point>,
};

export const data1 = {
  '2017-05-01': [{ count: 6, createdBy: 'Mark' }],
  '2017-05-15': [{ count: 6, createdBy: 'Rob' }],
  '2017-05-17': [{ count: 9, createdBy: 'Mark' }],
  '2017-05-19': [{ count: 10, createdBy: 'Chris' }],
  '2017-05-23': [
    { count: 8, createdBy: 'Mark' },
    { count: 8, createdBy: 'Rob' },
    { count: 10, createdBy: 'Chris' },
  ],
  '2017-05-28': [{ count: 15, createdBy: 'Rob' }, { count: 10, createdBy: 'Chris' }],
  '2017-06-10': [{ count: 11, createdBy: 'Mark' }, { count: 8, createdBy: 'Chris' }],
};

export const dummyData = [
  [{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 5, y: 2 }, { x: 6, y: 5 }, { x: 8, y: 4 }],
  [{ x: 2, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }, { x: 8, y: 3 }],
];

export const gqlData = [
  {
    _id: {
      date: '2017-08-29',
      createdBy: 'pew',
    },
    count: 27,
  },
  {
    _id: {
      date: '2017-08-24',
      createdBy: 'pew',
    },
    count: 27,
  },
  {
    _id: {
      date: '2017-08-23',
      createdBy: 'pew',
    },
    count: 29,
  },
  {
    _id: {
      date: '2017-08-21',
      createdBy: 'pew',
    },
    count: 23,
  },
  {
    _id: {
      date: '2017-08-17',
      createdBy: 'pew',
    },
    count: 30,
  },
  {
    _id: {
      date: '2017-08-11',
      createdBy: 'die',
    },
    count: 35,
  },
  {
    _id: {
      date: '2017-08-13',
      createdBy: 'die',
    },
    count: 30,
  },
  {
    _id: {
      date: '2017-08-13',
      createdBy: 'pew',
    },
    count: 28,
  },
  {
    _id: {
      date: '2017-08-14',
      createdBy: 'die',
    },
    count: 28,
  },
  {
    _id: {
      date: '2017-08-16',
      createdBy: 'die',
    },
    count: 30,
  },
  {
    _id: {
      date: '2017-08-20',
      createdBy: 'die',
    },
    count: 35,
  },
  {
    _id: {
      date: '2017-08-20',
      createdBy: 'pew',
    },
    count: 20,
  },
  {
    _id: {
      date: '2017-08-10',
      createdBy: 'pew',
    },
    count: 15,
  },
  {
    _id: {
      date: '2017-07-10',
      createdBy: 'pie',
    },
    count: 5,
  },
  {
    _id: {
      date: '2017-08-10',
      createdBy: 'pie',
    },
    count: 20,
  },
  {
    _id: {
      date: '2017-08-09',
      createdBy: 'pew',
    },
    count: 20,
  },
  {
    _id: {
      date: '2017-08-08',
      createdBy: 'die',
    },
    count: 36,
  },
  {
    _id: {
      date: '2017-08-07',
      createdBy: 'pew',
    },
    count: 14,
  },
  {
    _id: {
      date: '2017-08-04',
      createdBy: 'pew',
    },
    count: 9,
  },
  {
    _id: {
      date: '2017-08-03',
      createdBy: 'die',
    },
    count: 10,
  },
  {
    _id: {
      date: '2017-07-28',
      createdBy: 'pew',
    },
    count: 15,
  },
  {
    _id: {
      date: '2017-07-18',
      createdBy: 'pew',
    },
    count: 1,
  },
  {
    _id: {
      date: '2017-07-17',
      createdBy: 'die',
    },
    count: 10,
  },
  {
    _id: {
      date: '2017-06-19',
      createdBy: 'die',
    },
    count: 10,
  },
];
