/* eslint-disable react/prop-types */
import { BasketItem } from "./basketItem";
function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className="collection basket-list">
            <li className="collection-item active teal">Корзина</li>
            {order.length ? (
                order.map((item) => {
                    return (
                        <BasketItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            removeFromBasket={removeFromBasket}
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}
                        />
                    );
                })
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active teal">
                Общая стоимость заказа: {totalPrice} руб.
            </li>
            <i
                className="material-icons basket-clear"
                onClick={handleBasketShow}
            >
                clear
            </i>
        </ul>
    );
}

export { BasketList };
