const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getRole', () => {
        it('should return the role of Engineer.', () => {
            const engineer = new Engineer('Andrew Gibbs', 999, 'smartguy@smart.com', 'AndrewPGibbs');
            const role = engineer.getRole();
            expect(role).toEqual('Engineer');
        });
    });

    describe('getGithub', () => {
        it('should return the engineers Github username', () => {
            const engineer = new Engineer('Andrew Gibbs', 999, 'smartguy@smart.com', 'AndrewPGibbs')
            const github = engineer.getGithub();
            expect(github).toEqual('AndrewPGibbs')
        })
    })
})