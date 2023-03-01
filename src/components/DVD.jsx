function DVD(props) {
    return (
        <>
            <label htmlFor="Size">Size(MB)</label>
            <input id = "size" type="text" name="Size" pattern="[0-9]*\.[0-9]+|[0-9]+" required></input>
            <p>Please Provide the size in MB.</p>
        </>
    )
}
export default DVD;