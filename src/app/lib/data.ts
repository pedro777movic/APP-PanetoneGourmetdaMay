import type { Video } from './types';

export const videos: Video[] = [
  {
    id: '1',
    title: 'The Ultimate Chocolate Panettone Recipe',
    description: 'Learn how to make the most decadent chocolate panettone from scratch. This recipe is perfect for the holidays or any special occasion.',
    youtubeId: '4N3iVHxQ1Uo',
    imageId: 'panettone-1',
    isPremium: false,
  },
  {
    id: '2',
    title: 'Masterclass: Perfecting the Panettone Dough',
    description: 'A premium, in-depth guide to achieving the perfect panettone dough texture and flavor. This is for serious bakers.',
    youtubeId: '986iHh-hr8k',
    imageId: 'panettone-2',
    isPremium: true,
  },
  {
    id: '3',
    title: 'Quick & Easy Mini Panettones',
    description: "Don't have time for a full-sized panettone? These mini versions are quick, easy, and just as delicious.",
    youtubeId: 'Yg_NYaStv3M',
    imageId: 'panettone-3',
    isPremium: false,
  },
  {
    id: '4',
    title: 'The History of Panettone: A Culinary Journey',
    description: 'Explore the rich history of this iconic Italian sweet bread. A premium documentary for food lovers.',
    youtubeId: 'A5IDt_a552I',
    imageId: 'panettone-4',
    isPremium: true,
  },
];
