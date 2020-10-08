import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../../redux/actions';
import Home from './Home';

const mapStateToProps = state => ({
  imageGalleryData: state.imageGallery,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchItems,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
