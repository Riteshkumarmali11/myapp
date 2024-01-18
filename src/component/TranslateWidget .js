import React, { useEffect } from 'react';

const TranslateWidget = () => {
  useEffect(() => {
    // Function called when the Google Translate Widget script is loaded
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

    // Load the Google Translate Widget script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup: Remove the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* The Google Translate Widget will be rendered here */}
    </div>
  );
};

export default TranslateWidget;
