import { connect } from 'react-redux';
import Counter from '../components/counter';
import { add, sub } from '../actions/action';

const mapStateToProp = (state) => {
    return{
        val: state.counter.val
    }
}

const mapDispatchToProp = {
    add,
    sub
}

export default connect(
    mapStateToProp,
    mapDispatchToProp
)(Counter);