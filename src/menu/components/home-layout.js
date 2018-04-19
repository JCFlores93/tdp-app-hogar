import React from 'react'

selector = props => (
    (
        <div>
            <select
                name="country"
                multiple={false}
                value={this.props.list}
                onChange={this.props.onChange}
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
    )
)

tabsCollection = props => (
    (
        <div>
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
        </div>
    )
)



planView = props => (
    (
        <div>
            {/*<p>Tu Plan: {props.product.name}</p>
            <p>Producto1: {props.product.product1}</p>
            <p>Producto2: {props.product.product2}</p>
    <p>Producto3: {props.product.product3}</p>*/}
            {/*<button onClick={props.showAlert}>Press me!</button>*/}
        </div>
    )
)





/*function HomeLayout(props) {
    return (
        <div></div>
    )
}

Selector() = props => {

}*/
export { selector, tabsCollection, planView }