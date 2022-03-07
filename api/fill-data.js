const { faker } = require('@faker-js/faker');

const database = {
  employees: []
};

for (let i = 1; i <= 12; i++) {
	const employee = {
    id: i.toString(),
    name: faker.name.findName(),
    jobType: faker.name.jobTitle(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    imageUrl: faker.image.avatar()
	} 
  database.employees.push(employee);
}
console.log(JSON.stringify(database));