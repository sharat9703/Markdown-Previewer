import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';
/* 
a header (H1 size), a sub header (H2 size), 
a link, inline code, 
a code block, a list item, a blockquote, 
an image, and bolded text
*/
function App() {
  const [text,setText] = useState(`
   # Heading1
   ## Heading2
   [facebook](https://www.facebook.com/)

   \`code\`
      
   \`\`\`
      {
        "firstName": "John",
        "lastName": "Smith",
        "age": 25
      }
   \`\`\`
   - First item
   - Second item
   - Third item
    
      > blockquote
    
  ![image](image.jpg)
     
  **bolded text**
  `);
  marked.setOptions({
    breaks : true
  });
  return (
    <div className="App">
       <textarea id='editor' onChange={(event)=>{
        setText(event.target.value);
       }}
       value={text}
       ></textarea>
       <div id='preview' dangerouslySetInnerHTML={{
        __html : marked(text),
       }}></div>
    </div>
  );
}

export default App;
