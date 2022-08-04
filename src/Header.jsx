import {Component} from 'react'
class Header extends Component {
    constructor(props){
        super()
        this.props = props;
    }
    render(){
        return(
            <header>
                <h1>
                {this.props.Welcome}
                </h1>
            </header>
        )
    }
}
export default Header