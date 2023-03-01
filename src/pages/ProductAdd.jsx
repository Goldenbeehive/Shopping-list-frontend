import Top from "../components/Top"
import DVD from "../components/DVD";
import Book from "../components/Book";
import Furniture from "../components/Furniture";
import { useState } from "react";
import React from "react";
function ProductAdd(props) {
    let [selected, changedSelected] = useState("DVD");
    const change = () => {
        let x = document.getElementById("productType")

        changedSelected(x.options[x.selectedIndex].text);


    }
    return <div>
        <Top title='Product Add' buttonname1="Save" buttonname2="Cancel" func1={async () => {
            let form = document.getElementById("product_form");
            if (form.checkValidity()) {
                let data = {};
                for (let i = 0; i < 8; i++) {
                    if (form.elements[i] == undefined) {

                    } else {
                        if (form.elements[i].pattern == "^[0-9]+$") {
                            data[form.elements[i].name] = parseInt(form.elements[i].value);
                        } else if(form.elements[i].pattern == "[0-9]*\\.[0-9]+|[0-9]+") {
                            data[form.elements[i].name] = parseFloat(form.elements[i].value);
                        }else{
                            data[form.elements[i].name] = form.elements[i].value;

                        }

                    }
                }
                 let skus = await fetch("/del.php",{
                    method:"Get",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                 });
                 skus = await skus.json();
                 
                 for(let value in skus){
                    if(data.SKU == skus[value]){
                        alert("This sku is used before, please use another one.");
                        return;
                    }
                 }
                switch (data.Type) {
                    case "1":
                        data.Type = "dvd";
                        break;
                    case "2":
                        data.Type = "books";
                        break;
                    case "3":
                        data.Type = "furniture";
                        break;
                    default:
                        break;
                }
                console.log(JSON.stringify(data));
                
                fetch("/server.php", {
          
                method: "POST",
                
                body: JSON.stringify(data),
              
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
             .then(()=>
             {
                window.location.pathname  = "";
             })
            } else {
                form.reportValidity()
            }
        }} func2={() => { window.location.pathname = ""; }}></Top>
        <form id="product_form" action="" method="POST">

            <label htmlFor="SKU">SKU</label>
            <input type="text" id="sku" name="SKU" required></input>


            <label htmlFor="Name">Name</label>
            <input type="text" id="name" name="Name" required></input>


            <label htmlFor="Price" >Price ($)</label>
            <input type="text" id ="price" name="Price" pattern="[0-9]*\.[0-9]+|[0-9]+" required></input>


            <label htmlFor="Type">Type Switcher</label>
            <select id="productType" name="Type" onChange={change} required>
                <option value="1">DVD</option>
                <option value="2">Book</option>
                <option value="3">Furniture</option>
            </select>
            {selected == "DVD" &&
                <DVD></DVD>}
            {selected == "Furniture" &&
                <Furniture></Furniture>}
            {selected == "Book" &&
                <Book></Book>}
        </form>
    </div>
}

export default ProductAdd
