const Intern = require('../lib/Intern');


describe('Intern', () => {
    describe('getRole',() => {
        it('should return the role of Intern', () => {
            const intern = new Intern('Joe Shmoe', 111, 'student@college.com', 'University of Miskatonic');
            const role = intern.getRole();
            expect(role).toEqual('Intern');
        });
    });

    describe('getSchool', () => {
        it('should return the name of the interns School', () => {
            const intern = new Intern('Joe Shmoe', 111, 'student@college.com', 'University of Miskatonic')
            const school = intern.getSchool();
            expect(school).toEqual('University of Miskatonic')
        })
    })
});