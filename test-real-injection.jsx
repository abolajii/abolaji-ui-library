// Real test of auto-injection by importing the actual package
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Input, Button, Alert } from 'abolaji-ui-components';

function TestAutoInjection() {
  const [injectionStatus, setInjectionStatus] = React.useState('Checking...');
  
  React.useEffect(() => {
    // Check if styles were auto-injected
    setTimeout(() => {
      const stylesElement = document.getElementById('abolaji-ui-styles');
      if (stylesElement) {
        setInjectionStatus('✅ AUTO-INJECTION SUCCESS! Styles found in DOM');
        console.log('Found injected styles:', stylesElement);
      } else {
        setInjectionStatus('❌ AUTO-INJECTION FAILED! No styles element found');
        console.log('Available style elements:', document.querySelectorAll('style, link[rel="stylesheet"]'));
      }
    }, 100); // Small delay to ensure injection happens
  }, []);
  
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold text-blue-600">Real Auto-Injection Test</h1>
      
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800 font-medium">{injectionStatus}</p>
      </div>
      
      <div className="space-y-4">
        <Input placeholder="Test input - should be styled!" />
        <Button variant="primary">Test Button - should be styled!</Button>
        <Alert variant="success">Test Alert - should be styled!</Alert>
      </div>
      
      <div className="mt-6 p-3 bg-gray-100 rounded text-sm">
        <p><strong>How to verify:</strong></p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Check the status message above</li>
          <li>Open DevTools → Elements → Look for &lt;style id="abolaji-ui-styles"&gt;</li>
          <li>Components should be visually styled (not unstyled)</li>
          <li>Check browser console for injection log</li>
        </ul>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TestAutoInjection />);
