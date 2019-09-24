import { connect } from "react-redux";
import Player from "./Player";
import { editPlayer } from "../../data/actions/state";
import { deletePlayer } from "../../data/actions/state"
import { editMode } from "../../data/actions/state"

const mapStateToProps = state => ({
    players: state.players,
}); 

const mapDispatchToProps = dispatch => ({
    edit: (values, index) => dispatch(editPlayer(values, index)),
    delete: (values, index) => dispatch(deletePlayer(values, index)),
    editMode: (values, index) => dispatch(editMode(values, index)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);