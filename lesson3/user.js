class User {
    constructor(details) {
        const { firstName, lastName } = details

        this.firstName = firstName
        this.lastName = lastName
    }

    get name() {
        return `${this.firstName} ${this.lastName}`
    }
}

const nameTest = function() {
    const userDetails = {
        firstName: 'Jane',
        lastName: 'Doe'
    }
    const testUser = new User(userDetails)

    console.log('Username is correct: ', testUser.name === 'Jane Doe')
}

nameTest()

