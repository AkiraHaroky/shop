/* eslint-disable react/prop-types */
import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;
    if (!goods.length)
        return <h1 className="center-align not-found">Not found</h1>;
    return (
        <div className="goods">
            {goods.map((item) => {
                if (item.displayDescription !== "")
                    return (
                        <GoodsItem
                            key={item.offerId}
                            id={item.offerId}
                            name={item.displayName}
                            description={item.displayDescription}
                            price={item.price.regularPrice}
                            full_background={item.displayAssets[0].background}
                            addToBasket={addToBasket}
                        />
                    );
            })}
        </div>
    );
}

export { GoodsList };
