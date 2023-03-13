import Single from './images/single.png'
import Double from './images/double.png'
import Triple from './images/triple.png'

const sectionsFooter = [
    {
      title: 'Solutions',
      items: ['Analytics', 'Marketing', 'Commerce', 'Insights']
    },
    {
      title: 'Support',
      items: ['Pricing', 'Documentation', 'Guides', 'API Status']
    },
    {
      title: 'Company',
      items: ['About', 'Blog', 'Jobs', 'Press', 'Careers']
    },
    {
      title: 'Legal',
      items: ['Claim', 'Policy', 'Terms']
    }
  ];
  const plansData = [
    {
      id: 1,
      name: 'Single User',
      image: Single,
      price: 149,
      features: [
        '500 GB Storage',
        '1 User Allowed',
        'Send up to 2 GB'
      ]
    },
    {
      id: 2,
      name: 'Partnership',
      image: Double,
      price: 199,
      features: [
        '1 TB Storage',
        '3 Users Allowed',
        'Send up to 10 GB'
      ]
    },
    {
      id: 3,
      name: 'Group Account',
      image: Triple,
      price: 299,
      features: [
        '500 GB Storage',
        '10 Users Allowed',
        'Send up to 20 GB'
      ]
    }
  ];

  

  export {sectionsFooter, plansData}