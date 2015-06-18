
//<<node 和 express开发>> Page 130
//Create
//这里用到了两个mongoose方法.

Vacation.find(function(err, vacations){ //是find, 在这个例子中,
//它会"查找"数据库中的所有Vacation实例,
//并将"返回结果列表" 传给回调函数并调用.

  if(vacations.length) return;

  new Vacation({
    name: 'Hood River Day Trip',
    slug: 'hood-river-day-trip',
    category: 'Day Trip',
    sku: 'HR199',
    description: 'Spend a day sailing on the Columbia and' + 'enjoying craft beers in Hood River!',
    priceInCents: 9995,
    tags: ['day trip', 'hood river', 'sailing', 'windsurfing', 'breweries'],
    inSeason: true,
    maximumGuests: 16,
    available: true,
    packageSold: 0,
  }).save();  //存储数据

});
