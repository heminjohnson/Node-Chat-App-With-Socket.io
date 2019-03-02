const expect = require('expect')

const {Users} = require('./users')

describe('Users', () => {
	it('should add new user', () => {
		var users = new Users()
		var user = {
			id: 1,
			name: 'Hemin',
			room: 'Office'
		}

		users.addUser(user.id, user.name, user.room)
		expect(users.users).toEqual([user])
	})
})