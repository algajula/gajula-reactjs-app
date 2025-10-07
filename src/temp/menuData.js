export const menuItems = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Customer',
        path: '/customer',
        subMenus: [
          { name: 'Search Customer', path: '/customer/searchcustomer' },
          { name: 'Add Customer', path: '/customer/addcustomer' }

        ]
    },
    {
        name: 'Book',
        path: '/book',
        subMenus: [
            { name: 'Search Book', path: '/book/searchbook' },
            { name: 'Add Book', path: '/book/addbook' }

        ]
    },
    {
        name: 'AWS S3',
        path: '/awss3',
        subMenus: [
            { name: 'Search S3file', path: '/awss3/searchs3file' },
            { name: 'Upload S3file', path: '/awss3/uploads3file' }
        ]
    },
    {
    name: 'Contact',
    path: '/contactus'
    }
 ];