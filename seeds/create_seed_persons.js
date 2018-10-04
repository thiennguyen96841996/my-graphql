
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {id: 1, name: 'thiennh', age: '22', gender: 'male'},
        {id: 2, name: 'thuongdd', age: '22', gender: 'male'},
        {id: 3, name: 'quyengt', age: '20', gender: 'female'},
        {id: 4, name: 'diemlt', age: '21', gender: 'female'}
      ]);
    });
};
