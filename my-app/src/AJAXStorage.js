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
        let songList = [];
        fetch(this.ajaxHandlerScript + "/2")
            .then(res => res.json())
            .then((result) => {
                songList = result.songList;
            })
            .catch(console.log);
        return songList;
    }

}
export default AJAXStorage;