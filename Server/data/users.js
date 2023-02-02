import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Wilday',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
       
    },
    {
        name: 'Cesar Rolen',
        email: 'cesar@example.com',
        password: bcrypt.hashSync('123456', 10),
      
    },
]

export default users