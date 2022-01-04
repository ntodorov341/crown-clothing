import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

const Directory = () => {
  const sections = useSelector((state) => selectDirectorySections(state));
  return (
    <div className="directory-menu">
        {
          sections.map(({ title, imageUrl, size }) => (
                <MenuItem
                    key={imageUrl}
                    title={title.toUpperCase()}
                    imageUrl={imageUrl}
                    size={size}
                />
            ))
        }
    </div>
  )
};

export default Directory;