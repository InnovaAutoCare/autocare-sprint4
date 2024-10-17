import type { Config } from "tailwindcss";

const config: Config = {
  content: [ "./src/**/*.{js,ts,jsx,tsx,mdx}" ],
  theme: {
    extend: {
      colors:{
        preto: 'var(--preto)',
        cinzaEscuro: 'var(--cinza-escuro)',
        cinzaClaro: 'var(--cinza-claro)',
        branco: 'var(--branco)',
        corP1: 'var(--cor-p1)',
        corP2: 'var(--cor-p2)',
        corP3: 'var(--cor-p3)',
        corP4: 'var(--cor-p4)',
      }
    },
  },
  plugins: [],
};
export default config;
