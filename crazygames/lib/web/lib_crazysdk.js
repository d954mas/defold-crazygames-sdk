// https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html

var LibCrazyGamesSdk = {

    CrazyGamesSdkJs_gameLoadingStop: function () {
        window.CrazyGames.SDK.game.sdkGameLoadingStop();
    },

    CrazyGamesSdkJs_requestAd: function (type) {
        const type_string = UTF8ToString(type);
        const callbacks = {
            adFinished: () => JsToDef.send("CrazyGame_adFinished"),
            adError: (error) => JsToDef.send("CrazyGame_adError", error),
            adStarted: () => JsToDef.send("CrazyGame_adStared"),
        };
        window.CrazyGames.SDK.ad.requestAd(type_string, callbacks);
    },

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
