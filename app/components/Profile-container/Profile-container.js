require('./Profile-container.css');
import React from 'react';
import Profile from './Profile/Profile';
import PhotoGrid from './Image-block/Image-block';
import {getUserInfo,getPosts} from '../../utils/helpers'

class  ProfileContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardData: [],
            userInfo: {},

        }
    }

componentDidMount(){
           getUserInfo(this.props.params.userid).then(function(data){
               this.setState({
                   userInfo: data.data
               })
           }.bind(this));

           getPosts().then(function(data){
               this.setState({
                   cardData: data.data
               })
           }.bind(this));

       }
    render(){
        return (
            <div className='main-profile-container'>
              <Profile user={this.state.userInfo} />
              <PhotoGrid cardData={this.state.cardData} />
            </div>
        )
    }
}
export default ProfileContainer