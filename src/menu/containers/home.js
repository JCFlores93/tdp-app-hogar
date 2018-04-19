import React, { Component } from 'react'
//import HomeLayout from '../components/home-layout'
import DebtLayout from '../components/debt-layout'
import CurrentPlanLayout from '../components/current-plan-layout'
import '../components/home-layout.css'
import {
    selector as SelectorLayout,
    tabsCollection as Tab,
    planView as MainPlan
} from '../components/home-layout'

class Home extends Component {

    componentDidMount() {

    }
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
            name: "trío",
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

    componentDidMount() {
        document.getElementById("defaultOpen").click()
        /*let defaultTab = this.refs.defaultOpen
        defaultTab.click()*/
        //this.button.click()
        //console.log("1")
    }

    openCity = (event, cityName) => {
        console.log("event ", event)
        console.log("cityName  ", cityName)
        // Get the element with id="defaultOpen" and click on it
        let tabcontent = document.getElementsByClassName("tabcontent")
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none"
        }
        let tablinks = document.getElementsByClassName("tablinks")
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "")
        }
        document.getElementById(cityName).style.display = "block"
        event.currentTarget.className += " active"
    }

    render() {

        return (
            <div>
                <Tab
                    onClick={this.openCity()}
                >
                    <SelectorLayout
                        list={this.state.listCode}
                        onChange={event => (this.changeList(event))}
                    />
                    <MainPlan />

                </Tab>
                {/*
                <div className="tab">
                    <button className="tablinks" ref={button => this.button = button} onClick={event => this.openCity(event, 'London')} id="defaultOpen">London</button>
                    <button className="tablinks" onClick={event => this.openCity(event, 'Paris')}>Paris</button>
                    <button className="tablinks" onClick={event => this.openCity(event, 'Tokyo')}>Tokyo</button>
                </div>
                <div id="London" class="tabcontent">
                    <h3>London</h3>
                    <p>London is the capital city of England.</p>
                </div>

                <div id="Paris" class="tabcontent">
                    <h3>Paris</h3>
                    <p>Paris is the capital of France.</p>
                </div>

                <div id="Tokyo" class="tabcontent">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>

                <h1>Mi Movistar</h1>
                */}

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