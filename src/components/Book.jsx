function Book(props) {
    return (
        <>
            <label htmlFor="Weight">Weight(KG)</label>
            <input id ="weight" type="text" name="Weight" pattern="[0-9]*\.[0-9]+|[0-9]+" required></input>
            <p>Please Provide the weight in KG.</p>
        </>
    )

}
export default Book;