import React from 'react'
import './index.css'
import Box3 from './box3'

class App extends React.Component {

    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
        }
    }


    changeIt = () => {
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: this.state.tardis.name.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis: {
                    name: this.state.tardis.name.toUpperCase(),
                    caps: true
                }
            })
        }
    }

    render() {
        return (
            <div>
                <div onClick={this.changeIt}>
                    <Box3 name={this.state.tardis.name} />
                </div>

            </div>
        )
    }
}

export default App