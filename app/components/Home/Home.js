require('./Home.css');
import React from 'react';
import BlogIntro from '../../components/Blog-intro-container/Blog-intro-container';
import {getUserInfo,getPosts} from '../../utils/helpers'


// var Home = React.createClass({

// 	getInitialState: function() {
// 		{
//             cardData: [],
//             userInfo: {},
//             intro: ''
//         }
// 	}

// 	render: function(){
//         return (
//             <div>
//                 <BlogIntro />
//             </div>
//         )
//     }
// })


class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cardData: [],
            userInfo: {},
            intro: ''
        }
    }

    render(){
        return (
            <div className='main-home-container'>
                <BlogIntro />
            </div>
        )
    }

}


export default Home