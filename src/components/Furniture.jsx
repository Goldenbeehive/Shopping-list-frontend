function Furniture(props){
    return(
        <>
        <label htmlFor="Height">Height(CM)</label>
        <input id="height"type="text" name="Height" pattern="^[0-9]+$" required></input>

        <label htmlFor="Width">Width(CM)</label>
        <input id="width"type="text" name="Width" pattern="^[0-9]+$" required></input>

        <label htmlFor="Length">Length(CM)</label>
        <input id="length"type="text" name="Length" pattern="^[0-9]+$" required></input>
        <p>Please Provide dimensions in HxWxL format.</p>
        </>
    )
}
export default Furniture;