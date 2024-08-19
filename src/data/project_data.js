import html_icon from '../assets/icons/html.png';
import css_icon from '../assets/icons/css.png';
import js_icon from '../assets/icons/javascript.png';
import react_icon from '../assets/icons/react.png';
import ts_icon from '../assets/icons/typescript.png';
import github_icon from '../assets/icons/github.png';
import external_link_icon from '../assets/icons/external_link.png';
import nextjs_icon from '../assets/icons/nextjs.png';
import java_icon from '../assets/icons/java.png';

const projects = [
  {
    id: 1,
    title: "Petow's Pantry",
    icons: [
      { src: html_icon, alt: 'HTML' },
      { src: css_icon, alt: 'CSS' },
      { src: ts_icon, alt: 'TypeScript' },
      { src: react_icon, alt: 'React.js' },
      { src: nextjs_icon, alt: 'Next.js' }
    ],
    description: 'A mobile-friendly web app that allows users to easily search for and follow recipes in kitchen settings.',
    links: [
      { url: 'https://github.com/runkev/petows-pantry-next', alt: 'GitHub', src: github_icon },
      { url: 'https://www.petowspantry.com/', alt: 'Website', src: external_link_icon },
    ]
  },
  {
    id: 2,
    title: "Fight Cave Helper",
    icons: [
      { src: java_icon, alt: 'Java' }
    ],
    description: 'A plugin for RuneLite (an open-source desktop application) that helps players of the game Old School RuneScape with the Fight Cave minigame.',
    links: [
      { url: 'https://github.com/runkev/fight-cave-helper', alt: 'GitHub', src: github_icon }
    ]
  }
];

export default projects;