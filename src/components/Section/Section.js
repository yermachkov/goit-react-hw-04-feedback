import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Box ml={'auto'} mr={'auto'} width={[1 / 2]} as="section">
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
