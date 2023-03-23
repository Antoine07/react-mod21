import { useEffect } from 'react';

export default function useExternalScripts({ url }){
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("src", 'https://kit.fontawesome.com/c24dd1abcd.js');
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, [url]);
};