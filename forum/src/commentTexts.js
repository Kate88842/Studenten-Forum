const commentTexts = {
  1: [
    'Ik kies meestal Laravel. Werkt lekker snel.',
    'Symfony is ook goed, vooral voor grote projecten.',
    'Gebruik vooral wat je al kent.',
    'Ik vind Laravel makkelijker om mee te beginnen.',
    'Test ze allebei eens uit!',
  ],
  2: [
    'Ik zet routes en controllers apart.',
    'Goede namen maken zoeken makkelijker.',
    'Composer is handig voor je packages.',
    'Ik houd de databasecode apart.',
    'Een korte README helpt ook.',
  ],
  3: [
    'Ja, de nieuwe versie werkt prima.',
    'Check wel eerst je packages.',
    'Er zitten handige nieuwe functies in.',
    'Test de update eerst lokaal.',
    'Goed moment om oude code op te ruimen.',
  ],
  4: [
    'Controleer altijd wie toegang heeft.',
    'Check invoer ook op de server.',
    'Gebruik altijd HTTPS.',
    'Zet een limiet op verzoeken.',
    'Een checklist is handig.',
  ],
  5: [
    'Ik gebruik TypeScript bij grote projecten.',
    'Voor kleine dingen is JavaScript prima.',
    'Types helpen fouten te vinden.',
    'Ik vind TypeScript fijn werken.',
    'Je kunt rustig met één bestand beginnen.',
  ],
};

const names = ['Sam', 'Noor', 'Daan', 'Mila', 'Robin'];

export default function getDutchComments(postId, comments) {
  const texts = commentTexts[postId] || commentTexts[1];

  return comments.map((comment, index) => ({
    ...comment,
    name: names[index % names.length],
    body: texts[index % texts.length],
  }));
}
