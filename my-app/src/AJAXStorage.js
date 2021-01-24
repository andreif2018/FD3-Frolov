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

    restoreSongList = function() {
        let songList = [];
        fetch(this.ajaxHandlerScript + "/2")
            .then(res => res.json())
            .then((result) => {
                songList = result.songList;
            })
            .catch(console.log);
        return songList;
    }

    storePlaylist = function(value) {
        fetch(this.ajaxHandlerScript + "/3", { // /2 means songList in storage found by id
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(value)
        }).catch(console.log);
    }

    restoreLib = function() {
        let listOfPlaylists = [];
        let namesOfPlaylist = [];
        let data= {listOfPlaylists, namesOfPlaylist};
        fetch(this.ajaxHandlerScript + "/3")
            .then(res => res.json())
            .then((result) => {
                listOfPlaylists = result.listOfPlaylists;
                namesOfPlaylist = result.namesOfPlaylist;
            })
            .catch(console.log);
        return data;
    }
}
export default AJAXStorage;