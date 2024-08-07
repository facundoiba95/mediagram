const date = new Date().toISOString()

const user = [
    { _id: 1, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'pedro123', createdAt: date, thumbnail: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { _id: 2, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'pedrojuan', isNewAdded: true, thumbnail: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { _id: 3, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'pedroruiz', thumbnail: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { _id: 4, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'facundo123', createdAt: date,thumbnail: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { _id: 5, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'facubike', thumbnail: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { _id: 6, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'lucas789', createdAt: date, thumbnail: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { _id: 7, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'lucasgomez', thumbnail: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { _id: 8, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'maria987', thumbnail: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { _id: 9, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'mariagarcia', thumbnail: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { _id: 10, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'mariaperez', createdAt: date, thumbnail: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { _id: 11, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'jose567', thumbnail: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { _id: 12, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'josemartin', thumbnail: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { _id: 13, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'joseperez', thumbnail: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { _id: 14, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'ana567', thumbnail: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { _id: 15, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'anagarcia', thumbnail: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { _id: 16, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'analopez', thumbnail: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { _id: 17, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'maria222', createdAt: date, thumbnail: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { _id: 18, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'maria333', thumbnail: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { _id: 19, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'maria444', thumbnail: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { _id: 20, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'maria555', createdAt: date, thumbnail: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { _id: 21, countFollowers: Math.floor(Math.random() * 100 + 1), username: 'maria666', thumbnail: 'https://randomuser.me/api/portraits/women/12.jpg' }
  ];

  export default user;