
const customers = [
    {
        id: 1,
        fullName: 'John Doe',
        email: 'johndoe@gmail.com',
        products: []
    },
    {
        id: 2,
        fullName: 'Peter Neilsen',
        email: 'peter@gmail.com',
        products: []
    },
    {
        id: 3,
        fullName: 'Sophia Lauren',
        email: 'sophy@gmail.com',
        products: []
    },
    {
        id: 4,
        fullName: 'Stephen Jackson',
        email: 'steph@gmail.com',
        products: []
    }
]

let nextId = 5;
class CustomerService {
    list() {
        return customers;
    }

    deleteCustomer(customer) {
        customers.splice(customers.indexOf(customer), 1)
    }

    addCustomer(newCustomer){
        customers.push(newCustomer);
        newCustomer.id = nextId;
        nextId++;
    }

    findCustomer(custId){
        
        return customers.find(customer => customer.id == custId);
    }

    addProduct(customer, product) {
        customer.products.push(product);
    }
}


export const customerService = new CustomerService();
