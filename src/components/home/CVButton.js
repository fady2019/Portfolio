import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faFilePdf,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

import Dropdown from '../ui/Dropdown';
import { Fragment } from 'react';

import CV from '../../media/Fady_Emad_CV.pdf';

const CVButton = (props) => {
  const dropdownBtnContent = (
    <Fragment>
      CV <FontAwesomeIcon icon={faAngleDown} />
    </Fragment>
  );

  return (
    <Dropdown btnContent={dropdownBtnContent}>
      <a href={CV} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFilePdf} /> Open
      </a>
      <a href={CV} download rel="noreferrer">
        <FontAwesomeIcon icon={faDownload} /> Download
      </a>
    </Dropdown>
  );
};

export default CVButton;
