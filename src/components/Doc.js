import { useEffect } from "react";
import * as Heading from "./H1.js"
import "./../styles/Doc.css"

export default function Doc() {
  useEffect(() => {
    document.title = "Documentation | Porridge.js";
  }, []);

  return (
		<div className='container'>
		</div>
  );
}