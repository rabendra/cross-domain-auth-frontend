import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchUserList} from './actions'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
class UserList extends Component {

  constructor(props){
    super(props);
    this.state = { 
      filterText: "",
      users: this.props.users
     };
     this.filterList = this.filterList.bind(this);
  }
  componentDidMount () {
    this.props.fetchUserList()
    // this.setState({users: this.props.users})
  }

  filterList(event){
    
    var users = []
    var commentNodes = this.props.users.filter(function(user) {
    
    var provider = ""

         provider = user.provider == null ? "" : user.provider
         if(provider.match(event.target.value) != null ){
            return users.push(user)
          }else{
            return []
          }
    })
    // var updatedList = this.state.users;
    // updatedList = updatedList.filter(function(item){
    //   return item.toLowerCase().search(
    //     event.target.value.toLowerCase()) !== -1;
    // });
    // this.setState({users: updatedList});
    debugger
    this.setState({users: users})
  }

  render () {    
    return (
      <div>
      <div>
        <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
          
        </div>
      </div>
      <div className="UserList">
        <BootstrapTable data={this.state.users} striped hover>
          <TableHeaderColumn isKey dataField='id'>User ID</TableHeaderColumn>
          <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
          <TableHeaderColumn dataField='username'>Username</TableHeaderColumn>
          <TableHeaderColumn dataField='created_at'>Username</TableHeaderColumn>
          <TableHeaderColumn dataField='updated_at'>Username</TableHeaderColumn>
          <TableHeaderColumn dataField='provider'>Username</TableHeaderColumn>
        </BootstrapTable>,
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.userReucer.users,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchUserList,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)