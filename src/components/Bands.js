import { Component} from "react";
import BandEach from "./BandEach";
import { connect } from 'react-redux';

class Bands extends Component {
    render() {
        return (
            <div className="container-fluid">
                <BandEach characters={this.props.bands} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bands: state.characters
    }
}
 
export default connect(mapStateToProps)(Bands);