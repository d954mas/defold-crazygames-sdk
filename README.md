## Sdk for crazygames.com
https://developer.crazygames.com/sdk#HTML5

NOT SUPPORTED. Use on your own risk.

I made this sdk for api v1. Now crazy use api v2.

Pull request with v2 support was merged. 
In theory this should worked.

I don't test v2 api. The documentation and example not correct.

Look at code.


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



## Installation

__1)__ Add defold-crazygames-sdk in your own project as a Defold library dependency. Open your game.project file and in the dependencies field under project add:
https://github.com/d954mas/defold-crazygames-sdk/archive/refs/tags/v0.1.0.zip

__2)__ Add [jstodef](https://github.com/AGulev/jstodef) in your own project as a Defold library dependency. Open your game.project file and in the dependencies field under project add:[https://github.com/AGulev/jstodef/archive/master.zip](https://github.com/AGulev/jstodef/archive/master.zip)
Or point to the ZIP file of a [specific release](https://github.com/AGulev/jstodef/releases).


## Example


--1.Register jstodef listener
jstodef.add_listener(function(_, message_id, message)  
	if (message_id == "CrazyGame_adStared") then  
		 
	elseif (message_id == "CrazyGame_adFinished") then  
	 
	elseif (message_id == "CrazyGame_adError") then  
	  
	end
end)

--2.Ask for ad
crazy_games.request_ad("midgame")
crazy_games.request_ad("rewarded")

--3.Gameplay
crazy_games.gameplay_start()
crazy_games.gameplay_stop()

--4.Happy time
crazy_games.happy_time()
```

