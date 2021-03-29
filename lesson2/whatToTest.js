import { Permissions } from '@/lib/permissions'

class User {

    // Don't test
    constructor(details, traits = {}) {
        const { firstName, lastName } = details

        this.firstName = firstName
        this.lastName = lastName
        this.traits = traits

        this.sessionStartedAt = Date.now()
    }

    // Test
    get name() {
        return `${this.firstName} ${this.lastName}`
    }

    // Test
    get isAdmin() {
        return Permissions.granted(this, 'admin')
    }

    // Test in combination
    get currentSessionIsValid() {
        const tenMinutesInMilliseconds = 600000

        return (this.sessionStartedAt + tenMinutesInMilliseconds)
    }

    extendSession() {
        this.sessionStartedAt = Date.now()
    }
}
