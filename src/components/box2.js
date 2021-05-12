import React from 'react'
import Box1 from './box1'

class Box2 extends React.Component {

    render() {
        return (
            <div>
                <Box1 name={this.props.name} />
            </div>
        )
    }
}
export default Box2;