import {FeatureHubReact, React, renderDemo} from '@das-buro-am-draht/feature-app-demo-integrator';

renderDemo(
  <>
    <FeatureHubReact.FeatureAppLoader
      featureAppId="demo"
      baseUrl=".."
      src="app.js"
    />
  </>,
);
