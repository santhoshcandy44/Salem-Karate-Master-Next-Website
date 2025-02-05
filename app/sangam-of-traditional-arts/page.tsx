import Home from "./home2"


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sangam Of Traditional Arts",
  description: "We have FIT INDIA,MSME,ISO certifications that apparently makes your right choice of yours. Developing balance, coordination, focus, respect, discipline, self-defense is well known features of every practice.However, we would like to turn your attention to some of the other important benefits that every kid is receiving in his or her karate class.",
  alternates: {
    canonical: 'https://www.worldsupertalents.com/sangam-of-traditional-arts/',
  },
};


export default function App() {
  return (
    
    <Home/>
  );
}
