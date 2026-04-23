/**
 * Video view component.
 * @module components/theme/View/VideoView
 */

import PropTypes from 'prop-types';
import { Container as SemanticContainer } from 'semantic-ui-react';
import config from '@plone/volto/registry';

/**
 * Video view component class.
 * @function VideoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const VideoView = ({ content }) => {
  const Container =
    config.getComponent({ name: 'Container' }).component || SemanticContainer;

  return (
    <Container className="view-wrapper">
      <h1 className="documentFirstHeading">
        {content.title}
        {content.subtitle && ` - ${content.subtitle}`}
      </h1>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
      )}
      <video width="400" controls>
        <source
          src={content.video.download}
          type={content.video['content-type']}
        />
      </video>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
VideoView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default VideoView;
