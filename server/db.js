module.exports = {
  getProfiles
}

function getProfiles (connection) {
  return connection('profiles')
  .join('skills_to_learn')
  .select()
}
