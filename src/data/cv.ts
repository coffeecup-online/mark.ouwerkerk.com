export const personal = {
  name: 'Mark Ouwerkerk', subtitle: 'Artificial Intelligence · Webdevelopment', location: 'De Bilt',
  email: 'mark@ouwerkerk.com', phone: '06 38027152', phoneHref: '+31638027152',
  linkedin: 'https://www.linkedin.com/in/mark-ouwerkerk-7b8658175/',
  profile: 'Masterstudent Artificial Intelligence aan de Universiteit Utrecht, met ervaring in webontwikkeling en automatisering. Als mede-eigenaar van webdevelopmentbedrijf Tuler ontwikkel en beheer ik websites voor zakelijke klanten. Daarnaast heb ik ervaring met klantcontact in de horeca.',
};
export const experience = [
  { company: 'Tuler', role: 'Mede-eigenaar / webontwikkelaar', period: 'Maart 2025 – heden', current: true, points: ['Websites ontwikkeld, onderhouden en gehost voor zakelijke klanten.'] },
  { company: 'VMN Media', role: 'ICT-werkstudent · Webontwikkeling en automatisering', period: 'November 2023 – mei 2026', points: ['Webpagina’s ontwikkeld met WordPress, HTML en een CMS op basis van JSON.', 'Python-scripts geschreven om terugkerende computerwerkzaamheden te automatiseren.', 'Gewerkt met website-API’s, RSS-feeds en het interne querysysteem voor artikelen.', 'WordPress-tags en -categorieën aangepast via de serverconsole.'] },
  { company: 'Odin Company', role: 'ICT-werkstudent', period: 'Maart 2025 – november 2025', points: ['Gewerkt aan de ontwikkeling en aanpassing van een WordPress-website.', 'Een online cursus ingericht in de digitale leeromgeving Moodle.'] },
  { company: 'El Qatarijne', role: 'Medewerker bediening', period: 'Juli 2021 – oktober 2024', points: ['Gewerkt in de bediening, met veel direct en persoonlijk contact met gasten.'] },
];
export const education = [
  { degree: 'MSc Artificial Intelligence', school: 'Universiteit Utrecht', period: 'Februari 2025 – heden', note: 'Verwachte afronding: februari 2027' },
  { degree: 'BSc Artificial Intelligence', school: 'Universiteit Utrecht', period: 'Januari 2019 – januari 2025', note: 'Diploma behaald' },
];
export const skills = [
  { title: 'Programmeertalen', items: ['Python', 'JavaScript', 'C#', 'Haskell', 'Prolog'] },
  { title: 'Web en data', items: ['HTML', 'CSS', 'JSON', 'SQLite', 'API’s', 'RSS'] },
  { title: 'Systemen en platforms', items: ['WordPress', 'Moodle', 'Node.js', 'Linux'] },
  { title: 'Tools', items: ['Jira', 'Google Tag Manager'] },
];
export const languages = [{ name: 'Nederlands', level: 'Moedertaal', detail: '' }, { name: 'Engels', level: 'C1', detail: 'Cambridge English: Advanced (CAE)' }];
export const navigation = [{ href: '#ervaring', label: 'CV' }, { href: '#portfolio', label: 'Portfolio' }, { href: '/contact/', label: 'Contact' }];


export const portfolio = ['elqatarijne.nl', 'restaurant-istanbul.nl', 'bwd-dakwerken.nl', 'vollepotentieel.nl', 'sesa-security.nl'].map(domain => ({ domain, url: `https://${domain}`, preview: `/portfolio/${domain}.webp` }));


