import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

const GrapesEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = grapesjs.init({
        container: editorRef.current,
        // Add your configuration options here
      });

      // Add custom blocks to the editor
      editor.BlockManager.add('my-block', {
        label: 'My Block',
        content: '<div class="my-block">This is my custom block</div>',
      });
    }
  }, []);

  return <div ref={editorRef}></div>;
};

export default GrapesEditor;
