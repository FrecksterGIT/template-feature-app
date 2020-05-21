import {FeatureHubReact, React, renderDemo} from '@das-buro-am-draht/feature-app-demo-integrator';

renderDemo(
  <>
    <link rel={'stylesheet'} href={'audi-core-css/audi-core-css.min.css'}/>
    <FeatureHubReact.FeatureAppLoader
      featureAppId="demo"
      baseUrl=".."
      src="app.js"
      css={[{
        href: 'app.css',
      }]}
    />
  </>,
);
