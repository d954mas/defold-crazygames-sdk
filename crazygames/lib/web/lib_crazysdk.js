// https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html

var LibCrazyGamesSdk = {

    CrazyGamesSdkJs_init: function () {
        window.CrazyGames.SDK.game.sdkGameLoadingStop();
    },

    // CrazyGamesSdkJs_initListeners: function () {
    //     window.crazysdk_jstodef_listeners = {
    //         adStarted: function () {
    //             JsToDef.send("CrazyGame_adStared");
    //         },
    //         adFinished: function () {
    //             JsToDef.send("CrazyGame_adFinished");
    //         },
    //         adError: function () {
    //             JsToDef.send("CrazyGame_adError");
    //         }
    //     }
    // },

    CrazyGamesSdkJs_requestAd: function (type) {
        const type_string = UTF8ToString(type);
        const callbacks = {
            adFinished: () => JsToDef.send("CrazyGame_adFinished"),
            adError: (error) => JsToDef.send("CrazyGame_adError", error),
            adStarted: () => JsToDef.send("CrazyGame_adStared"),
        };
        window.CrazyGames.SDK.ad.requestAd(type_string, callbacks);
    },

    // CrazyGamesSdkJs_addEventListeners: function () {
    //     const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    //     crazysdk.addEventListener('adStarted', window.crazysdk_jstodef_listeners.adStarted);
    //     crazysdk.addEventListener('adFinished', window.crazysdk_jstodef_listeners.adFinished);
    //     crazysdk.addEventListener('adError', window.crazysdk_jstodef_listeners.adError);
    // },
    // CrazyGamesSdkJs_clearEventListeners: function () {
    //     const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    //     crazysdk.removeEventListener('adStarted', window.crazysdk_jstodef_listeners.adStarted);
    //     crazysdk.removeEventListener('adFinished', window.crazysdk_jstodef_listeners.adFinished);
    //     crazysdk.removeEventListener('adError', window.crazysdk_jstodef_listeners.adError);
    // },

    CrazyGamesSdkJs_gameplayStart: function () {
        window.CrazyGames.SDK.game.gameplayStart();
    },

    CrazyGamesSdkJs_gameplayStop: function () {
        window.CrazyGames.SDK.game.gameplayStop();
    },
    CrazyGamesSdkJs_happyTime: function () {
        window.CrazyGames.SDK.game.happytime();
    }


}

mergeInto(LibraryManager.library, LibCrazyGamesSdk);
