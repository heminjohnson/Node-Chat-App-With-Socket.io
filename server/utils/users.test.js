const expect = require('expect')

const {Users} = require('./users')

describe('Users', () => {
	var users

	beforeEach(() => {
		users = new Users()
		users.users = [{
			id: 1,
			name: 'Mike',
			room: 'Office'
		}, {
			id: 2,
			name: 'Hemin',
			room: 'Home'
		}, {
			id: 3,
			name: 'Johnson',
			room: 'Office'
		}]
	})

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

	it('should remove a user', () => {
		var userId = 1
		var user = users.removeUser(userId)

		expect(user.id).toBe(userId)
		expect(users.users.length).toBe(2)
	})

	it('should not remove a user', () => {
		var userId = 99
		var user = users.removeUser(userId)

		expect(user).toBeFalsy()
		expect(users.users.length).toBe(3)
	})

	it('should find user', () => {
		var userId = 2
		var user = users.getUser(userId)

		expect(user.id).toBe(userId)
	})

	it('should not find user', () => {
		var userId = 99
		var user = users.getUser(userId)

		expect(user).toBeFalsy()
	})

	it('should return names for room Office', () => {
		var userList = users.getUserList('Office')

		expect(userList).toEqual(['Mike', 'Johnson'])
	})

	it('should return names for room Home', () => {
		var userList = users.getUserList('Home')

		expect(userList).toEqual(['Hemin'])
	})
})