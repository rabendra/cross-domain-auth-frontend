import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GoogleLoginButton from './GoogleLoginButton'
import {
  requestLogin,
  receiveLogin,
} from '../../actions/google_auth'

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
)(GoogleLoginButton)
