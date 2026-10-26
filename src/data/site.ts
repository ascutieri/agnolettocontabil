export const site = {
  name: 'Agnoletto Contabilidade',
  url: 'https://agnolettocontabil.com.br',
  description:
    'Agnoletto Contabilidade, escritório contábil em Salto/SP. Novo site em breve.',
  address: {
    street: 'Av. Dom Pedro II, 301 - Sala 63',
    building: 'Edifício Universo',
    district: 'Centro',
    city: 'Salto',
    state: 'SP',
    zip: '13320-240',
  },
  phone: '(11) 9.1317-1755',
  whatsapp: 'https://wa.me/5511913171755',
  email: 'contato@agnolettocontabil.com.br',
  instagram: 'agnoletto.contabil',
  hours: 'Seg-Sex 9h-17:30',
} as const;

export const mapQuery = `${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`;

export const nav = [
  { label: 'Início', href: '/' },
  { label: 'Contato', href: '/contato' },
];
