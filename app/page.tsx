import Home from "./home"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World Super Talents Book Of Records",
  description: "Developing balance, coordination, focus, respect, discipline, self-defense is well known features of every practice. However, we would like to turn your attention to some of the other important benefits that every kid is receiving in his or her karate class.",
  alternates: {
    canonical: 'https://www.worldsupertalents.com/',
  },
};


export default function App() {
  return (
    
    <Home/>
  );
}
