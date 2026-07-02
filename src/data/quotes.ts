export interface Quote {
  text: string;
  attribution?: string;
}

// Footer picks one of these at random on every page load (see Footer.astro).
// Keep it a mix of a few real attributed quotes (F1 / football) and a few
// in-voice original lines. Add more of either kind freely — no ordering
// requirements, no build step needed to pick one up.
export const quotes: Quote[] = [
  // Attributed
  { text: 'No risk, full push.', attribution: 'Max Verstappen' },
  { text: "Football is a simple game based on the giving and taking of passes.", attribution: 'Bill Shankly' },
  { text: 'You have to be at 100%, or else you’re gonna lose.', attribution: 'Lewis Hamilton' },

  // Give me more of these, please. I want to see more quotes in the future.

  { text: 'The only way to prove that you’re a good sport is to lose.', attribution: 'Ernie Banks' },

  // In-voice
  { text: 'Sorted by recency, not importance.' },
  { text: 'Writing is just debugging in prose.' },
  { text: 'Consistency over intensity.' },
  { text: 'Full version on request.' },
  { text: 'Ship it, then write it up.' },
  { text: 'The log doesn’t lie.' },
];
