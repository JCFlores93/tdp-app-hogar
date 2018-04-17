import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'

class Home extends Component {
    state = {

        listCode: [
            { plan: 'USA', code: 'USA' },
            { plan: 'RUSIA', code: 'RUSIA' },
            { plan: 'PERU', code: 'PERU' },
            { plan: 'PERU', code: 'PERU' },
            { plan: 'PERU', code: 'PERU' },
            { plan: 'PERU', code: 'PERU' }
        ]
    }

    changeList = (event) => {
        console.log("Log ", event.target.value)
    }
    render() {
        return (
            <div>
                <h1>Mi Movistar</h1>
                <select
                    name="country"
                    multiple={false}
                    value={this.state.listCode}
                    onChange={event => (this.changeList(event))}
                >
                    {
                        this.state.listCode.map((e, key) => {
                            return <option
                                key={key}
                                value={e.plan}
                            >
                                {e.code}
                            </option>
                        })
                    }

                </select>
            </div>
        );
    }
}

export default Home