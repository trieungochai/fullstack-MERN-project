import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Phong Nha - Ke Bang National Park Headquarter',
    description: 'Sprawling national park in lush surrounds featuring a network of wet caves, rivers & waterfalls.',
    imageUrl: 'https://vietnamdiscovery.com/wp-content/uploads/2019/11/Phong-nha-ke-bang-national-park.jpg',
    address: 'Phong Nha, Bố Trạch District, Quảng Bình Province 511860, Vietnam',
    location: {
      lat: 17.5907815,
      lng: 106.2812041
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Mausoleum of Emperor Khải Định',
    description: 'Tomb of a storied Vietnamese emperor, with elaborate architecture & ornate details.',
    imageUrl: 'https://live.staticflickr.com/7397/12060734074_1fd7fa6f5a_b.jpg',
    address: 'Khải Định, Thủy Bằng, Hương Thủy, Thừa Thiên Huế 530000, Vietnam',
    location: {
      lat: 16.3990488,
      lng: 107.5881757
    },
    creator: 'u2'
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
