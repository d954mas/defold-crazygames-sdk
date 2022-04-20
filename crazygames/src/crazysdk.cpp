#define EXTENSION_NAME CrazyGames
#define LIB_NAME "CrazyGames"
#define MODULE_NAME "crazy_games"

#include <dmsdk/sdk.h>

#if defined(DM_PLATFORM_HTML5)


extern "C" {
    void CrazyGamesSdkJs_init();
    void CrazyGamesSdkJs_init_listeners();
    void CrazyGamesSdkJs_requestAd(const char* type);
    void CrazyGamesSdkJs_addEventListeners();
    void CrazyGamesSdkJs_clearEventListeners();
    void CrazyGamesSdkJs_gameplayStart();
    void CrazyGamesSdkJs_gameplayStop();
    void CrazyGamesSdkJs_happyTime();
}

static int CrazyGamesSdkJs_initLua(lua_State* L){
    DM_LUA_STACK_CHECK(L, 0);
    CrazyGamesSdkJs_init();
    return 0;
}

static int CrazyGamesSdkJs_initListenersLua(lua_State* L){
    DM_LUA_STACK_CHECK(L, 0);
    CrazyGamesSdkJs_init_listeners();
    return 0;
}


static int CrazyGamesSdkJs_requestAdLua(lua_State* L){
    DM_LUA_STACK_CHECK(L, 0);
    const char* type = luaL_checkstring(L, 1);
    CrazyGamesSdkJs_requestAd(type);
    return 0;
}

static int CrazyGamesSdkJs_addEventListenersLua(lua_State* L){
    DM_LUA_STACK_CHECK(L, 0);
    CrazyGamesSdkJs_addEventListeners();
    return 0;
}
static int CrazyGamesSdkJs_clearEventListenersLua(lua_State* L){
    DM_LUA_STACK_CHECK(L, 0);
    CrazyGamesSdkJs_clearEventListeners();
    return 0;
}

static int CrazyGamesSdkJs_gameplayStartLua(lua_State* L){
    DM_LUA_STACK_CHECK(L, 0);
    CrazyGamesSdkJs_gameplayStart();
    return 0;
}

static int CrazyGamesSdkJs_gameplayStopLua(lua_State* L){
    DM_LUA_STACK_CHECK(L, 0);
    CrazyGamesSdkJs_gameplayStop();
    return 0;
}

static int CrazyGamesSdkJs_happyTimeLua(lua_State* L){
    DM_LUA_STACK_CHECK(L, 0);
    CrazyGamesSdkJs_happyTime();
    return 0;
}

// Functions exposed to Lua
static const luaL_reg Module_methods[] =
{
    {"init", CrazyGamesSdkJs_initLua},
    {"request_ad", CrazyGamesSdkJs_requestAdLua},
    {"add_event_listeners", CrazyGamesSdkJs_addEventListenersLua},
    {"clear_event_listeners", CrazyGamesSdkJs_clearEventListenersLua},
    {"gameplayStop", CrazyGamesSdkJs_gameplayStopLua},
    {"gameplayStart", CrazyGamesSdkJs_gameplayStartLua},
    {"happyTime", CrazyGamesSdkJs_happyTimeLua},
    {0, 0}
};

static void LuaInit(lua_State* L)
{
    int top = lua_gettop(L);

    luaL_register(L, MODULE_NAME, Module_methods);

    lua_pop(L, 1);
    assert(top == lua_gettop(L));
}

dmExtension::Result InitializeCrazySdk(dmExtension::Params* params)
{
    LuaInit(params->m_L);
    return dmExtension::RESULT_OK;
}

dmExtension::Result FinalizeCrazySdk(dmExtension::Params* params)
{
    return dmExtension::RESULT_OK;
}

#else // unsupported platforms

dmExtension::Result InitializeCrazySdk(dmExtension::Params* params)
{
    return dmExtension::RESULT_OK;
}

dmExtension::Result FinalizeCrazySdk(dmExtension::Params* params)
{
    return dmExtension::RESULT_OK;
}

#endif

DM_DECLARE_EXTENSION(EXTENSION_NAME, LIB_NAME, 0, 0, InitializeCrazySdk, 0, 0, FinalizeCrazySdk)
