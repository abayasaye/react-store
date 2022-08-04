import {Component} from 'react'
// import Text from './Prodact-img'
class Title extends Component{
    constructor(props){
        super()
        this.props = props;
    }
    render(){
        return(
            <h1>
                {this.props.Text}
            </h1>
        )
    }
}
export default Title