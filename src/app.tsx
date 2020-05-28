import * as React from 'react';

import {FeatureAppDefinition, FeatureServices} from '@feature-hub/core';
import {ReactFeatureApp} from '@feature-hub/react';

import {Entry} from './components/entry';

interface Dependencies extends FeatureServices {
}

export interface TemplateFeatureAppConfig {
}

const templateFeatureAppDefinition: FeatureAppDefinition<ReactFeatureApp, Dependencies, TemplateFeatureAppConfig> = {
  create: () => {
    return {
      // disable eslint rule because this is a (Feature Hub) React Feature App that doesn't define a `displayName` attribute
      // eslint-disable-next-line react/display-name
      render: (): React.ReactNode => (
        <>
          <Entry/>
        </>
      ),
    };
  },
  dependencies: {
    externals: {react: '16.13.1'},
  },
};

export default templateFeatureAppDefinition;
