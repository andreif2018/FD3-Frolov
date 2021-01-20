class AJAXStorage {

    constructor() {
        this.ajaxHandlerScript = "http://localhost:3001/posts";
        this.storage = null;
    }

    storeInfo = function(value) {
        fetch(this.ajaxHandlerScript + "/2", { // /2 means songList in storage found by id
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(value)
        }).catch(console.log);
    }

    restoreInfo = function() {
        let smth;
        fetch(this.ajaxHandlerScript + "/2")
            .then(res => res.json())
            .then((result) => {
                smth = result;
                return smth;
            })
            .catch(console.log);
    }

}
export default AJAXStorage;