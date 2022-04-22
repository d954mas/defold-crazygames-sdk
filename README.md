## Sdk for crazygames.com
https://developer.crazygames.com/sdk#HTML5

I make this sdk for my game, so not all functions are ready.
This extension use jstodef to send messages from JavaScript to Lua
**Implemented:**
- ad midgame
- ad rewarded
- gameplay(start,stop)
- happytime

**Not implemented:**
- banners
- Adblock Detection
- Invite link
- User information

If you like the extension you can support me on patreon.
It will help me make more items for defold.

[![](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/d954mas)

## Installation

__1)__ Add defold-crazygames-sdk in your own project as a Defold library dependency. Open your game.project file and in the dependencies field under project add:
https://github.com/d954mas/defold-crazygames-sdk/archive/refs/tags/v0.1.0.zip

__2)__ Add [jstodef](https://github.com/AGulev/jstodef) in your own project as a Defold library dependency. Open your game.project file and in the dependencies field under project add:[https://github.com/AGulev/jstodef/archive/master.zip](https://github.com/AGulev/jstodef/archive/master.zip)
Or point to the ZIP file of a [specific release](https://github.com/AGulev/jstodef/releases).


## Example
```lua
--1.Init sdk.
crazy_games.init()  
--init listeners
--'adStarted', 'adFinished','adError', 
crazy_games.init_listeners()  
--add listeners
crazy_games.add_event_listeners()
--You can remove listeners if you don't need then anymore
crazy_games.clear_event_listeners()

--2.Register jstodef listener
jstodef.add_listener(function(_, message_id, message)  
	if (message_id == "CrazyGame_adStared") then  
		 
	elseif (message_id == "CrazyGame_adFinished") then  
	 
	elseif (message_id == "CrazyGame_adError") then  
	  
	end
end)

--3.Ask for ad
crazy_games.request_ad("midgame")
crazy_games.request_ad("rewarded")

--4.Gameplay
crazy_games.gameplay_start()
crazy_games.gameplay_stop()

--5.Happy time
crazy_games.happy_time()
```

