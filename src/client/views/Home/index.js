import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getPosts, deletePost, createPost } from '../../redux/actions';
import Home from './Home';

// const mapStateToProps = (state) => ({
//   postsData: state.postsData,
// });

// const mapDispatchToProps = (dispatch) => (
//   bindActionCreators({
//     getPosts,
//     deletePost,
//     createPost,
//   }, dispatch)
// );

export default connect(null, null)(Home);
