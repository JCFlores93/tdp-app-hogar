import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import DebtLayout from '../components/debt-layout'
import CurrentPlanLayout from '../components/current-plan-layout'

class Home extends Component {
    state = {

        listCode: [
            { plan: 'USA', code: 'USA' },
            { plan: 'RUSIA', code: 'RUSIA' },
            { plan: 'PERU', code: 'PERU' },
            { plan: 'PERU', code: 'PERU' },
            { plan: 'PERU', code: 'PERU' },
            { plan: 'PERU', code: 'PERU' }
        ],
        debts: {
            amount: "100",
            date: "27 de Febrero"
        },
        product: {
            name:"trío",
            product1: "Internet 6 mbps",
            product2: "Internet 6 mbps",
            product3: "Internet 6 mbps"
        }
    }

    changeList = (event) => {
        console.log("Log ", event.target.value)
    }

    showAlert = () => {
        console.log("It's working")
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
                    {/*TODO:
                    *CREATE TABS AND SLIDER AND PASS ALL THERE.
                
                */}


                <HomeLayout />
                <DebtLayout
                    debts={this.state.debts}
                    showAlert={() => this.showAlert()}
                />
                <CurrentPlanLayout
                    product={this.state.product}
                />
            </div>
        );
    }
}

export default Home