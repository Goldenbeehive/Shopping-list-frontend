import Top from "../components/Top";
import Card from "../components/Card";
import { useState, useEffect } from "react";
let list = [];
let del = {};
function ProductList(props) {
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/server.php", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json())
            .then((data) => {
                list = data;
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div></div>
    } else {
        return <div>
            <Top title='Product list' buttonname1="ADD" buttonname2="MASS DELETE" func1={() => { window.location.pathname = "add-product"; }} func2={() => {
                for (let i = 0; i < list.length; i++) {
                    if (document.getElementById(list[i].id).checked) {
                        del[list[i].id] = list[i].id;
                    }
                }
                fetch("/del.php", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(del)
                }).then((res) => {
                    del = {};
                    window.location.pathname = "";
                })

            }}></Top>
            <div id="CardHolder">
                {list.map((card, i) => {
                    if (card.type == "dvd") {
                        return <Card key={card.id} id={card.id} name={card.name} sku={card.sku} type={card.type} size={card.size} price={Number(card.price).toFixed(2)}></Card>
                    }
                    if (card.type == "furniture") {
                        return <Card key={card.id} id={card.id} name={card.name} sku={card.sku} type={card.type} height={card.height} width={card.width} length={card.length} price={Number(card.price).toFixed(2)}></Card>
                    }
                    if (card.type == "books") {
                        return <Card key={card.id} id={card.id} name={card.name} sku={card.sku} type={card.type} weight={card.weight} size={card.size} price={Number(card.price).toFixed(2)}></Card>
                    }

                })}
            </div>
        </div>
    }

}
export default ProductList;