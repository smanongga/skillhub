
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'bobbyturner'},
        {id: 2, username: 'antonbarnett'},
        {id: 3, username: 'michaelmatthews'},
        {id: 4, username: 'laurabutler'},
        {id: 5, username: 'nicolebrown'},
        {id: 6, username: 'veronicamoore'},
        {id: 7, username: 'frankrice'},
        {id: 8, username: 'emilyriley'},
        {id: 9, username: 'oliviarodgers'},
        {id: 10, username: 'dereknolan'},
        {id: 11, username: 'shannonprice'},
        {id: 12, username: 'amywilliams'},
        {id: 13, username: 'katiemarshall'},
        {id: 14, username: 'laurenjefferies'},
        {id: 15, username: 'saragoodwin'},
        {id: 16, username: 'madisonyoung'},
        {id: 17, username: 'tiffanybaker'},
        {id: 18, username: 'emmaharris'},
        {id: 19, username: 'michellebanks'},
        {id: 20, username: 'claracollins'},
        {id: 21, username: 'jeremystewart'},
        {id: 22, username: 'joelking'},
        {id: 23, username: 'tommcoy'},
        {id: 24, username: 'evancooper'},
        {id: 25, username: 'davidjames'},
        {id: 26, username: 'gabrielriley'},
        {id: 27, username: 'finnparker'},
        {id: 28, username: 'lucasmurray'},
        {id: 29, username: 'aaronhart'},
        {id: 30, username: 'johnnypeterson'}
      ])
    })
}
