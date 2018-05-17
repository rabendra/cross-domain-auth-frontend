import React from 'react'
import { connect } from 'react-redux'

const Welcome = (props) => {
    debugger
  return(<div className="container text-center">
    <p>Welcome, {props.profile.username} !</p>
    <div class="container">
    <div class="row">
        <div class="col-sm-2 col-md-2">
            <img src="http://thetransformedmale.files.wordpress.com/2011/06/bruce-wayne-armani.jpg"
            alt="" class="img-rounded img-responsive" />
        </div>
        <div class="col-sm-2 col-md-4">
            <blockquote>
                <p>{props.profile.username}</p> 
            </blockquote>
            <p> <i class="glyphicon glyphicon-envelope"></i>{props.profile.email}
                <br
                /> <i class="glyphicon glyphicon-globe"></i> www.bootsnipp.com
                <br /> <i class="glyphicon glyphicon-gift"></i> {props.profile.created_at}</p>
        </div>
    </div>
</div>
  </div>)
}
const mapStateToProps = (state) => ({
  profile: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)
