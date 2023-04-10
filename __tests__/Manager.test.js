const Manager = require('../lib/Manager');

 describe('Manager', () => {
    describe('getRole', () => {
        it('should return the role of manager', () => {
            const manager = new Manager('Johnny Appleseed', 789, 'Bossman@bossindustries.com', 1234);
            const role = manager.getRole();
            expect(role).toEqual('Manager');
        })
    })
 })