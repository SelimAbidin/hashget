'use strict'

var HashGet = (function(window){

    function HashGet() {
        this._needsUpdate = true
        this._hashes = {}
        window.addEventListener("hashchange", this.needsToUpdate.bind(this), false);
    }

    HashGet.prototype.getHashes = function() {

        if(this._needsUpdate === true) {

            var lh = window.location.hash
            var slicedURL = lh.slice(lh.indexOf('#') + 1).slice(lh.indexOf('?') + 1)
            
            
            var hashes = {}
            if(slicedURL.length > 0){
                var hasedValues = slicedURL.split('&')
                for (let i = 0; i < hasedValues.length; i++) {
                    var pair = hasedValues[i].split('=')
                    hashes[pair[0]] = pair[1]
                }
                this._hashes = hashes
            }    
        
            this._hashes = hashes
            this._needsUpdate = false
        }
        return Object.freeze(this._hashes)
    }

    HashGet.prototype.getCount = function (){
        var h = this.getHashes()
        var count = 0
        for (const key in h) { count ++ }
        return count
    }

    /**
     * 
     * @param {String} name
     * @returns {String} 
     */
    HashGet.prototype.getValue = function (name){
        var h = this.getHashes()
        return h[name]
    }

    /**
     * 
     * @param {String} name
     * @returns {Object} {name : name, value : value} 
     */
    HashGet.prototype.get = function (name){
        var h = this.getHashes()
        
        if(this.has(name)) {
            return Object.freeze({ name : name, value : h[name]})
        }

        return undefined
    }

    /**
     * 
     * @param {String} name 
     * @returns {Boolean}
     */
    HashGet.prototype.has = function (name){
        var h = this.getHashes()
        return h.hasOwnProperty(name)
    }

    HashGet.prototype.needsToUpdate = function () {
        this._needsUpdate = true
    }
   
    return HashGet

})(window)

export {HashGet}
