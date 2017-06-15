module.exports = {
  addUserToProfile,
  profileExists
}

function addUserToProfile (conn, id) {
  return conn('profiles')
	.where('auth_id', id)
		.insert({ auth_id: id.auth_id
})
}

function profileExists (conn, id) {
  return conn('profiles')
    .select()
		.where('auth_id', id)
}
