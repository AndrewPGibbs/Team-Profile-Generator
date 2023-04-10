const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('getName', () => {
      it('should return the employee name', () => {
        const employee = new Employee('John Smith', 123, 'john@example.com');
        const name = employee.getName();
        expect(name).toEqual('John Smith');
      });
    });
  });