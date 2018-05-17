import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FacebookLoginButton from './FacebookLoginButton'
import {
  requestLogin,
  receiveLogin,
} from '../../actions/fb_auth'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    requestLogin,
    receiveLogin,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookLoginButton)
