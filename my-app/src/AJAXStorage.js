class AJAXStorage {

    constructor() {
        this.ajaxHandlerScript = "http://localhost:3001/posts";
        this.storage = null;
    }

    storeSongList = function(value) {
        fetch(this.ajaxHandlerScript + "/2", { // /2 means songList in storage found by id
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(value)
        }).catch(console.log);
    }

    storePlaylist = function(value) {
        fetch(this.ajaxHandlerScript + "/3", { // /2 means songList in storage found by id
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(value)
        }).catch(console.log);
    }
}
export default AJAXStorage;