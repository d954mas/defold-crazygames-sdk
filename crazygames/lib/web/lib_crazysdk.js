// https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html

var LibCrazyGamesSdk = {

    CrazyGamesSdkJs_init: function () {
        const crazysdk = window.CrazyGames.CrazySDK.getInstance(); //Getting the SDK
        crazysdk.sdkGameLoadingStop(); //Initializing the SDK, call as early as possible
    },

    CrazyGamesSdkJs_initListeners: function () {
        window.crazysdk_jstodef_listeners = {
            adStarted: function () {
                JsToDef.send("CrazyGame_adStared");
            },
            adFinished: function () {
                JsToDef.send("CrazyGame_adFinished");
            },
            adError: function () {
                JsToDef.send("CrazyGame_adError");
            }
        }
    },

    CrazyGamesSdkJs_requestAd: function (type) {
        const crazysdk = window.CrazyGames.CrazySDK.getInstance();
        var type_string = UTF8ToString(type);
        crazysdk.requestAd(type_string);
    },

    CrazyGamesSdkJs_addEventListeners: function () {
        const crazysdk = window.CrazyGames.CrazySDK.getInstance();
        crazysdk.addEventListener('adStarted', window.crazysdk_jstodef_listeners.adStarted);
        crazysdk.addEventListener('adFinished', window.crazysdk_jstodef_listeners.adFinished);
        crazysdk.addEventListener('adError', window.crazysdk_jstodef_listeners.adError);
    },
    CrazyGamesSdkJs_clearEventListeners: function () {
        const crazysdk = window.CrazyGames.CrazySDK.getInstance();
        crazysdk.removeEventListener('adStarted', window.crazysdk_jstodef_listeners.adStarted);
        crazysdk.removeEventListener('adFinished', window.crazysdk_jstodef_listeners.adFinished);
        crazysdk.removeEventListener('adError', window.crazysdk_jstodef_listeners.adError);
    },

    CrazyGamesSdkJs_gameplayStart: function () {
        const crazysdk = window.CrazyGames.CrazySDK.getInstance();
        crazysdk.gameplayStart()
    },

    CrazyGamesSdkJs_gameplayStop: function () {
        const crazysdk = window.CrazyGames.CrazySDK.getInstance();
        crazysdk.gameplayStop()
    },
    CrazyGamesSdkJs_happyTime: function () {
        const crazysdk = window.CrazyGames.CrazySDK.getInstance();
        crazysdk.happytime()
    }


}

mergeInto(LibraryManager.library, LibCrazyGamesSdk);
