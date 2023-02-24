const hello = async (req, res) => {
    try {
        console.log("hello")
        res.send("Hello World")
    } catch (error) {
        console.log(error)
    }
}

export {hello}  