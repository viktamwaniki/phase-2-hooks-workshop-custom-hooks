import { useEffect } from "react";

/* ✅ create a new function called useDocumentTitle */
/* 👀 export function useDocumentTitle() {} */


export function useDocumentTitle(){
  useEffect(() => {
    document.title = "test title";
  }, []);
}

export default function Home() 
  /* 
    ✅ move the useEffect code into your useDocumentTitle function
   then, call the useDocumentTitle hook in your component
  */
  useEffect(() => {
    document.title = "Welcome to the home page!";
  }, []);
  useDocumentTitle()

  return (
    <div>
@@ -21,4 +25,4 @@ export default function Home() 
    
    </div>
  );k