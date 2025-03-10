import React from 'react';
import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { Section } from '@components/Section';

describe('Section', () => {
  it('renders correctly', () => {
    render(
      <Section title="Section title">
        <Text>Section text</Text>
      </Section>,
    );
    expect(screen).toMatchSnapshot();
  });
});
