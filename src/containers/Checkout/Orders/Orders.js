import React from 'react';
import Order from '../../../components/Order/Order';
import axios from '../../../axios-orders';
class Orders extends React.Component {
  state = {
    order: [],
    loading: true
  }
  componentDidMount() {
    axios.get('/orders.json')
    .then(res => {
      const fetchOrders = [];
      for (let key in res.data) {
          fetchOrders.push({
            ...res.data[key],
            id: key
          });
      }
      console.log('data is', fetchOrders);
        this.setState({
          order: fetchOrders,
          lading: false
        });
    })
    .catch(err => {
      this.setState({
        laoding: true
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.order.map(order => (
          <Order
          key = {order.id}
          ingredients = {order.ingredients}
          price = {order.price} />
        ))}
      </div>
    );
  }
}
export default Orders;
