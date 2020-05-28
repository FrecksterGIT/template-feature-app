import {FeatureHubReact, React, renderDemo} from '@das-buro-am-draht/feature-app-demo-integrator';
import {version as coreCssVersion} from '@das-buro-am-draht/audi-core-css/package.json';

const coreCSSUrl = 'https://assets.audi.com/audi-core-css/' + coreCssVersion + '/audi-core-css.min.css';

renderDemo(
  <>
    <link rel={'stylesheet'} href={coreCSSUrl}/>
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
