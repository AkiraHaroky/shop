/* eslint-disable react/prop-types */
function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
                <span className="card-title p-2">{name}</span>
            </div>
            <div className="card-content p-2">
                <p>{description}</p>
            </div>
            <div className="card-action p-2">
                <button
                    className="btn teal"
                    onClick={() => {
                        addToBasket({ id, name, price });
                    }}
                >
                    Купить
                </button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}
export { GoodsItem };
