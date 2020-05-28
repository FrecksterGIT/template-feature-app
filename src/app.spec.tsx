/**
 * @jest-environment jsdom
 */
import * as React from 'react';

import * as TestRenderer from 'react-test-renderer';

import templateFeatureAppDefinition from './app';
import {Entry} from './components/entry';

test('output contains one entry point', () => {
  const featureApp = templateFeatureAppDefinition.create(undefined);
  const rendered = TestRenderer.create(<>{featureApp.render()}</>);

  const instance = rendered.root;
  expect(instance.findAllByType(Entry)).toHaveLength(1);
  expect(rendered.toJSON()).toMatchSnapshot();
});
