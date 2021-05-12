import React from 'react'
import Box2 from './box2'

class Box3 extends React.Component {


    render() {
        return (
            <div>

                <Box2 onClick={this.changeIt} name={this.props.name} />


                <Box2 onClick={this.changeIt} name={this.props.name} />

            </div >
        )
    }
}

export default Box3;