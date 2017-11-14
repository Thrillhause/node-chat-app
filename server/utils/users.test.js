const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
	var users;
	beforeEach(() => {
		users = new Users();
		users.users = [
			{
				id: '1',
				name: 'TestName1',
				room: 'Node Course'
			},
			{
				id: '2',
				name: 'TestName2',
				room: 'Other Room'
			},
			{
				id: '3',
				name: 'TestName3',
				room: 'Node Course'
			}
		];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Dean',
			room: 'Test Room'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should return names for node course', () => {
		var userList = users.getUserList('Node Course');
		expect(userList).toEqual(['TestName1', 'TestName3']);
	});

	it('should return names for other room', () => {
		var userList = users.getUserList('Other Room');
		expect(userList).toEqual(['TestName2']);
	});

	it('should remove a user',()=>{
		var userId = '1';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user',()=>{
		var userId = '33';
		var user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toEqual(userId);
	});

	it('should not find user', () => {
		var userId = '33';
		var user = users.getUser(userId);

		expect(user).toNotExist();
	});
});
