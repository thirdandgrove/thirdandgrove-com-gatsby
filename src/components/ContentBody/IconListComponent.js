import React from 'react';
import PropTypes from 'prop-types';

import CTAGrid from '../CTAGrid/CTAGrid';

const IconListComponent = ({ data }) => {
  const icons = data.relationships.field_icon_item;
  const iconList = [];
  icons.map(icon => {
    return iconList.push({
      title: icon.title,
      icon: [icon.relationships.field_icon],
    });
  });

  return (
    <CTAGrid
      header={data.field_header_text}
      textColor={data.field_text_color}
      items={iconList}
      backgroundColor={data.field_primary_color.color}
      altStyle
      drupalData
    />
  );
};

IconListComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IconListComponent;
