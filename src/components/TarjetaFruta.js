import React from 'react'

class TarjetaFruta extends React.Component {
    state = {
        cantidad: 0
    }

    agregar = () => this.setState({
        cantidad: this.state.cantidad + 1
    })

    eliminar = () => this.setState({
        cantidad: this.state.cantidad - 1
    })

    limpiar = () => this.setState({
        cantidad: 0
    })

    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>$ {this.props.price}</p>
                <div>Cantidad: {this.state.cantidad} </div>
                <p>Total: $ { this.props.price * this.state.cantidad } </p>
                <button onClick={ this.agregar }>+</button>
                <button onClick={ this.eliminar }>-</button>
                <button onClick={ this.limpiar }>limpiar</button>
                <hr />

            </div>
        )
    }

}

export default TarjetaFruta