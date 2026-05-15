export const navMenu = [
  { name: 'హోమ్', slug: '/', active: true },
  { 
    name: 'క్యాంపస్ విజ్ఞానం', 
    slug: '#',
    dropdown: [
      { name: 'ఇంజనీరింగ్ కాలేజీలు', slug: '/news/72' },
      { name: 'యూనివర్సిటీలు', slug: '/news/73' },
      { 
        name: 'ఐ . ఐ . టీ లు', 
        slug: '#',
        subDropdown: [
          { name: 'తిరుపతి', slug: '/news/76' },
          { name: 'గౌహతి', slug: '/news/77' },
          { name: 'హైదరాబాద్', slug: '/news/78' },
          { name: 'ముంబై', slug: '/news/79' },
        ]
      },
    ]
  },
  { 
    name: 'అమీర్ పేట విజ్ఞానం', 
    slug: '#',
    dropdown: [
      { name: 'సాంకేతిక శిక్షణ సంస్థలు', slug: '/news/87' },
      { name: 'హాస్టల్ వసతి', slug: '/news/88' },
    ]
  },
  { 
    name: 'ఉద్యోగ విజ్ఞానం', 
    slug: '#',
    dropdown: [
      { name: 'గూగుల్', slug: '/news/91' },
      { name: 'ఫేస్ బుక్', slug: '/news/92' },
    ]
  },
  { 
    name: 'టెక్ జీవన విజ్ఞానం', 
    slug: '#',
    dropdown: [
      { name: 'సంపాదకుడు', slug: '/news/94' },
    ]
  },
  { 
    name: 'విజ్ఞానం',
    slug: '#',
    hasLogo: true,
    dropdown: [
      { name: 'వార్తా విశ్లేషణ', slug: '/news/127' },
      { name: 'మార్గదర్శిని ( గైడ్ )', slug: '/news/166' },
      { name: 'ఎలా?', slug: '/news/125' },
    ]
  },
]