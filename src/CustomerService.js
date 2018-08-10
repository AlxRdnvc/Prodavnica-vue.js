
const customers = [
    {
        id: 1,
        fullName: 'John Doe',
        email: 'johndoe@gmail.com',
    },
    {
        id: 2,
        fullName: 'Peter Neilsen',
        email: 'peter@gmail.com',
    },
    {
        id: 3,
        fullName: 'Sophia Lauren',
        email: 'sophy@gmail.com',
    },
    {
        id: 4,
        fullName: 'Stephen Jackson',
        email: 'steph@gmail.com',
    }
]

class CustomerService {
    list() {
        return customers;
    }

    deleteCustomer(customer) {
        customers.splice(customers.indexOf(customer), 1)
    }
}


export const customerService = new CustomerService();
