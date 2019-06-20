/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import useWindow from '../../hooks/useWindow';
import { jsBreakpoints } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const Text = ({ data }) => {
  const { width } = useWindow();

  return (
    <FullWidthSection
      height='100%'
      padding={width > jsBreakpoints.phoneLarge ? '3rem 16rem' : '3rem'}
    >
      <section
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
    </FullWidthSection>
  );
};

Text.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Text;
