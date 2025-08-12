        let weaponslua = `QBShared = QBShared or {}
        QBShared.Weapons = {
            -- // WEAPONS
            -- Melee
            ["weapon_unarmed"]               = { name = "weapon_unarmed", label = "Fists", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_dagger"]                = { name = "weapon_dagger", label = "Dagger", weapontype = "Melee", ammotype = nil, damagereason = "Knifed / Stabbed / Eviscerated" },
            ["weapon_bat"]                   = { name = "weapon_bat", label = "Bat", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_bottle"]                = { name = "weapon_bottle", label = "Broken Bottle", weapontype = "Melee", ammotype = nil, damagereason = "Knifed / Stabbed / Eviscerated" },
            ["weapon_crowbar"]               = { name = "weapon_crowbar", label = "Crowbar", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_flashlight"]            = { name = "weapon_flashlight", label = "Flashlight", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_golfclub"]              = { name = "weapon_golfclub", label = "Golfclub", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_hammer"]                = { name = "weapon_hammer", label = "Hammer", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_hatchet"]               = { name = "weapon_hatchet", label = "Hatchet", weapontype = "Melee", ammotype = nil, damagereason = "Knifed / Stabbed / Eviscerated" },
            ["weapon_knuckle"]               = { name = "weapon_knuckle", label = "Knuckle", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_knife"]                 = { name = "weapon_knife", label = "Knife", weapontype = "Melee", ammotype = nil, damagereason = "Knifed / Stabbed / Eviscerated" },
            ["weapon_machete"]               = { name = "weapon_machete", label = "Machete", weapontype = "Melee", ammotype = nil, damagereason = "Knifed / Stabbed / Eviscerated" },
            ["weapon_switchblade"]           = { name = "weapon_switchblade", label = "Switchblade", weapontype = "Melee", ammotype = nil, damagereason = "Knifed / Stabbed / Eviscerated" },
            ["weapon_nightstick"]            = { name = "weapon_nightstick", label = "Nightstick", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_wrench"]                = { name = "weapon_wrench", label = "Wrench", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_battleaxe"]             = { name = "weapon_battleaxe", label = "Battle Axe", weapontype = "Melee", ammotype = nil, damagereason = "Knifed / Stabbed / Eviscerated" },
            ["weapon_poolcue"]               = { name = "weapon_poolcue", label = "Poolcue", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_briefcase"]             = { name = "weapon_briefcase", label = "Briefcase", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_briefcase_02"]          = { name = "weapon_briefcase_02", label = "Briefcase", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_garbagebag"]            = { name = "weapon_garbagebag", label = "Garbage Bag", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_handcuffs"]             = { name = "weapon_handcuffs", label = "Handcuffs", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_bread"]                 = { name = "weapon_bread", label = "Baquette", weapontype = "Melee", ammotype = nil, damagereason = "Melee killed / Whacked / Executed / Beat down / Murdered / Battered" },
            ["weapon_stone_hatchet"]         = { name = "weapon_stone_hatchet", label = "Stone Hatchet", weapontype = "Melee", ammotype = nil, damagereason = "Knifed / Stabbed / Eviscerated" },
            ["weapon_candycane"]             = { name = "weapon_candycane", label = "Candy Cane", weapontype = "Melee", ammotype = nil, damagereason = "Melee Killed / Whacked / Executed / Beat down / Musrdered / Battered / Candy Caned" },

            -- Handguns
            ["weapon_pistol"]                = { name = "weapon_pistol", label = "Pistol", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_pistol_mk2"]            = { name = "weapon_pistol_mk2", label = "Pistol Mk2", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_combatpistol"]          = { name = "weapon_combatpistol", label = "Combat Pistol", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_appistol"]              = { name = "weapon_appistol", label = "AP Pistol", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_stungun"]               = { name = "weapon_stungun", label = "Taser", weapontype = "Pistol", ammotype = "AMMO_STUNGUN", damagereason = "Died" },
            ["weapon_pistol50"]              = { name = "weapon_pistol50", label = "Pistol .50 Cal", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_snspistol"]             = { name = "weapon_snspistol", label = "SNS Pistol", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_snspistol_mk2"]         = { name = "weapon_snspistol_mk2", label = "SNS Pistol MK2", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_heavypistol"]           = { name = "weapon_heavypistol", label = "Heavy Pistol", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_vintagepistol"]         = { name = "weapon_vintagepistol", label = "Vintage Pistol", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_flaregun"]              = { name = "weapon_flaregun", label = "Flare Gun", weapontype = "Pistol", ammotype = "AMMO_FLARE", damagereason = "Died" },
            ["weapon_marksmanpistol"]        = { name = "weapon_marksmanpistol", label = "Marksman Pistol", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_revolver"]              = { name = "weapon_revolver", label = "Revolver", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_revolver_mk2"]          = { name = "weapon_revolver_mk2", label = "Revolver MK2", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_doubleaction"]          = { name = "weapon_doubleaction", label = "Double Action Revolver", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_raypistol"]             = { name = "weapon_raypistol", label = "Ray Pistol", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_ceramicpistol"]         = { name = "weapon_ceramicpistol", label = "Ceramic Pistol", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_navyrevolver"]          = { name = "weapon_navyrevolver", label = "Navy Revolver", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_gadgetpistol"]          = { name = "weapon_gadgetpistol", label = "Gadget Pistol", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plugged / Bust a cap in" },
            ["weapon_stungun_mp"]            = { name = "weapon_stungun_mp", label = "Taser", weapontype = "Pistol", ammotype = "AMMO_STUNGUN", damagereason = "Died" },
            ["weapon_pistolxm3"]             = { name = "weapon_pistolxm3", label = "Pistol XM3", weapontype = "Pistol", ammotype = "AMMO_PISTOL", damagereason = "Pistoled / Blasted / Plaugged / Bust a cap in" },

            -- Submachine Guns
            ["weapon_microsmg"]              = { name = "weapon_microsmg", label = "Micro SMG", weapontype = "Submachine Gun", ammotype = "AMMO_SMG", damagereason = "Riddled / Drilled / Finished / Submachine Gunned" },
            ["weapon_smg"]                   = { name = "weapon_smg", label = "SMG", weapontype = "Submachine Gun", ammotype = "AMMO_SMG", damagereason = "Riddled / Drilled / Finished / Submachine Gunned" },
            ["weapon_smg_mk2"]               = { name = "weapon_smg_mk2", label = "SMG MK2", weapontype = "Submachine Gun", ammotype = "AMMO_SMG", damagereason = "Riddled / Drilled / Finished / Submachine Gunned" },
            ["weapon_assaultsmg"]            = { name = "weapon_assaultsmg", label = "Assault SMG", weapontype = "Submachine Gun", ammotype = "AMMO_SMG", damagereason = "Riddled / Drilled / Finished / Submachine Gunned" },
            ["weapon_combatpdw"]             = { name = "weapon_combatpdw", label = "Combat PDW", weapontype = "Submachine Gun", ammotype = "AMMO_SMG", damagereason = "Riddled / Drilled / Finished / Submachine Gunned" },
            ["weapon_machinepistol"]         = { name = "weapon_machinepistol", label = "Tec-9", weapontype = "Submachine Gun", ammotype = "AMMO_PISTOL", damagereason = "Riddled / Drilled / Finished / Submachine Gunned" },
            ["weapon_minismg"]               = { name = "weapon_minismg", label = "Mini SMG", weapontype = "Submachine Gun", ammotype = "AMMO_SMG", damagereason = "Riddled / Drilled / Finished / Submachine Gunned" },
            ["weapon_raycarbine"]            = { name = "weapon_raycarbine", label = "Raycarbine", weapontype = "Submachine Gun", ammotype = "AMMO_SMG", damagereason = "Riddled / Drilled / Finished / Submachine Gunned" },

            -- Shotguns
            ["weapon_pumpshotgun"]           = { name = "weapon_pumpshotgun", label = "Pump Shotgun", weapontype = "Shotgun", ammotype = "AMMO_SHOTGUN", damagereason = "Devastated / Pulverized / Shotgunned" },
            ["weapon_pumpshotgun_mk2"]       = { name = "weapon_pumpshotgun_mk2", label = "Pump Shotgun MK2", weapontype = "Shotgun", ammotype = "AMMO_SHOTGUN", damagereason = "Devastated / Pulverized / Shotgunned" },
            ["weapon_sawnoffshotgun"]        = { name = "weapon_sawnoffshotgun", label = "Sawn-off Shotgun", weapontype = "Shotgun", ammotype = "AMMO_SHOTGUN", damagereason = "Devastated / Pulverized / Shotgunned" },
            ["weapon_assaultshotgun"]        = { name = "weapon_assaultshotgun", label = "Assault Shotgun", weapontype = "Shotgun", ammotype = "AMMO_SHOTGUN", damagereason = "Devastated / Pulverized / Shotgunned" },
            ["weapon_bullpupshotgun"]        = { name = "weapon_bullpupshotgun", label = "Bullpup Shotgun", weapontype = "Shotgun", ammotype = "AMMO_SHOTGUN", damagereason = "Devastated / Pulverized / Shotgunned" },
            ["weapon_musket"]                = { name = "weapon_musket", label = "Musket", weapontype = "Shotgun", ammotype = "AMMO_SHOTGUN", damagereason = "Devastated / Pulverized / Shotgunned" },
            ["weapon_heavyshotgun"]          = { name = "weapon_heavyshotgun", label = "Heavy Shotgun", weapontype = "Shotgun", ammotype = "AMMO_SHOTGUN", damagereason = "Devastated / Pulverized / Shotgunned" },
            ["weapon_dbshotgun"]             = { name = "weapon_dbshotgun", label = "Double-barrel Shotgun", weapontype = "Shotgun", ammotype = "AMMO_SHOTGUN", damagereason = "Devastated / Pulverized / Shotgunned" },
            ["weapon_autoshotgun"]           = { name = "weapon_autoshotgun", label = "Auto Shotgun", weapontype = "Shotgun", ammotype = "AMMO_SHOTGUN", damagereason = "Devastated / Pulverized / Shotgunned" },
            ["weapon_combatshotgun"]         = { name = "weapon_combatshotgun", label = "Combat Shotgun", weapontype = "Shotgun", ammotype = "AMMO_SHOTGUN", damagereason = "Devastated / Pulverized / Shotgunned" },

            -- Assault Rifles
            ["weapon_assaultrifle"]          = { name = "weapon_assaultrifle", label = "Assault Rifle", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_assaultrifle_mk2"]      = { name = "weapon_assaultrifle_mk2", label = "Assault Rifle MK2", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_carbinerifle"]          = { name = "weapon_carbinerifle", label = "Carbine Rifle", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_carbinerifle_mk2"]      = { name = "weapon_carbinerifle_mk2", label = "Carbine Rifle MK2", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_advancedrifle"]         = { name = "weapon_advancedrifle", label = "Advanced Rifle", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_specialcarbine"]        = { name = "weapon_specialcarbine", label = "Special Carbine", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_specialcarbine_mk2"]    = { name = "weapon_specialcarbine_mk2", label = "Specialcarbine MK2", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_bullpuprifle"]          = { name = "weapon_bullpuprifle", label = "Bullpup Rifle", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_bullpuprifle_mk2"]      = { name = "weapon_bullpuprifle_mk2", label = "Bull Puprifle MK2", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_compactrifle"]          = { name = "weapon_compactrifle", label = "Compact Rifle", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_militaryrifle"]         = { name = "weapon_militaryrifle", label = "Military Rifle", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },
            ["weapon_heavyrifle"]            = { name = "weapon_heavyrifle", label = "Heavy Rifle", weapontype = "Assault Rifle", ammotype = "AMMO_RIFLE", damagereason = "Ended / Rifled / Shot down / Floored" },

            -- Light Machine Guns
            ["weapon_mg"]                    = { name = "weapon_mg", label = "Machinegun", weapontype = "Light Machine Gun", ammotype = "AMMO_MG", damagereason = "Machine gunned / Sprayed / Ruined" },
            ["weapon_combatmg"]              = { name = "weapon_combatmg", label = "Combat MG", weapontype = "Light Machine Gun", ammotype = "AMMO_MG", damagereason = "Machine gunned / Sprayed / Ruined" },
            ["weapon_combatmg_mk2"]          = { name = "weapon_combatmg_mk2", label = "Combat MG MK2", weapontype = "Light Machine Gun", ammotype = "AMMO_MG", damagereason = "Machine gunned / Sprayed / Ruined" },
            ["weapon_gusenberg"]             = { name = "weapon_gusenberg", label = "Thompson SMG", weapontype = "Light Machine Gun", ammotype = "AMMO_MG", damagereason = "Machine gunned / Sprayed / Ruined" },

            -- Sniper Rifles
            ["weapon_sniperrifle"]           = { name = "weapon_sniperrifle", label = "Sniper Rifle", weapontype = "Sniper Rifle", ammotype = "AMMO_SNIPER", damagereason = "Sniped / Picked off / Scoped" },
            ["weapon_heavysniper"]           = { name = "weapon_heavysniper", label = "Heavy Sniper", weapontype = "Sniper Rifle", ammotype = "AMMO_SNIPER", damagereason = "Sniped / Picked off / Scoped" },
            ["weapon_heavysniper_mk2"]       = { name = "weapon_heavysniper_mk2", label = "Heavysniper MK2", weapontype = "Sniper Rifle", ammotype = "AMMO_SNIPER", damagereason = "Sniped / Picked off / Scoped" },
            ["weapon_marksmanrifle"]         = { name = "weapon_marksmanrifle", label = "Marksman Rifle", weapontype = "Sniper Rifle", ammotype = "AMMO_SNIPER", damagereason = "Sniped / Picked off / Scoped" },
            ["weapon_marksmanrifle_mk2"]     = { name = "weapon_marksmanrifle_mk2", label = "Marksman Rifle MK2", weapontype = "Sniper Rifle", ammotype = "AMMO_SNIPER", damagereason = "Sniped / Picked off / Scoped" },
            ["weapon_remotesniper"]          = { name = "weapon_remotesniper", label = "Remote Sniper", weapontype = "Sniper Rifle", ammotype = "AMMO_SNIPER_REMOTE", damagereason = "Sniped / Picked off / Scoped" },

            -- Heavy Weapons
            ["weapon_rpg"]                   = { name = "weapon_rpg", label = "RPG", weapontype = "Heavy Weapons", ammotype = "AMMO_RPG", damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_grenadelauncher"]       = { name = "weapon_grenadelauncher", label = "Grenade Launcher", weapontype = "Heavy Weapons", ammotype = "AMMO_GRENADELAUNCHER", damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_grenadelauncher_smoke"] = { name = "weapon_grenadelauncher_smoke", label = "Smoke Grenade Launcher", weapontype = "Heavy Weapons", ammotype = "AMMO_GRENADELAUNCHER", damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_minigun"]               = { name = "weapon_minigun", label = "Minigun", weapontype = "Heavy Weapons", ammotype = "AMMO_MINIGUN", damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_firework"]              = { name = "weapon_firework", label = "Firework Launcher", weapontype = "Heavy Weapons", ammotype = nil, damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_railgun"]               = { name = "weapon_railgun", label = "Railgun", weapontype = "Heavy Weapons", ammotype = nil, damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_railgunxm3"]            = { name = "weapon_railgunxm3", label = "Railgun XM3", weapontype = "Heavy Weapons", ammotype = nil, damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_hominglauncher"]        = { name = "weapon_hominglauncher", label = "Homing Launcher", weapontype = "Heavy Weapons", ammotype = "AMMO_STINGER", damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_compactlauncher"]       = { name = "weapon_compactlauncher", label = "Compact Launcher", weapontype = "Heavy Weapons", ammotype = nil, damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_rayminigun"]            = { name = "weapon_rayminigun", label = "Ray Minigun", weapontype = "Heavy Weapons", ammotype = "AMMO_MINIGUN", damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_emplauncher"]           = { name = "weapon_emplauncher", label = "EMP Launcher", weapontype = "Heavy Weapons", ammotype = "AMMO_EMPLAUNCHER", damagereason = "Died" },

            -- Throwables
            ["weapon_grenade"]               = { name = "weapon_grenade", label = "Grenade", weapontype = "Throwable", ammotype = nil, damagereason = "Bombed / Exploded / Detonated / Blew up" },
            ["weapon_bzgas"]                 = { name = "weapon_bzgas", label = "BZ Gas", weapontype = "Throwable", ammotype = nil, damagereason = "Died" },
            ["weapon_molotov"]               = { name = "weapon_molotov", label = "Molotov", weapontype = "Throwable", ammotype = nil, damagereason = "Torched / Flambeed / Barbecued" },
            ["weapon_stickybomb"]            = { name = "weapon_stickybomb", label = "C4", weapontype = "Throwable", ammotype = nil, damagereason = "Bombed / Exploded / Detonated / Blew up" },
            ["weapon_proxmine"]              = { name = "weapon_proxmine", label = "Proxmine Grenade", weapontype = "Throwable", ammotype = nil, damagereason = "Bombed / Exploded / Detonated / Blew up" },
            ["weapon_snowball"]              = { name = "weapon_snowball", label = "Snowball", weapontype = "Throwable", ammotype = nil, damagereason = "Died" },
            ["weapon_pipebomb"]              = { name = "weapon_pipebomb", label = "Pipe Bomb", weapontype = "Throwable", ammotype = nil, damagereason = "Bombed / Exploded / Detonated / Blew up" },
            ["weapon_ball"]                  = { name = "weapon_ball", label = "Ball", weapontype = "Throwable", ammotype = "AMMO_BALL", damagereason = "Died" },
            ["weapon_smokegrenade"]          = { name = "weapon_smokegrenade", label = "Smoke Grenade", weapontype = "Throwable", ammotype = nil, damagereason = "Died" },
            ["weapon_flare"]                 = { name = "weapon_flare", label = "Flare pistol", weapontype = "Throwable", ammotype = "AMMO_FLARE", damagereason = "Died" },

            -- Miscellaneous
            ["weapon_petrolcan"]             = { name = "weapon_petrolcan", label = "Petrol Can", weapontype = "Miscellaneous", ammotype = "AMMO_PETROLCAN", damagereason = "Died" },
            ["gadget_parachute"]             = { name = "gadget_parachute", label = "Parachute", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Died" },
            ["weapon_fireextinguisher"]      = { name = "weapon_fireextinguisher", label = "Fire Extinguisher", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Died" },
            ["weapon_hazardcan"]             = { name = "weapon_hazardcan", label = "Hazardcan", weapontype = "Miscellaneous", ammotype = "AMMO_PETROLCAN", damagereason = "Died" },
            ["weapon_fertilizercan"]         = { name = "weapon_fertilizercan", label = "Fertilizer Can", weapontype = "Miscellaneous", ammotype = "AMMO_FERTILIZERCAN", damagereason = "Died" },
            ["weapon_barbed_wire"]           = { name = "weapon_barbed_wire", label = "Barbed Wire", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Prodded" },
            ["weapon_drowning"]              = { name = "weapon_drowning", label = "Drowning", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Died" },
            ["weapon_drowning_in_vehicle"]   = { name = "weapon_drowning_in_vehicle", label = "Drowning in a Vehicle", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Died" },
            ["weapon_bleeding"]              = { name = "weapon_bleeding", label = "Bleeding", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Bled out" },
            ["weapon_electric_fence"]        = { name = "weapon_electric_fence", label = "Electric Fence", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Fried" },
            ["weapon_explosion"]             = { name = "weapon_explosion", label = "Explosion", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated" },
            ["weapon_fall"]                  = { name = "weapon_fall", label = "Fall", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Committed suicide" },
            ["weapon_exhaustion"]            = { name = "weapon_exhaustion", label = "Exhaustion", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Died" },
            ["weapon_hit_by_water_cannon"]   = { name = "weapon_hit_by_water_cannon", label = "Water Cannon", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Died" },
            ["weapon_rammed_by_car"]         = { name = "weapon_rammed_by_car", label = "Rammed - Vehicle", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Flattened / Ran over / Ran down" },
            ["weapon_run_over_by_car"]       = { name = "weapon_run_over_by_car", label = "Run Over - Vehicle", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Flattened / Ran over / Ran down" },
            ["weapon_heli_crash"]            = { name = "weapon_heli_crash", label = "Heli Crash", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Helicopter Crash" },
            ["weapon_fire"]                  = { name = "weapon_fire", label = "Fire", weapontype = "Miscellaneous", ammotype = nil, damagereason = "Torched / Flambeed / Barbecued" },

            -- Animals
            ["weapon_animal"]                = { name = "weapon_animal", label = "Animal", weapontype = "Animals", ammotype = nil, damagereason = "Mauled" },
            ["weapon_cougar"]                = { name = "weapon_cougar", label = "Cougar", weapontype = "Animals", ammotype = nil, damagereason = "Mauled" },
            `

let itemslua = `QBShared = QBShared or {}
QBShared.Items = {
    -- WEAPONS
    -- Melee
    weapon_unarmed               = { name = "weapon_unarmed", label = "Fists", weight = 1000, type = "weapon", ammotype = nil, image = "placeholder.png", unique = true, useable = false, description = "Fisticuffs" },
    weapon_dagger                = { name = "weapon_dagger", label = "Dagger", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_dagger.png", unique = true, useable = false, description = "A short knife with a pointed and edged blade, used as a weapon" },
    weapon_bat                   = { name = "weapon_bat", label = "Bat", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_bat.png", unique = true, useable = false, description = "Used for hitting a ball in sports (or other things)" },
    weapon_bottle                = { name = "weapon_bottle", label = "Broken Bottle", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_bottle.png", unique = true, useable = false, description = "A broken bottle" },
    weapon_crowbar               = { name = "weapon_crowbar", label = "Crowbar", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_crowbar.png", unique = true, useable = false, description = "An iron bar with a flattened end, used as a lever" },
    weapon_flashlight            = { name = "weapon_flashlight", label = "Flashlight", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_flashlight.png", unique = true, useable = false, description = "A battery-operated portable light" },
    weapon_golfclub              = { name = "weapon_golfclub", label = "Golfclub", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_golfclub.png", unique = true, useable = false, description = "A club used to hit the ball in golf" },
    weapon_hammer                = { name = "weapon_hammer", label = "Hammer", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_hammer.png", unique = true, useable = false, description = "Used for jobs such as breaking things (legs) and driving in nails" },
    weapon_hatchet               = { name = "weapon_hatchet", label = "Hatchet", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_hatchet.png", unique = true, useable = false, description = "A small axe with a short handle for use in one hand" },
    weapon_knuckle               = { name = "weapon_knuckle", label = "Knuckle", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_knuckle.png", unique = true, useable = false, description = "A metal guard worn over the knuckles in fighting, especially to increase the effect of the blows" },
    weapon_knife                 = { name = "weapon_knife", label = "Knife", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_knife.png", unique = true, useable = false, description = "An instrument composed of a blade fixed into a handle, used for cutting or as a weapon" },
    weapon_machete               = { name = "weapon_machete", label = "Machete", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_machete.png", unique = true, useable = false, description = "A broad, heavy knife used as a weapon" },
    weapon_switchblade           = { name = "weapon_switchblade", label = "Switchblade", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_switchblade.png", unique = true, useable = false, description = "A knife with a blade that springs out from the handle when a button is pressed" },
    weapon_nightstick            = { name = "weapon_nightstick", label = "Nightstick", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_nightstick.png", unique = true, useable = false, description = "A police officer's club or billy" },
    weapon_wrench                = { name = "weapon_wrench", label = "Wrench", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_wrench.png", unique = true, useable = false, description = "A tool used for gripping and turning nuts, bolts, pipes, etc" },
    weapon_battleaxe             = { name = "weapon_battleaxe", label = "Battle Axe", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_battleaxe.png", unique = true, useable = false, description = "A large broad-bladed axe used in ancient warfare" },
    weapon_poolcue               = { name = "weapon_poolcue", label = "Poolcue", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_poolcue.png", unique = true, useable = false, description = "A stick used to strike a ball, usually the cue ball (or other things)" },
    weapon_briefcase             = { name = "weapon_briefcase", label = "Briefcase", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_briefcase.png", unique = true, useable = false, description = "A briefcase for storing important documents" },
    weapon_briefcase_02          = { name = "weapon_briefcase_02", label = "Suitcase", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_briefcase2.png", unique = true, useable = false, description = "Wonderfull for nice vacation to Liberty City" },
    weapon_garbagebag            = { name = "weapon_garbagebag", label = "Garbage Bag", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_garbagebag.png", unique = true, useable = false, description = "A garbage bag" },
    weapon_handcuffs             = { name = "weapon_handcuffs", label = "Handcuffs", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_handcuffs.png", unique = true, useable = false, description = "A pair of lockable linked metal rings for securing a prisoner's wrists" },
    weapon_bread                 = { name = "weapon_bread", label = "Baquette", weight = 1000, type = "weapon", ammotype = nil, image = "baquette.png", unique = true, useable = false, description = "Bread...?" },
    weapon_stone_hatchet         = { name = "weapon_stone_hatchet", label = "Stone Hatchet", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_stone_hatchet.png", unique = true, useable = true, description = "Stone Hatchet" },
    weapon_candycane             = { name = "weapon_candycane", label = "Candy Cane", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_candycane", unique = true, useable = true, description = "Candy Cane" },

    -- Handguns
    weapon_pistol                = { name = "weapon_pistol", label = "Walther P99", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_pistol.png", unique = true, useable = false, description = "A small firearm designed to be held in one hand" },
    weapon_pistol_mk2            = { name = "weapon_pistol_mk2", label = "Pistol Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_pistol_mk2.png", unique = true, useable = false, description = "An upgraded small firearm designed to be held in one hand" },
    weapon_combatpistol          = { name = "weapon_combatpistol", label = "Combat Pistol", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_combatpistol.png", unique = true, useable = false, description = "A combat version small firearm designed to be held in one hand" },
    weapon_appistol              = { name = "weapon_appistol", label = "AP Pistol", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_appistol.png", unique = true, useable = false, description = "A small firearm designed to be held in one hand that is automatic" },
    weapon_stungun               = { name = "weapon_stungun", label = "Taser", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_stungun.png", unique = true, useable = false, description = "A weapon firing barbs attached by wires to batteries, causing temporary paralysis" },
    weapon_pistol50              = { name = "weapon_pistol50", label = "Pistol .50", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_pistol50.png", unique = true, useable = false, description = "A .50 caliber firearm designed to be held with both hands" },
    weapon_snspistol             = { name = "weapon_snspistol", label = "SNS Pistol", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_snspistol.png", unique = true, useable = false, description = "A very small firearm designed to be easily concealed" },
    weapon_heavypistol           = { name = "weapon_heavypistol", label = "Heavy Pistol", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_heavypistol.png", unique = true, useable = false, description = "A hefty firearm designed to be held in one hand (or attempted)" },
    weapon_vintagepistol         = { name = "weapon_vintagepistol", label = "Vintage Pistol", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_vintagepistol.png", unique = true, useable = false, description = "An antique firearm designed to be held in one hand" },
    weapon_flaregun              = { name = "weapon_flaregun", label = "Flare Gun", weight = 1000, type = "weapon", ammotype = "AMMO_FLARE", image = "weapon_flaregun.png", unique = true, useable = false, description = "A handgun for firing signal rockets" },
    weapon_marksmanpistol        = { name = "weapon_marksmanpistol", label = "Marksman Pistol", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_marksmanpistol.png", unique = true, useable = false, description = "A very accurate small firearm designed to be held in one hand" },
    weapon_revolver              = { name = "weapon_revolver", label = "Revolver", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_revolver.png", unique = true, useable = false, description = "A pistol with revolving chambers enabling several shots to be fired without reloading" },
    weapon_revolver_mk2          = { name = "weapon_revolver_mk2", label = "Violence", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_revolver_mk2.png", unique = true, useable = true, description = "da Violence" },
    weapon_doubleaction          = { name = "weapon_doubleaction", label = "Double Action Revolver", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_doubleaction.png", unique = true, useable = true, description = "Double Action Revolver" },
    weapon_snspistol_mk2         = { name = "weapon_snspistol_mk2", label = "SNS Pistol Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_snspistol_mk2.png", unique = true, useable = true, description = "SNS Pistol MK2" },
    weapon_raypistol             = { name = "weapon_raypistol", label = "Up-n-Atomizer", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_raypistol.png", unique = true, useable = true, description = "Weapon Raypistol" },
    weapon_ceramicpistol         = { name = "weapon_ceramicpistol", label = "Ceramic Pistol", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_ceramicpistol.png", unique = true, useable = true, description = "Weapon Ceramicpistol" },
    weapon_navyrevolver          = { name = "weapon_navyrevolver", label = "Navy Revolver", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_navyrevolver.png", unique = true, useable = true, description = "Weapon Navyrevolver" },
    weapon_gadgetpistol          = { name = "weapon_gadgetpistol", label = "Perico Pistol", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_gadgetpistol.png", unique = true, useable = true, description = "Weapon Gadgetpistol" },
    weapon_pistolxm3             = { name = "weapon_pistolxm3", label = "Pistol XM3", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_pistolxm3.png", unique = true, useable = true, description = "Pistol XM3" },

    -- Submachine Guns
    weapon_microsmg              = { name = "weapon_microsmg", label = "Micro SMG", weight = 1000, type = "weapon", ammotype = "AMMO_SMG", image = "weapon_microsmg.png", unique = true, useable = false, description = "A handheld light                                                                                                                                                                                                                                                                                                                                                            weight machine gun" },
    weapon_smg                   = { name = "weapon_smg", label = "SMG", weight = 1000, type = "weapon", ammotype = "AMMO_SMG", image = "weapon_smg.png", unique = true, useable = false, description = "A handheld light                                                                                                                                                                                                                                                                                                                                                                 weight machine gun" },
    weapon_smg_mk2               = { name = "weapon_smg_mk2", label = "SMG Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_SMG", image = "weapon_smg_mk2.png", unique = true, useable = true, description = "SMG MK2" },
    weapon_assaultsmg            = { name = "weapon_assaultsmg", label = "Assault SMG", weight = 1000, type = "weapon", ammotype = "AMMO_SMG", image = "weapon_assaultsmg.png", unique = true, useable = false, description = "An assault version of a handheld light                                                                                                                                                                                                                                                                                                                                    weight machine gun" },
    weapon_combatpdw             = { name = "weapon_combatpdw", label = "Combat PDW", weight = 1000, type = "weapon", ammotype = "AMMO_SMG", image = "weapon_combatpdw.png", unique = true, useable = false, description = "A combat version of a handheld light                                                                                                                                                                                                                                                                                                                                       weight machine gun" },
    weapon_machinepistol         = { name = "weapon_machinepistol", label = "Tec-9", weight = 1000, type = "weapon", ammotype = "AMMO_PISTOL", image = "weapon_machinepistol.png", unique = true, useable = false, description = "A self-loading pistol capable of burst or fully automatic fire" },
    weapon_minismg               = { name = "weapon_minismg", label = "Mini SMG", weight = 1000, type = "weapon", ammotype = "AMMO_SMG", image = "weapon_minismg.png", unique = true, useable = false, description = "A mini handheld light                                                                                                                                                                                                                                                                                                                                                        weight machine gun" },
    weapon_raycarbine            = { name = "weapon_raycarbine", label = "Unholy Hellbringer", weight = 1000, type = "weapon", ammotype = "AMMO_SMG", image = "weapon_raycarbine.png", unique = true, useable = true, description = "Weapon Raycarbine" },

    -- Shotguns
    weapon_pumpshotgun           = { name = "weapon_pumpshotgun", label = "Pump Shotgun", weight = 1000, type = "weapon", ammotype = "AMMO_SHOTGUN", image = "weapon_pumpshotgun.png", unique = true, useable = false, description = "A pump-action smoothbore gun for firing small shot at short range" },
    weapon_sawnoffshotgun        = { name = "weapon_sawnoffshotgun", label = "Sawn-off Shotgun", weight = 1000, type = "weapon", ammotype = "AMMO_SHOTGUN", image = "weapon_sawnoffshotgun.png", unique = true, useable = false, description = "A sawn-off smoothbore gun for firing small shot at short range" },
    weapon_assaultshotgun        = { name = "weapon_assaultshotgun", label = "Assault Shotgun", weight = 1000, type = "weapon", ammotype = "AMMO_SHOTGUN", image = "weapon_assaultshotgun.png", unique = true, useable = false, description = "An assault version of asmoothbore gun for firing small shot at short range" },
    weapon_bullpupshotgun        = { name = "weapon_bullpupshotgun", label = "Bullpup Shotgun", weight = 1000, type = "weapon", ammotype = "AMMO_SHOTGUN", image = "weapon_bullpupshotgun.png", unique = true, useable = false, description = "A compact smoothbore gun for firing small shot at short range" },
    weapon_musket                = { name = "weapon_musket", label = "Musket", weight = 1000, type = "weapon", ammotype = "AMMO_SHOTGUN", image = "weapon_musket.png", unique = true, useable = false, description = "An infantryman's light gun with a long barrel, typically smooth-bored, muzzleloading, and fired from the shoulder" },
    weapon_heavyshotgun          = { name = "weapon_heavyshotgun", label = "Heavy Shotgun", weight = 1000, type = "weapon", ammotype = "AMMO_SHOTGUN", image = "weapon_heavyshotgun.png", unique = true, useable = false, description = "A large smoothbore gun for firing small shot at short range" },
    weapon_dbshotgun             = { name = "weapon_dbshotgun", label = "Double-barrel Shotgun", weight = 1000, type = "weapon", ammotype = "AMMO_SHOTGUN", image = "weapon_dbshotgun.png", unique = true, useable = false, description = "A shotgun with two parallel barrels, allowing two single shots to be fired in quick succession" },
    weapon_autoshotgun           = { name = "weapon_autoshotgun", label = "Auto Shotgun", weight = 1000, type = "weapon", ammotype = "AMMO_SHOTGUN", image = "weapon_autoshotgun.png", unique = true, useable = false, description = "A shotgun capable of rapid continous fire" },
    weapon_pumpshotgun_mk2       = { name = "weapon_pumpshotgun_mk2", label = "Pumpshotgun Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_SHOTGUN", image = "weapon_pumpshotgun_mk2.png", unique = true, useable = true, description = "Pumpshotgun MK2" },
    weapon_combatshotgun         = { name = "weapon_combatshotgun", label = "Combat Shotgun", weight = 1000, type = "weapon", ammotype = "AMMO_SHOTGUN", image = "weapon_combatshotgun.png", unique = true, useable = true, description = "Weapon Combatshotgun" },

    -- Assault Rifles
    weapon_assaultrifle          = { name = "weapon_assaultrifle", label = "Assault Rifle", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_assaultrifle.png", unique = true, useable = false, description = "A rapid-fire, magazine-fed automatic rifle designed for infantry use" },
    weapon_assaultrifle_mk2      = { name = "weapon_assaultrifle_mk2", label = "Assault Rifle Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_assaultrifle_mk2.png", unique = true, useable = true, description = "Assault Rifle MK2" },
    weapon_carbinerifle          = { name = "weapon_carbinerifle", label = "Carbine Rifle", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_carbinerifle.png", unique = true, useable = false, description = "A light                                                                                                                                                                                                                                                                                                                                                               weight automatic rifle" },
    weapon_carbinerifle_mk2      = { name = "weapon_carbinerifle_mk2", label = "Carbine Rifle Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_carbinerifle_mk2.png", unique = true, useable = true, description = "Carbine Rifle MK2" },
    weapon_advancedrifle         = { name = "weapon_advancedrifle", label = "Advanced Rifle", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_advancedrifle.png", unique = true, useable = false, description = "An assault version of a rapid-fire, magazine-fed automatic rifle designed for infantry use" },
    weapon_specialcarbine        = { name = "weapon_specialcarbine", label = "Special Carbine", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_specialcarbine.png", unique = true, useable = false, description = "An extremely versatile assault rifle for any combat situation" },
    weapon_bullpuprifle          = { name = "weapon_bullpuprifle", label = "Bullpup Rifle", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_bullpuprifle.png", unique = true, useable = false, description = "A compact automatic assault rifle" },
    weapon_compactrifle          = { name = "weapon_compactrifle", label = "Compact Rifle", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_compactrifle.png", unique = true, useable = false, description = "A compact version of an assault rifle" },
    weapon_specialcarbine_mk2    = { name = "weapon_specialcarbine_mk2", label = "Special Carbine Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_specialcarbine_mk2.png", unique = true, useable = true, description = "Weapon Wpecialcarbine MK2" },
    weapon_bullpuprifle_mk2      = { name = "weapon_bullpuprifle_mk2", label = "Bullpup Rifle Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_bullpuprifle_mk2.png", unique = true, useable = true, description = "Bull Puprifle MK2" },
    weapon_militaryrifle         = { name = "weapon_militaryrifle", label = "Military Rifle", weight = 1000, type = "weapon", ammotype = "AMMO_RIFLE", image = "weapon_militaryrifle.png", unique = true, useable = true, description = "Weapon Militaryrifle" },

    -- Light Machine Guns
    weapon_mg                    = { name = "weapon_mg", label = "Machinegun", weight = 1000, type = "weapon", ammotype = "AMMO_MG", image = "weapon_mg.png", unique = true, useable = false, description = "An automatic gun that fires bullets in rapid succession for as long as the trigger is pressed" },
    weapon_combatmg              = { name = "weapon_combatmg", label = "Combat MG", weight = 1000, type = "weapon", ammotype = "AMMO_MG", image = "weapon_combatmg.png", unique = true, useable = false, description = "A combat version of an automatic gun that fires bullets in rapid succession for as long as the trigger is pressed" },
    weapon_gusenberg             = { name = "weapon_gusenberg", label = "Thompson SMG", weight = 1000, type = "weapon", ammotype = "AMMO_MG", image = "weapon_gusenberg.png", unique = true, useable = false, description = "An automatic rifle commonly referred to as a tommy gun" },
    weapon_combatmg_mk2          = { name = "weapon_combatmg_mk2", label = "Combat MG Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_MG", image = "weapon_combatmg_mk2.png", unique = true, useable = true, description = "Weapon Combatmg MK2" },

    -- Sniper Rifles
    weapon_sniperrifle           = { name = "weapon_sniperrifle", label = "Sniper Rifle", weight = 1000, type = "weapon", ammotype = "AMMO_SNIPER", image = "weapon_sniperrifle.png", unique = true, useable = false, description = "A high-precision, long-range rifle" },
    weapon_heavysniper           = { name = "weapon_heavysniper", label = "Heavy Sniper", weight = 1000, type = "weapon", ammotype = "AMMO_SNIPER", image = "weapon_heavysniper.png", unique = true, useable = false, description = "An upgraded high-precision, long-range rifle" },
    weapon_marksmanrifle         = { name = "weapon_marksmanrifle", label = "Marksman Rifle", weight = 1000, type = "weapon", ammotype = "AMMO_SNIPER", image = "weapon_marksmanrifle.png", unique = true, useable = false, description = "A very accurate single-fire rifle" },
    weapon_remotesniper          = { name = "weapon_remotesniper", label = "Remote Sniper", weight = 1000, type = "weapon", ammotype = "AMMO_SNIPER_REMOTE", image = "weapon_remotesniper.png", unique = true, useable = false, description = "A portable high-precision, long-range rifle" },
    weapon_heavysniper_mk2       = { name = "weapon_heavysniper_mk2", label = "Heavy Sniper Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_SNIPER", image = "weapon_heavysniper_mk2.png", unique = true, useable = true, description = "Weapon Heavysniper MK2" },
    weapon_marksmanrifle_mk2     = { name = "weapon_marksmanrifle_mk2", label = "Marksman Rifle Mk II", weight = 1000, type = "weapon", ammotype = "AMMO_SNIPER", image = "weapon_marksmanrifle_mk2.png", unique = true, useable = true, description = "Weapon Marksmanrifle MK2" },

    -- Heavy Weapons
    weapon_rpg                   = { name = "weapon_rpg", label = "RPG", weight = 1000, type = "weapon", ammotype = "AMMO_RPG", image = "weapon_rpg.png", unique = true, useable = false, description = "A rocket-propelled grenade launcher" },
    weapon_grenadelauncher       = { name = "weapon_grenadelauncher", label = "Grenade Launcher", weight = 1000, type = "weapon", ammotype = "AMMO_GRENADELAUNCHER", image = "weapon_grenadelauncher.png", unique = true, useable = false, description = "A weapon that fires a specially-designed large-caliber projectile, often with an explosive, smoke or gas warhead" },
    weapon_grenadelauncher_smoke = { name = "weapon_grenadelauncher_smoke", label = "Smoke Grenade Launcher", weight = 1000, type = "weapon", ammotype = "AMMO_GRENADELAUNCHER", image = "weapon_smokegrenade.png", unique = true, useable = false, description = "A bomb that produces a lot of smoke when it explodes" },
    weapon_minigun               = { name = "weapon_minigun", label = "Minigun", weight = 1000, type = "weapon", ammotype = "AMMO_MINIGUN", image = "weapon_minigun.png", unique = true, useable = false, description = "A portable machine gun consisting of a rotating cluster of six barrels and capable of variable rates of fire of up to 6,000 rounds per minute" },
    weapon_firework              = { name = "weapon_firework", label = "Firework Launcher", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_firework.png", unique = true, useable = false, description = "A device containing gunpowder and other combustible chemicals that causes a spectacular explosion when ignited" },
    weapon_railgun               = { name = "weapon_railgun", label = "Railgun", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_railgun.png", unique = true, useable = false, description = "A weapon that uses electromagnetic force to launch high velocity projectiles" },
    weapon_railgunxm3            = { name = "weapon_railgunxm3", label = "Railgun XM3", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_railgunxm3.png", unique = true, useable = false, description = "A weapon that uses electromagnetic force to launch high velocity projectiles" },
    weapon_hominglauncher        = { name = "weapon_hominglauncher", label = "Homing Launcher", weight = 1000, type = "weapon", ammotype = "AMMO_STINGER", image = "weapon_hominglauncher.png", unique = true, useable = false, description = "A weapon fitted with an electronic device that enables it to find and hit a target" },
    weapon_compactlauncher       = { name = "weapon_compactlauncher", label = "Compact Launcher", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_compactlauncher.png", unique = true, useable = false, description = "A compact grenade launcher" },
    weapon_rayminigun            = { name = "weapon_rayminigun", label = "Widowmaker", weight = 1000, type = "weapon", ammotype = "AMMO_MINIGUN", image = "weapon_rayminigun.png", unique = true, useable = true, description = "Weapon Rayminigun" },

    -- Throwables
    weapon_grenade               = { name = "weapon_grenade", label = "Grenade", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_grenade.png", unique = true, useable = false, description = "A handheld throwable bomb" },
    weapon_bzgas                 = { name = "weapon_bzgas", label = "BZ Gas", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_bzgas.png", unique = true, useable = false, description = "A cannister of gas that causes extreme pain" },
    weapon_molotov               = { name = "weapon_molotov", label = "Molotov", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_molotov.png", unique = true, useable = false, description = "A crude bomb made of a bottle filled with a flammable liquid and fitted with a wick for lighting" },
    weapon_stickybomb            = { name = "weapon_stickybomb", label = "C4", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_stickybomb.png", unique = true, useable = false, description = "An explosive charge covered with an adhesive that when thrown against an object sticks until it explodes" },
    weapon_proxmine              = { name = "weapon_proxmine", label = "Proxmine Grenade", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_proximitymine.png", unique = true, useable = false, description = "A bomb placed on the ground that detonates when going within its proximity" },
    weapon_snowball              = { name = "weapon_snowball", label = "Snowball", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_snowball.png", unique = true, useable = false, description = "A ball of packed snow, especially one made for throwing at other people for fun" },
    weapon_pipebomb              = { name = "weapon_pipebomb", label = "Pipe Bomb", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_pipebomb.png", unique = true, useable = false, description = "A homemade bomb, the components of which are contained in a pipe" },
    weapon_ball                  = { name = "weapon_ball", label = "Ball", weight = 1000, type = "weapon", ammotype = "AMMO_BALL", image = "weapon_ball.png", unique = true, useable = false, description = "A solid or hollow spherical or egg-shaped object that is kicked, thrown, or hit in a game" },
    weapon_smokegrenade          = { name = "weapon_smokegrenade", label = "Smoke Grenade", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_c4.png", unique = true, useable = false, description = "An explosive charge that can be remotely detonated" },
    weapon_flare                 = { name = "weapon_flare", label = "Flare pistol", weight = 1000, type = "weapon", ammotype = "AMMO_FLARE", image = "weapon_flare.png", unique = true, useable = false, description = "A small pyrotechnic devices used for illumination and signalling" },

    -- Miscellaneous
    weapon_petrolcan             = { name = "weapon_petrolcan", label = "Petrol Can", weight = 1000, type = "weapon", ammotype = "AMMO_PETROLCAN", image = "weapon_petrolcan.png", unique = true, useable = false, description = "A robust liquid container made from pressed steel" },
    weapon_fireextinguisher      = { name = "weapon_fireextinguisher", label = "Fire Extinguisher", weight = 1000, type = "weapon", ammotype = nil, image = "weapon_fireextinguisher.png", unique = true, useable = false, description = "A portable device that discharges a jet of water, foam, gas, or other material to extinguish a fire" },
    weapon_hazardcan             = { name = "weapon_hazardcan", label = "Hazardous Jerry Can", weight = 1000, type = "weapon", ammotype = "AMMO_PETROLCAN", image = "weapon_hazardcan.png", unique = true, useable = true, description = "Weapon Hazardcan" },

    -- Weapon Attachments
    clip_attachment              = { name = "clip_attachment", label = "Clip", weight = 1000, type = "item", image = "clip_attachment.png", unique = false, useable = true, shouldClose = true, description = "A clip for a weapon" },
    drum_attachment              = { name = "drum_attachment", label = "Drum", weight = 1000, type = "item", image = "drum_attachment.png", unique = false, useable = true, shouldClose = true, description = "A drum for a weapon" },
    flashlight_attachment        = { name = "flashlight_attachment", label = "Flashlight", weight = 1000, type = "item", image = "flashlight_attachment.png", unique = false, useable = true, shouldClose = true, description = "A flashlight for a weapon" },
    suppressor_attachment        = { name = "suppressor_attachment", label = "Suppressor", weight = 1000, type = "item", image = "suppressor_attachment.png", unique = false, useable = true, shouldClose = true, description = "A suppressor for a weapon" },
    smallscope_attachment        = { name = "smallscope_attachment", label = "Small Scope", weight = 1000, type = "item", image = "smallscope_attachment.png", unique = false, useable = true, shouldClose = true, description = "A small scope for a weapon" },
    medscope_attachment          = { name = "medscope_attachment", label = "Medium Scope", weight = 1000, type = "item", image = "medscope_attachment.png", unique = false, useable = true, shouldClose = true, description = "A medium scope for a weapon" },
    largescope_attachment        = { name = "largescope_attachment", label = "Large Scope", weight = 1000, type = "item", image = "largescope_attachment.png", unique = false, useable = true, shouldClose = true, description = "A large scope for a weapon" },
    holoscope_attachment         = { name = "holoscope_attachment", label = "Holo Scope", weight = 1000, type = "item", image = "holoscope_attachment.png", unique = false, useable = true, shouldClose = true, description = "A holo scope for a weapon" },
    advscope_attachment          = { name = "advscope_attachment", label = "Advanced Scope", weight = 1000, type = "item", image = "advscope_attachment.png", unique = false, useable = true, shouldClose = true, description = "An advanced scope for a weapon" },
    nvscope_attachment           = { name = "nvscope_attachment", label = "Night Vision Scope", weight = 1000, type = "item", image = "nvscope_attachment.png", unique = false, useable = true, shouldClose = true, description = "A night vision scope for a weapon" },
    thermalscope_attachment      = { name = "thermalscope_attachment", label = "Thermal Scope", weight = 1000, type = "item", image = "thermalscope_attachment.png", unique = false, useable = true, shouldClose = true, description = "A thermal scope for a weapon" },
    flat_muzzle_brake            = { name = "flat_muzzle_brake", label = "Flat Muzzle Brake", weight = 1000, type = "item", image = "flat_muzzle_brake.png", unique = false, useable = true, shouldClose = true, description = "A muzzle brake for a weapon" },
    tactical_muzzle_brake        = { name = "tactical_muzzle_brake", label = "Tactical Muzzle Brake", weight = 1000, type = "item", image = "tactical_muzzle_brake.png", unique = false, useable = true, shouldClose = true, description = "A muzzle brakee for a weapon" },
    fat_end_muzzle_brake         = { name = "fat_end_muzzle_brake", label = "Fat End Muzzle Brake", weight = 1000, type = "item", image = "fat_end_muzzle_brake.png", unique = false, useable = true, shouldClose = true, description = "A muzzle brake for a weapon" },
    precision_muzzle_brake       = { name = "precision_muzzle_brake", label = "Precision Muzzle Brake", weight = 1000, type = "item", image = "precision_muzzle_brake.png", unique = false, useable = true, shouldClose = true, description = "A muzzle brake for a weapon" },
    heavy_duty_muzzle_brake      = { name = "heavy_duty_muzzle_brake", label = "HD Muzzle Brake", weight = 1000, type = "item", image = "heavy_duty_muzzle_brake.png", unique = false, useable = true, shouldClose = true, description = "A muzzle brake for a weapon" },
    slanted_muzzle_brake         = { name = "slanted_muzzle_brake", label = "Slanted Muzzle Brake", weight = 1000, type = "item", image = "slanted_muzzle_brake.png", unique = false, useable = true, shouldClose = true, description = "A muzzle brake for a weapon" },
    split_end_muzzle_brake       = { name = "split_end_muzzle_brake", label = "Split End Muzzle Brake", weight = 1000, type = "item", image = "split_end_muzzle_brake.png", unique = false, useable = true, shouldClose = true, description = "A muzzle brake for a weapon" },
    squared_muzzle_brake         = { name = "squared_muzzle_brake", label = "Squared Muzzle Brake", weight = 1000, type = "item", image = "squared_muzzle_brake.png", unique = false, useable = true, shouldClose = true, description = "A muzzle brake for a weapon" },
    bellend_muzzle_brake         = { name = "bellend_muzzle_brake", label = "Bellend Muzzle Brake", weight = 1000, type = "item", image = "bellend_muzzle_brake.png", unique = false, useable = true, shouldClose = true, description = "A muzzle brake for a weapon" },
    barrel_attachment            = { name = "barrel_attachment", label = "Barrel", weight = 1000, type = "item", image = "barrel_attachment.png", unique = false, useable = true, shouldClose = true, description = "A barrel for a weapon" },
    grip_attachment              = { name = "grip_attachment", label = "Grip", weight = 1000, type = "item", image = "grip_attachment.png", unique = false, useable = true, shouldClose = true, description = "A grip for a weapon" },
    comp_attachment              = { name = "comp_attachment", label = "Compensator", weight = 1000, type = "item", image = "comp_attachment.png", unique = false, useable = true, shouldClose = true, description = "A compensator for a weapon" },
    luxuryfinish_attachment      = { name = "luxuryfinish_attachment", label = "Luxury Finish", weight = 1000, type = "item", image = "luxuryfinish_attachment.png", unique = false, useable = true, shouldClose = true, description = "A luxury finish for a weapon" },
    digicamo_attachment          = { name = "digicamo_attachment", label = "Digital Camo", weight = 1000, type = "item", image = "digicamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A digital camo for a weapon" },
    brushcamo_attachment         = { name = "brushcamo_attachment", label = "Brushstroke Camo", weight = 1000, type = "item", image = "brushcamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A brushstroke camo for a weapon" },
    woodcamo_attachment          = { name = "woodcamo_attachment", label = "Woodland Camo", weight = 1000, type = "item", image = "woodcamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A woodland camo for a weapon" },
    skullcamo_attachment         = { name = "skullcamo_attachment", label = "Skull Camo", weight = 1000, type = "item", image = "skullcamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A skull camo for a weapon" },
    sessantacamo_attachment      = { name = "sessantacamo_attachment", label = "Sessanta Nove Camo", weight = 1000, type = "item", image = "sessantacamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A sessanta nove camo for a weapon" },
    perseuscamo_attachment       = { name = "perseuscamo_attachment", label = "Perseus Camo", weight = 1000, type = "item", image = "perseuscamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A perseus camo for a weapon" },
    leopardcamo_attachment       = { name = "leopardcamo_attachment", label = "Leopard Camo", weight = 1000, type = "item", image = "leopardcamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A leopard camo for a weapon" },
    zebracamo_attachment         = { name = "zebracamo_attachment", label = "Zebra Camo", weight = 1000, type = "item", image = "zebracamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A zebra camo for a weapon" },
    geocamo_attachment           = { name = "geocamo_attachment", label = "Geometric Camo", weight = 1000, type = "item", image = "geocamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A geometric camo for a weapon" },
    boomcamo_attachment          = { name = "boomcamo_attachment", label = "Boom Camo", weight = 1000, type = "item", image = "boomcamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A boom camo for a weapon" },
    patriotcamo_attachment       = { name = "patriotcamo_attachment", label = "Patriot Camo", weight = 1000, type = "item", image = "patriotcamo_attachment.png", unique = false, useable = true, shouldClose = true, description = "A patriot camo for a weapon" },

    -- Weapon Tints
    weapontint_0                 = { name = "weapontint_0", label = "Default Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Default/Black Weapon Tint" },
    weapontint_1                 = { name = "weapontint_1", label = "Green Tint", weight = 1000, type = "item", image = "weapontint_green.png", unique = false, useable = true, shouldClose = true, description = "Green Weapon Tint" },
    weapontint_2                 = { name = "weapontint_2", label = "Gold Tint", weight = 1000, type = "item", image = "weapontint_gold.png", unique = false, useable = true, shouldClose = true, description = "Gold Weapon Tint" },
    weapontint_3                 = { name = "weapontint_3", label = "Pink Tint", weight = 1000, type = "item", image = "weapontint_pink.png", unique = false, useable = true, shouldClose = true, description = "Pink Weapon Tint" },
    weapontint_4                 = { name = "weapontint_4", label = "Army Tint", weight = 1000, type = "item", image = "weapontint_army.png", unique = false, useable = true, shouldClose = true, description = "Army Weapon Tint" },
    weapontint_5                 = { name = "weapontint_5", label = "LSPD Tint", weight = 1000, type = "item", image = "weapontint_lspd.png", unique = false, useable = true, shouldClose = true, description = "LSPD Weapon Tint" },
    weapontint_6                 = { name = "weapontint_6", label = "Orange Tint", weight = 1000, type = "item", image = "weapontint_orange.png", unique = false, useable = true, shouldClose = true, description = "Orange Weapon Tint" },
    weapontint_7                 = { name = "weapontint_7", label = "Platinum Tint", weight = 1000, type = "item", image = "weapontint_plat.png", unique = false, useable = true, shouldClose = true, description = "Platinum Weapon Tint" },
    weapontint_mk2_0             = { name = "weapontint_mk2_0", label = "Classic Black Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Classic Black Weapon Tint for MK2 Weapons" },
    weapontint_mk2_1             = { name = "weapontint_mk2_1", label = "Classic Gray Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Classic Gray Weapon Tint for MK2 Weapons" },
    weapontint_mk2_2             = { name = "weapontint_mk2_2", label = "Classic Two-Tone Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Classic Two-Tone Weapon Tint for MK2 Weapons" },
    weapontint_mk2_3             = { name = "weapontint_mk2_3", label = "Classic White Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Classic White Weapon Tint for MK2 Weapons" },
    weapontint_mk2_4             = { name = "weapontint_mk2_4", label = "Classic Beige Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Classic Beige Weapon Tint for MK2 Weapons" },
    weapontint_mk2_5             = { name = "weapontint_mk2_5", label = "Classic Green Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Classic Green Weapon Tint for MK2 Weapons" },
    weapontint_mk2_6             = { name = "weapontint_mk2_6", label = "Classic Blue Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Classic Blue Weapon Tint for MK2 Weapons" },
    weapontint_mk2_7             = { name = "weapontint_mk2_7", label = "Classic Earth Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Classic Earth Weapon Tint for MK2 Weapons" },
    weapontint_mk2_8             = { name = "weapontint_mk2_8", label = "Classic Brown & Black Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Classic Brown & Black Weapon Tint for MK2 Weapons" },
    weapontint_mk2_9             = { name = "weapontint_mk2_9", label = "Red Contrast Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Red Contrast Weapon Tint for MK2 Weapons" },
    weapontint_mk2_10            = { name = "weapontint_mk2_10", label = "Blue Contrast Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Blue Contrast Weapon Tint for MK2 Weapons" },
    weapontint_mk2_11            = { name = "weapontint_mk2_11", label = "Yellow Contrast Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Yellow Contrast Weapon Tint for MK2 Weapons" },
    weapontint_mk2_12            = { name = "weapontint_mk2_12", label = "Orange Contrast Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Orange Contrast Weapon Tint for MK2 Weapons" },
    weapontint_mk2_13            = { name = "weapontint_mk2_13", label = "Bold Pink Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Bold Pink Weapon Tint for MK2 Weapons" },
    weapontint_mk2_14            = { name = "weapontint_mk2_14", label = "Bold Purple & Yellow Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Bold Purple & Yellow Weapon Tint for MK2 Weapons" },
    weapontint_mk2_15            = { name = "weapontint_mk2_15", label = "Bold Orange Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Bold Orange Weapon Tint for MK2 Weapons" },
    weapontint_mk2_16            = { name = "weapontint_mk2_16", label = "Bold Green & Purple Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Bold Green & Purple Weapon Tint for MK2 Weapons" },
    weapontint_mk2_17            = { name = "weapontint_mk2_17", label = "Bold Red Features Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Bold Red Features Weapon Tint for MK2 Weapons" },
    weapontint_mk2_18            = { name = "weapontint_mk2_18", label = "Bold Green Features Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Bold Green Features Weapon Tint for MK2 Weapons" },
    weapontint_mk2_19            = { name = "weapontint_mk2_19", label = "Bold Cyan Features Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Bold Cyan Features Weapon Tint for MK2 Weapons" },
    weapontint_mk2_20            = { name = "weapontint_mk2_20", label = "Bold Yellow Features Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Bold Yellow Features Weapon Tint for MK2 Weapons" },
    weapontint_mk2_21            = { name = "weapontint_mk2_21", label = "Bold Red & White Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Bold Red & White Weapon Tint for MK2 Weapons" },
    weapontint_mk2_22            = { name = "weapontint_mk2_22", label = "Bold Blue & White Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Bold Blue & White Weapon Tint for MK2 Weapons" },
    weapontint_mk2_23            = { name = "weapontint_mk2_23", label = "Metallic Gold Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Metallic Gold Weapon Tint for MK2 Weapons" },
    weapontint_mk2_24            = { name = "weapontint_mk2_24", label = "Metallic Platinum Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Metallic Platinum Weapon Tint for MK2 Weapons" },
    weapontint_mk2_25            = { name = "weapontint_mk2_25", label = "Metallic Gray & Lilac Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Metallic Gray & Lilac Weapon Tint for MK2 Weapons" },
    weapontint_mk2_26            = { name = "weapontint_mk2_26", label = "Metallic Purple & Lime Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Metallic Purple & Lime Weapon Tint for MK2 Weapons" },
    weapontint_mk2_27            = { name = "weapontint_mk2_27", label = "Metallic Red Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Metallic Red Weapon Tint for MK2 Weapons" },
    weapontint_mk2_28            = { name = "weapontint_mk2_28", label = "Metallic Green Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Metallic Green Weapon Tint for MK2 Weapons" },
    weapontint_mk2_29            = { name = "weapontint_mk2_29", label = "Metallic Blue Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Metallic Blue Weapon Tint for MK2 Weapons" },
    weapontint_mk2_30            = { name = "weapontint_mk2_30", label = "Metallic White & Aqua Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Metallic White & Aqua Weapon Tint for MK2 Weapons" },
    weapontint_mk2_31            = { name = "weapontint_mk2_31", label = "Metallic Orange & Yellow Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Metallic Orange & Yellow Weapon Tint for MK2 Weapons" },
    weapontint_mk2_32            = { name = "weapontint_mk2_32", label = "Metallic Red and Yellow Tint", weight = 1000, type = "item", image = "weapontint_black.png", unique = false, useable = true, shouldClose = true, description = "Metallic Red and Yellow Weapon Tint for MK2 Weapons" },
    -- ITEMS

    -- Ammo ITEMS
    pistol_ammo                  = { name = "pistol_ammo", label = "Pistol ammo", weight = 200, type = "item", image = "pistol_ammo.png", unique = false, useable = true, shouldClose = true, description = "Ammo for Pistols" },
    rifle_ammo                   = { name = "rifle_ammo", label = "Rifle ammo", weight = 1000, type = "item", image = "rifle_ammo.png", unique = false, useable = true, shouldClose = true, description = "Ammo for Rifles" },
    smg_ammo                     = { name = "smg_ammo", label = "SMG ammo", weight = 500, type = "item", image = "smg_ammo.png", unique = false, useable = true, shouldClose = true, description = "Ammo for Sub Machine Guns" },
    shotgun_ammo                 = { name = "shotgun_ammo", label = "Shotgun ammo", weight = 500, type = "item", image = "shotgun_ammo.png", unique = false, useable = true, shouldClose = true, description = "Ammo for Shotguns" },
    mg_ammo                      = { name = "mg_ammo", label = "MG ammo", weight = 1000, type = "item", image = "mg_ammo.png", unique = false, useable = true, shouldClose = true, description = "Ammo for Machine Guns" },
    snp_ammo                     = { name = "snp_ammo", label = "Sniper ammo", weight = 1000, type = "item", image = "rifle_ammo.png", unique = false, useable = true, shouldClose = true, description = "Ammo for Sniper Rifles" },
    emp_ammo                     = { name = "emp_ammo", label = "EMP Ammo", weight = 200, type = "item", image = "emp_ammo.png", unique = false, useable = true, shouldClose = true, description = "Ammo for EMP Launcher" },

    -- Card ITEMS
    id_card                      = { name = "id_card", label = "ID Card", weight = 0, type = "item", image = "id_card.png", unique = true, useable = true, shouldClose = false, description = "A card containing all your information to identify yourself" },
    driver_license               = { name = "driver_license", label = "Drivers License", weight = 0, type = "item", image = "driver_license.png", unique = true, useable = true, shouldClose = false, description = "Permit to show you can drive a vehicle" },
    lawyerpass                   = { name = "lawyerpass", label = "Lawyer Pass", weight = 0, type = "item", image = "lawyerpass.png", unique = true, useable = true, shouldClose = false, description = "Pass exclusive to lawyers to show they can represent a suspect" },
    weaponlicense                = { name = "weaponlicense", label = "Weapon License", weight = 0, type = "item", image = "weapon_license.png", unique = true, useable = true, shouldClose = true, description = "Weapon License" },
    bank_card                    = { name = "bank_card", label = "Bank Card", weight = 0, type = "item", image = "bank_card.png", unique = true, useable = true, shouldClose = true, description = "Used to access ATM" },
    security_card_01             = { name = "security_card_01", label = "Security Card A", weight = 0, type = "item", image = "security_card_01.png", unique = false, useable = true, shouldClose = true, description = "A security card... I wonder what it goes to" },
    security_card_02             = { name = "security_card_02", label = "Security Card B", weight = 0, type = "item", image = "security_card_02.png", unique = false, useable = true, shouldClose = true, description = "A security card... I wonder what it goes to" },

    -- Eat ITEMS
    tosti                        = { name = "tosti", label = "Grilled Cheese Sandwich", weight = 200, type = "item", image = "tosti.png", unique = false, useable = true, shouldClose = true, description = "Nice to eat" },
    twerks_candy                 = { name = "twerks_candy", label = "Twerks", weight = 100, type = "item", image = "twerks_candy.png", unique = false, useable = true, shouldClose = true, description = "Some delicious candy :O" },
    snikkel_candy                = { name = "snikkel_candy", label = "Snikkel", weight = 100, type = "item", image = "snikkel_candy.png", unique = false, useable = true, shouldClose = true, description = "Some delicious candy :O" },
    sandwich                     = { name = "sandwich", label = "Sandwich", weight = 200, type = "item", image = "sandwich.png", unique = false, useable = true, shouldClose = true, description = "Nice bread for your stomach" },

    -- Drink ITEMS
    water_bottle                 = { name = "water_bottle", label = "Bottle of Water", weight = 500, type = "item", image = "water_bottle.png", unique = false, useable = true, shouldClose = true, description = "For all the thirsty out there" },
    coffee                       = { name = "coffee", label = "Coffee", weight = 200, type = "item", image = "coffee.png", unique = false, useable = true, shouldClose = true, description = "Pump 4 Caffeine" },
    kurkakola                    = { name = "kurkakola", label = "Cola", weight = 500, type = "item", image = "cola.png", unique = false, useable = true, shouldClose = true, description = "For all the thirsty out there" },

    -- Alcohol
    beer                         = { name = "beer", label = "Beer", weight = 500, type = "item", image = "beer.png", unique = false, useable = true, shouldClose = true, description = "Nothing like a good cold beer!" },
    whiskey                      = { name = "whiskey", label = "Whiskey", weight = 500, type = "item", image = "whiskey.png", unique = false, useable = true, shouldClose = true, description = "For all the thirsty out there" },
    vodka                        = { name = "vodka", label = "Vodka", weight = 500, type = "item", image = "vodka.png", unique = false, useable = true, shouldClose = true, description = "For all the thirsty out there" },
    grape                        = { name = "grape", label = "Grape", weight = 100, type = "item", image = "grape.png", unique = false, useable = true, shouldClose = false, description = "Mmmmh yummie, grapes" },
    wine                         = { name = "wine", label = "Wine", weight = 300, type = "item", image = "wine.png", unique = false, useable = true, shouldClose = false, description = "Some good wine to drink on a fine evening" },
    grapejuice                   = { name = "grapejuice", label = "Grape Juice", weight = 200, type = "item", image = "grapejuice.png", unique = false, useable = true, shouldClose = false, description = "Grape juice is said to be healthy" },

    -- Drugs
    joint                        = { name = "joint", label = "Joint", weight = 0, type = "item", image = "joint.png", unique = false, useable = true, shouldClose = true, description = "Sidney would be very proud at you" },
    cokebaggy                    = { name = "cokebaggy", label = "Bag of Coke", weight = 0, type = "item", image = "cocaine_baggy.png", unique = false, useable = true, shouldClose = true, description = "To get happy real quick" },
    crack_baggy                  = { name = "crack_baggy", label = "Bag of Crack", weight = 0, type = "item", image = "crack_baggy.png", unique = false, useable = true, shouldClose = true, description = "To get happy faster" },
    xtcbaggy                     = { name = "xtcbaggy", label = "Bag of XTC", weight = 0, type = "item", image = "xtc_baggy.png", unique = false, useable = true, shouldClose = true, description = "Pop those pills baby" },
    coke_brick                   = { name = "coke_brick", label = "Coke Brick", weight = 1000, type = "item", image = "coke_brick.png", unique = true, useable = false, shouldClose = true, description = "Heavy package of cocaine, mostly used for deals and takes a lot of space" },
    weed_brick                   = { name = "weed_brick", label = "Weed Brick", weight = 1000, type = "item", image = "weed_brick.png", unique = false, useable = false, shouldClose = true, description = "1KG Weed Brick to sell to large customers." },
    coke_small_brick             = { name = "coke_small_brick", label = "Coke Package", weight = 350, type = "item", image = "coke_small_brick.png", unique = true, useable = false, shouldClose = true, description = "Small package of cocaine, mostly used for deals and takes a lot of space" },
    oxy                          = { name = "oxy", label = "Prescription Oxy", weight = 0, type = "item", image = "oxy.png", unique = false, useable = true, shouldClose = true, description = "The Label Has Been Ripped Off" },
    meth                         = { name = "meth", label = "Meth", weight = 100, type = "item", image = "meth_baggy.png", unique = false, useable = true, shouldClose = true, description = "A baggie of Meth" },
    rolling_paper                = { name = "rolling_paper", label = "Rolling Paper", weight = 0, type = "item", image = "rolling_paper.png", unique = false, useable = false, shouldClose = true, description = "Paper made specifically for encasing and smoking tobacco or cannabis." },

    -- Seed And Weed
    weed_whitewidow              = { name = "weed_whitewidow", label = "White Widow 2g", weight = 200, type = "item", image = "weed_baggy.png", unique = false, useable = true, shouldClose = false, description = "A weed bag with 2g White Widow" },
    weed_skunk                   = { name = "weed_skunk", label = "Skunk 2g", weight = 200, type = "item", image = "weed_baggy.png", unique = false, useable = true, shouldClose = false, description = "A weed bag with 2g Skunk" },
    weed_purplehaze              = { name = "weed_purplehaze", label = "Purple Haze 2g", weight = 200, type = "item", image = "weed_baggy.png", unique = false, useable = true, shouldClose = false, description = "A weed bag with 2g Purple Haze" },
    weed_ogkush                  = { name = "weed_ogkush", label = "OGKush 2g", weight = 200, type = "item", image = "weed_baggy.png", unique = false, useable = true, shouldClose = false, description = "A weed bag with 2g OG Kush" },
    weed_amnesia                 = { name = "weed_amnesia", label = "Amnesia 2g", weight = 200, type = "item", image = "weed_baggy.png", unique = false, useable = true, shouldClose = false, description = "A weed bag with 2g Amnesia" },
    weed_ak47                    = { name = "weed_ak47", label = "AK47 2g", weight = 200, type = "item", image = "weed_baggy.png", unique = false, useable = true, shouldClose = false, description = "A weed bag with 2g AK47" },
    weed_whitewidow_seed         = { name = "weed_whitewidow_seed", label = "White Widow Seed", weight = 0, type = "item", image = "weed_seed.png", unique = false, useable = true, shouldClose = false, description = "A weed seed of White Widow" },
    weed_skunk_seed              = { name = "weed_skunk_seed", label = "Skunk Seed", weight = 0, type = "item", image = "weed_seed.png", unique = false, useable = true, shouldClose = true, description = "A weed seed of Skunk" },
    weed_purplehaze_seed         = { name = "weed_purplehaze_seed", label = "Purple Haze Seed", weight = 0, type = "item", image = "weed_seed.png", unique = false, useable = true, shouldClose = true, description = "A weed seed of Purple Haze" },
    weed_ogkush_seed             = { name = "weed_ogkush_seed", label = "OGKush Seed", weight = 0, type = "item", image = "weed_seed.png", unique = false, useable = true, shouldClose = true, description = "A weed seed of OG Kush" },
    weed_amnesia_seed            = { name = "weed_amnesia_seed", label = "Amnesia Seed", weight = 0, type = "item", image = "weed_seed.png", unique = false, useable = true, shouldClose = true, description = "A weed seed of Amnesia" },
    weed_ak47_seed               = { name = "weed_ak47_seed", label = "AK47 Seed", weight = 0, type = "item", image = "weed_seed.png", unique = false, useable = true, shouldClose = true, description = "A weed seed of AK47" },
    empty_weed_bag               = { name = "empty_weed_bag", label = "Empty Weed Bag", weight = 0, type = "item", image = "weed_baggy_empty.png", unique = false, useable = true, shouldClose = true, description = "A small empty bag" },
    weed_nutrition               = { name = "weed_nutrition", label = "Plant Fertilizer", weight = 2000, type = "item", image = "weed_nutrition.png", unique = false, useable = true, shouldClose = true, description = "Plant nutrition" },

    -- Material
    plastic                      = { name = "plastic", label = "Plastic", weight = 100, type = "item", image = "plastic.png", unique = false, useable = false, shouldClose = false, description = "RECYCLE! - Greta Thunberg 2019" },
    metalscrap                   = { name = "metalscrap", label = "Metal Scrap", weight = 100, type = "item", image = "metalscrap.png", unique = false, useable = false, shouldClose = false, description = "You can probably make something nice out of this" },
    copper                       = { name = "copper", label = "Copper", weight = 100, type = "item", image = "copper.png", unique = false, useable = false, shouldClose = false, description = "Nice piece of metal that you can probably use for something" },
    aluminum                     = { name = "aluminum", label = "Aluminium", weight = 100, type = "item", image = "aluminum.png", unique = false, useable = false, shouldClose = false, description = "Nice piece of metal that you can probably use for something" },
    aluminumoxide                = { name = "aluminumoxide", label = "Aluminium Powder", weight = 100, type = "item", image = "aluminumoxide.png", unique = false, useable = false, shouldClose = false, description = "Some powder to mix with" },
    iron                         = { name = "iron", label = "Iron", weight = 100, type = "item", image = "iron.png", unique = false, useable = false, shouldClose = false, description = "Handy piece of metal that you can probably use for something" },
    ironoxide                    = { name = "ironoxide", label = "Iron Powder", weight = 100, type = "item", image = "ironoxide.png", unique = false, useable = false, shouldClose = false, description = "Some powder to mix with." },
    steel                        = { name = "steel", label = "Steel", weight = 100, type = "item", image = "steel.png", unique = false, useable = false, shouldClose = false, description = "Nice piece of metal that you can probably use for something" },
    rubber                       = { name = "rubber", label = "Rubber", weight = 100, type = "item", image = "rubber.png", unique = false, useable = false, shouldClose = false, description = "Rubber, I believe you can make your own rubber ducky with it :D" },
    glass                        = { name = "glass", label = "Glass", weight = 100, type = "item", image = "glass.png", unique = false, useable = false, shouldClose = false, description = "It is very fragile, watch out" },

    -- Tools
    lockpick                     = { name = "lockpick", label = "Lockpick", weight = 300, type = "item", image = "lockpick.png", unique = false, useable = true, shouldClose = true, description = "Very useful if you lose your keys a lot.. or if you want to use it for something else..." },
    advancedlockpick             = { name = "advancedlockpick", label = "Advanced Lockpick", weight = 500, type = "item", image = "advancedlockpick.png", unique = false, useable = true, shouldClose = true, description = "If you lose your keys a lot this is very useful... Also useful to open your beers" },
    electronickit                = { name = "electronickit", label = "Electronic Kit", weight = 100, type = "item", image = "electronickit.png", unique = false, useable = true, shouldClose = true, description = "If you've always wanted to build a robot you can maybe start here. Maybe you'll be the new Elon Musk?" },
    gatecrack                    = { name = "gatecrack", label = "Gatecrack", weight = 0, type = "item", image = "usb_device.png", unique = false, useable = false, shouldClose = true, description = "Handy software to tear down some fences" },
    thermite                     = { name = "thermite", label = "Thermite", weight = 1000, type = "item", image = "thermite.png", unique = false, useable = true, shouldClose = true, description = "Sometimes you'd wish for everything to burn" },
    trojan_usb                   = { name = "trojan_usb", label = "Trojan USB", weight = 0, type = "item", image = "usb_device.png", unique = false, useable = false, shouldClose = true, description = "Handy software to shut down some systems" },
    screwdriverset               = { name = "screwdriverset", label = "Toolkit", weight = 1000, type = "item", image = "screwdriverset.png", unique = false, useable = false, shouldClose = false, description = "Very useful to screw... screws..." },
    drill                        = { name = "drill", label = "Drill", weight = 20000, type = "item", image = "drill.png", unique = false, useable = false, shouldClose = false, description = "The real deal..." },

    -- Vehicle Tools
    nitrous                      = { name = "nitrous", label = "Nitrous", weight = 1000, type = "item", image = "nitrous.png", unique = false, useable = true, shouldClose = true, description = "Speed up, gas pedal! :D" },
    repairkit                    = { name = "repairkit", label = "Repairkit", weight = 2500, type = "item", image = "repairkit.png", unique = false, useable = true, shouldClose = true, description = "A nice toolbox with stuff to repair your vehicle" },
    advancedrepairkit            = { name = "advancedrepairkit", label = "Advanced Repairkit", weight = 4000, type = "item", image = "advancedkit.png", unique = false, useable = true, shouldClose = true, description = "A nice toolbox with stuff to repair your vehicle" },
    cleaningkit                  = { name = "cleaningkit", label = "Cleaning Kit", weight = 250, type = "item", image = "cleaningkit.png", unique = false, useable = true, shouldClose = true, description = "A microfiber cloth with some soap will let your car sparkle again!" },
    tunerlaptop                  = { name = "tunerlaptop", label = "Tunerchip", weight = 2000, type = "item", image = "tunerchip.png", unique = true, useable = true, shouldClose = true, description = "With this tunerchip you can get your car on steroids... If you know what you're doing" },
    harness                      = { name = "harness", label = "Race Harness", weight = 1000, type = "item", image = "harness.png", unique = true, useable = true, shouldClose = true, description = "Racing Harness so no matter what you stay in the car" },
    jerry_can                    = { name = "jerry_can", label = "Jerrycan 20L", weight = 20000, type = "item", image = "jerry_can.png", unique = false, useable = true, shouldClose = true, description = "A can full of Fuel" },
    tirerepairkit                = { name = "tirerepairkit", label = "Tire Repair Kit", weight = 1000, type = "item", image = "tirerepairkit.png", unique = false, useable = true, shouldClose = true, description = "A kit to repair your tires" },

    -- Mechanic Parts
    veh_toolbox                  = { name = "veh_toolbox", label = "Toolbox", weight = 1000, type = "item", image = "veh_toolbox.png", unique = false, useable = true, shouldClose = true, description = "Check vehicle status" },
    veh_armor                    = { name = "veh_armor", label = "Armor", weight = 1000, type = "item", image = "veh_armor.png", unique = false, useable = true, shouldClose = true, description = "Upgrade vehicle armor" },
    veh_brakes                   = { name = "veh_brakes", label = "Brakes", weight = 1000, type = "item", image = "veh_brakes.png", unique = false, useable = true, shouldClose = true, description = "Upgrade vehicle brakes" },
    veh_engine                   = { name = "veh_engine", label = "Engine", weight = 1000, type = "item", image = "veh_engine.png", unique = false, useable = true, shouldClose = true, description = "Upgrade vehicle engine" },
    veh_suspension               = { name = "veh_suspension", label = "Suspension", weight = 1000, type = "item", image = "veh_suspension.png", unique = false, useable = true, shouldClose = true, description = "Upgrade vehicle suspension" },
    veh_transmission             = { name = "veh_transmission", label = "Transmission", weight = 1000, type = "item", image = "veh_transmission.png", unique = false, useable = true, shouldClose = true, description = "Upgrade vehicle transmission" },
    veh_turbo                    = { name = "veh_turbo", label = "Turbo", weight = 1000, type = "item", image = "veh_turbo.png", unique = false, useable = true, shouldClose = true, description = "Install vehicle turbo" },
    veh_interior                 = { name = "veh_interior", label = "Interior", weight = 1000, type = "item", image = "veh_interior.png", unique = false, useable = true, shouldClose = true, description = "Upgrade vehicle interior" },
    veh_exterior                 = { name = "veh_exterior", label = "Exterior", weight = 1000, type = "item", image = "veh_exterior.png", unique = false, useable = true, shouldClose = true, description = "Upgrade vehicle exterior" },
    veh_wheels                   = { name = "veh_wheels", label = "Wheels", weight = 1000, type = "item", image = "veh_wheels.png", unique = false, useable = true, shouldClose = true, description = "Upgrade vehicle wheels" },
    veh_neons                    = { name = "veh_neons", label = "Neons", weight = 1000, type = "item", image = "veh_neons.png", unique = false, useable = true, shouldClose = true, description = "Upgrade vehicle neons" },
    veh_xenons                   = { name = "veh_xenons", label = "Xenons", weight = 1000, type = "item", image = "veh_xenons.png", unique = false, useable = true, shouldClose = true, description = "Upgrade vehicle xenons" },
    veh_tint                     = { name = "veh_tint", label = "Tints", weight = 1000, type = "item", image = "veh_tint.png", unique = false, useable = true, shouldClose = true, description = "Install vehicle tint" },
    veh_plates                   = { name = "veh_plates", label = "Plates", weight = 1000, type = "item", image = "veh_plates.png", unique = false, useable = true, shouldClose = true, description = "Install vehicle plates" },

    -- Medication
    firstaid                     = { name = "firstaid", label = "First Aid", weight = 2500, type = "item", image = "firstaid.png", unique = false, useable = true, shouldClose = true, description = "You can use this First Aid kit to get people back on their feet" },
    bandage                      = { name = "bandage", label = "Bandage", weight = 0, type = "item", image = "bandage.png", unique = false, useable = true, shouldClose = true, description = "A bandage works every time" },
    ifaks                        = { name = "ifaks", label = "ifaks", weight = 200, type = "item", image = "ifaks.png", unique = false, useable = true, shouldClose = true, description = "ifaks for healing and a complete stress remover." },
    painkillers                  = { name = "painkillers", label = "Painkillers", weight = 0, type = "item", image = "painkillers.png", unique = false, useable = true, shouldClose = true, description = "For pain you can't stand anymore, take this pill that'd make you feel great again" },
    walkstick                    = { name = "walkstick", label = "Walking Stick", weight = 1000, type = "item", image = "walkstick.png", unique = false, useable = true, shouldClose = true, description = "Walking stick for ya'll grannies out there.. HAHA" },

    -- Communication
    phone                        = { name = "phone", label = "Phone", weight = 700, type = "item", image = "phone.png", unique = true, useable = false, shouldClose = false, description = "Neat phone ya got there" },
    radio                        = { name = "radio", label = "Radio", weight = 2000, type = "item", image = "radio.png", unique = true, useable = true, shouldClose = true, description = "You can communicate with this through a signal" },
    iphone                       = { name = "iphone", label = "iPhone", weight = 1000, type = "item", image = "iphone.png", unique = false, useable = false, shouldClose = true, description = "Very expensive phone" },
    samsungphone                 = { name = "samsungphone", label = "Samsung S10", weight = 1000, type = "item", image = "samsungphone.png", unique = false, useable = false, shouldClose = true, description = "Very expensive phone" },
    laptop                       = { name = "laptop", label = "Laptop", weight = 4000, type = "item", image = "laptop.png", unique = false, useable = false, shouldClose = true, description = "Expensive laptop" },
    tablet                       = { name = "tablet", label = "Tablet", weight = 2000, type = "item", image = "tablet.png", unique = false, useable = false, shouldClose = true, description = "Expensive tablet" },
    fitbit                       = { name = "fitbit", label = "Fitbit", weight = 500, type = "item", image = "fitbit.png", unique = true, useable = true, shouldClose = true, description = "I like fitbit" },
    radioscanner                 = { name = "radioscanner", label = "Radio Scanner", weight = 1000, type = "item", image = "radioscanner.png", unique = false, useable = false, shouldClose = true, description = "With this you can get some police alerts. Not 100% effective however" },
    pinger                       = { name = "pinger", label = "Pinger", weight = 1000, type = "item", image = "pinger.png", unique = false, useable = false, shouldClose = true, description = "With a pinger and your phone you can send out your location" },
    cryptostick                  = { name = "cryptostick", label = "Crypto Stick", weight = 200, type = "item", image = "cryptostick.png", unique = true, useable = true, shouldClose = true, description = "Why would someone ever buy money that doesn't exist.. How many would it contain..?" },

    -- Theft and Jewelry
    rolex                        = { name = "rolex", label = "Golden Watch", weight = 1500, type = "item", image = "rolex.png", unique = false, useable = false, shouldClose = true, description = "A golden watch seems like the jackpot to me!" },
    diamond_ring                 = { name = "diamond_ring", label = "Diamond Ring", weight = 1500, type = "item", image = "diamond_ring.png", unique = false, useable = false, shouldClose = true, description = "A diamond ring seems like the jackpot to me!" },
    diamond                      = { name = "diamond", label = "Diamond", weight = 1000, type = "item", image = "diamond.png", unique = false, useable = false, shouldClose = true, description = "A diamond seems like the jackpot to me!" },
    goldchain                    = { name = "goldchain", label = "Golden Chain", weight = 1500, type = "item", image = "goldchain.png", unique = false, useable = false, shouldClose = true, description = "A golden chain seems like the jackpot to me!" },
    tenkgoldchain                = { name = "tenkgoldchain", label = "10k Gold Chain", weight = 2000, type = "item", image = "10kgoldchain.png", unique = false, useable = false, shouldClose = true, description = "10 carat golden chain" },
    goldbar                      = { name = "goldbar", label = "Gold Bar", weight = 7000, type = "item", image = "goldbar.png", unique = false, useable = false, shouldClose = true, description = "Looks pretty expensive to me" },

    -- Cops Tools
    armor                        = { name = "armor", label = "Armor", weight = 5000, type = "item", image = "armor.png", unique = false, useable = true, shouldClose = true, description = "Some protection won't hurt... right?" },
    heavyarmor                   = { name = "heavyarmor", label = "Heavy Armor", weight = 5000, type = "item", image = "armor.png", unique = false, useable = true, shouldClose = true, description = "Some protection won't hurt... right?" },
    handcuffs                    = { name = "handcuffs", label = "Handcuffs", weight = 100, type = "item", image = "handcuffs.png", unique = false, useable = true, shouldClose = true, description = "Comes in handy when people misbehave. Maybe it can be used for something else?" },
    police_stormram              = { name = "police_stormram", label = "Stormram", weight = 18000, type = "item", image = "police_stormram.png", unique = false, useable = true, shouldClose = true, description = "A nice tool to break into doors" },
    empty_evidence_bag           = { name = "empty_evidence_bag", label = "Empty Evidence Bag", weight = 0, type = "item", image = "evidence.png", unique = false, useable = false, shouldClose = false, description = "Used a lot to keep DNA from blood, bullet shells and more" },
    filled_evidence_bag          = { name = "filled_evidence_bag", label = "Evidence Bag", weight = 200, type = "item", image = "evidence.png", unique = true, useable = false, shouldClose = false, description = "A filled evidence bag to see who committed the crime >:(" },

    -- Firework Tools
    firework1                    = { name = "firework1", label = "2Brothers", weight = 1000, type = "item", image = "firework1.png", unique = false, useable = true, shouldClose = true, description = "Fireworks" },
    firework2                    = { name = "firework2", label = "Poppelers", weight = 1000, type = "item", image = "firework2.png", unique = false, useable = true, shouldClose = true, description = "Fireworks" },
    firework3                    = { name = "firework3", label = "WipeOut", weight = 1000, type = "item", image = "firework3.png", unique = false, useable = true, shouldClose = true, description = "Fireworks" },
    firework4                    = { name = "firework4", label = "Weeping Willow", weight = 1000, type = "item", image = "firework4.png", unique = false, useable = true, shouldClose = true, description = "Fireworks" },

    -- Sea Tools
    dendrogyra_coral             = { name = "dendrogyra_coral", label = "Dendrogyra", weight = 1000, type = "item", image = "dendrogyra_coral.png", unique = false, useable = false, shouldClose = true, description = "Its also known as pillar coral" },
    antipatharia_coral           = { name = "antipatharia_coral", label = "Antipatharia", weight = 1000, type = "item", image = "antipatharia_coral.png", unique = false, useable = false, shouldClose = true, description = "Its also known as black corals or thorn corals" },
    diving_gear                  = { name = "diving_gear", label = "Diving Gear", weight = 30000, type = "item", image = "diving_gear.png", unique = true, useable = true, shouldClose = true, description = "An oxygen tank and a rebreather" },
    diving_fill                  = { name = "diving_fill", label = "Diving Tube", weight = 3000, type = "item", image = "diving_tube.png", unique = true, useable = true, shouldClose = true, description = "An oxygen tube and a rebreather" },

    -- Other Tools
    casinochips                  = { name = "casinochips", label = "Casino Chips", weight = 0, type = "item", image = "casinochips.png", unique = false, useable = false, shouldClose = false, description = "Chips For Casino Gambling" },
    stickynote                   = { name = "stickynote", label = "Sticky note", weight = 0, type = "item", image = "stickynote.png", unique = true, useable = false, shouldClose = false, description = "Sometimes handy to remember something :)" },
    moneybag                     = { name = "moneybag", label = "Money Bag", weight = 0, type = "item", image = "moneybag.png", unique = true, useable = true, shouldClose = true, description = "A bag with cash" },
    parachute                    = { name = "parachute", label = "Parachute", weight = 30000, type = "item", image = "parachute.png", unique = true, useable = true, shouldClose = true, description = "The sky is the limit! Woohoo!" },
    binoculars                   = { name = "binoculars", label = "Binoculars", weight = 600, type = "item", image = "binoculars.png", unique = false, useable = true, shouldClose = true, description = "Sneaky Breaky..." },
    lighter                      = { name = "lighter", label = "Lighter", weight = 0, type = "item", image = "lighter.png", unique = false, useable = false, shouldClose = true, description = "On new years eve a nice fire to stand next to" },
    certificate                  = { name = "certificate", label = "Certificate", weight = 0, type = "item", image = "certificate.png", unique = false, useable = false, shouldClose = true, description = "Certificate that proves you own certain stuff" },
    markedbills                  = { name = "markedbills", label = "Marked Money", weight = 1000, type = "item", image = "markedbills.png", unique = true, useable = false, shouldClose = true, description = "Money?" },
    labkey                       = { name = "labkey", label = "Key", weight = 500, type = "item", image = "labkey.png", unique = true, useable = true, shouldClose = true, description = "Key for a lock...?" },
    printerdocument              = { name = "printerdocument", label = "Document", weight = 500, type = "item", image = "printerdocument.png", unique = true, useable = true, shouldClose = true, description = "A nice document" },
    newscam                      = { name = "newscam", label = "News Camera", weight = 100, type = "item", image = "newscam.png", unique = true, useable = true, shouldClose = true, description = "A camera for the news" },
    newsmic                      = { name = "newsmic", label = "News Microphone", weight = 100, type = "item", image = "newsmic.png", unique = true, useable = true, shouldClose = true, description = "A microphone for the news" },
    newsbmic                     = { name = "newsbmic", label = "Boom Microphone", weight = 100, type = "item", image = "newsbmic.png", unique = true, useable = true, shouldClose = true, description = "A Useable BoomMic" },

    cylinder_attachment           = { name = 'cylinder_attachment', label = 'Tube', weight = 1000, type = 'item', image = 'cylinder_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },
    cylinder_attachment_1         = { name = 'cylinder_attachment_1', label = 'Tube 1', weight = 1000, type = 'item', image = 'cylinder_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },
    cylinder_attachment_2         = { name = 'cylinder_attachment_2', label = 'Tube 2', weight = 1000, type = 'item', image = 'cylinder_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },

    tube_attachment           = { name = 'tube_attachment', label = 'Tube', weight = 1000, type = 'item', image = 'tube_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },
    tube_attachment_1         = { name = 'tube_attachment_1', label = 'Tube 1', weight = 1000, type = 'item', image = 'tube_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },
    tube_attachment_2         = { name = 'tube_attachment_2', label = 'Tube 2', weight = 1000, type = 'item', image = 'tube_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },
    tube_attachment_3         = { name = 'tube_attachment_3', label = 'Tube 3', weight = 1000, type = 'item', image = 'tube_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },

    frame_attachment              = { name = 'frame_attachment', label = 'Frame', weight = 1000, type = 'item', image = 'frame_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_1            = { name = 'frame_attachment_1', label = 'Frame 1', weight = 1000, type = 'item', image = 'frame_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_2            = { name = 'frame_attachment_2', label = 'Frame 2', weight = 1000, type = 'item', image = 'frame_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_3            = { name = 'frame_attachment_3', label = 'Frame 3', weight = 1000, type = 'item', image = 'frame_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_4            = { name = 'frame_attachment_4', label = 'Frame 4', weight = 1000, type = 'item', image = 'frame_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_5            = { name = 'frame_attachment_4', label = 'Frame 5', weight = 1000, type = 'item', image = 'frame_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_6            = { name = 'frame_attachment_4', label = 'Frame 6', weight = 1000, type = 'item', image = 'frame_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_7            = { name = 'frame_attachment_4', label = 'Frame 7', weight = 1000, type = 'item', image = 'frame_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_8            = { name = 'frame_attachment_4', label = 'Frame 8', weight = 1000, type = 'item', image = 'frame_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_9            = { name = 'frame_attachment_4', label = 'Frame 9', weight = 1000, type = 'item', image = 'frame_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    
    misc_attachment          = { name = 'misc_attachment', label = 'Misc', weight = 1000, type = 'item', image = 'misc_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = '' },
    misc_attachment_1        = { name = 'misc_attachment_1', label = 'Misc 1', weight = 1000, type = 'item', image = 'misc_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = '' },
    misc_attachment_2        = { name = 'misc_attachment_2', label = 'Misc 2', weight = 1000, type = 'item', image = 'misc_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = '' },
    misc_attachment_3        = { name = 'misc_attachment_3', label = 'Misc 3', weight = 1000, type = 'item', image = 'misc_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = '' },
    misc_attachment_4        = { name = 'misc_attachment_4', label = 'Misc 4', weight = 1000, type = 'item', image = 'misc_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = '' },

    laser_attachment          = { name = 'laser_attachment', label = 'Laser', weight = 1000, type = 'item', image = 'laser_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_1        = { name = 'laser_attachment_1', label = 'Laser 1', weight = 1000, type = 'item', image = 'laser_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_2        = { name = 'laser_attachment_2', label = 'Laser 2', weight = 1000, type = 'item', image = 'laser_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_3        = { name = 'laser_attachment_3', label = 'Laser 3', weight = 1000, type = 'item', image = 'laser_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_4        = { name = 'laser_attachment_4', label = 'Laser 4', weight = 1000, type = 'item', image = 'laser_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_5        = { name = 'laser_attachment_5', label = 'Laser 5', weight = 1000, type = 'item', image = 'laser_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_6        = { name = 'laser_attachment_6', label = 'Laser 6', weight = 1000, type = 'item', image = 'laser_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },

    flashlight_attachment_1        = { name = 'flashlight_attachment_1', label = 'Flashlight 1', weight = 1000, type = 'item', image = 'flashlight_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_2        = { name = 'flashlight_attachment_2', label = 'Flashlight 2', weight = 1000, type = 'item', image = 'flashlight_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_3        = { name = 'flashlight_attachment_3', label = 'Flashlight 3', weight = 1000, type = 'item', image = 'flashlight_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_4        = { name = 'flashlight_attachment_4', label = 'Flashlight 4', weight = 1000, type = 'item', image = 'flashlight_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_5        = { name = 'flashlight_attachment_5', label = 'Flashlight 5', weight = 1000, type = 'item', image = 'flashlight_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_6        = { name = 'flashlight_attachment_6', label = 'Flashlight 6', weight = 1000, type = 'item', image = 'flashlight_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_7        = { name = 'flashlight_attachment_7', label = 'Flashlight 7', weight = 1000, type = 'item', image = 'flashlight_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_8        = { name = 'flashlight_attachment_8', label = 'Flashlight 8', weight = 1000, type = 'item', image = 'flashlight_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_9        = { name = 'flashlight_attachment_9', label = 'Flashlight 9', weight = 1000, type = 'item', image = 'flashlight_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },

    clip_attachment_1            = { name = 'clip_attachment_1', label = 'Clip 1', weight = 1000, type = 'item', image = 'clip_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_2            = { name = 'clip_attachment_2', label = 'Clip 2', weight = 1000, type = 'item', image = 'clip_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_3            = { name = 'clip_attachment_3', label = 'Clip 3', weight = 1000, type = 'item', image = 'clip_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_4            = { name = 'clip_attachment_4', label = 'Clip 4', weight = 1000, type = 'item', image = 'clip_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_5            = { name = 'clip_attachment_5', label = 'Clip 5', weight = 1000, type = 'item', image = 'clip_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_6            = { name = 'clip_attachment_6', label = 'Clip 6', weight = 1000, type = 'item', image = 'clip_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_7            = { name = 'clip_attachment_7', label = 'Clip 7', weight = 1000, type = 'item', image = 'clip_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_8            = { name = 'clip_attachment_8', label = 'Clip 8', weight = 1000, type = 'item', image = 'clip_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_9            = { name = 'clip_attachment_9', label = 'Clip 9', weight = 1000, type = 'item', image = 'clip_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },

    grip_attachment_1            = { name = 'grip_attachment_1', label = 'Grip 1', weight = 1000, type = 'item', image = 'grip_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_2            = { name = 'grip_attachment_2', label = 'Grip 2', weight = 1000, type = 'item', image = 'grip_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_3            = { name = 'grip_attachment_3', label = 'Grip 3', weight = 1000, type = 'item', image = 'grip_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_4            = { name = 'grip_attachment_4', label = 'Grip 4', weight = 1000, type = 'item', image = 'grip_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_5            = { name = 'grip_attachment_5', label = 'Grip 5', weight = 1000, type = 'item', image = 'grip_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_6            = { name = 'grip_attachment_6', label = 'Grip 6', weight = 1000, type = 'item', image = 'grip_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_7            = { name = 'grip_attachment_7', label = 'Grip 7', weight = 1000, type = 'item', image = 'grip_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_8            = { name = 'grip_attachment_8', label = 'Grip 8', weight = 1000, type = 'item', image = 'grip_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_9            = { name = 'grip_attachment_9', label = 'Grip 9', weight = 1000, type = 'item', image = 'grip_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },

    slide_attachment          = { name = 'slide_attachment', label = 'Slide', weight = 1000, type = 'item', image = 'slide_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_1        = { name = 'slide_attachment_1', label = 'Slide 1', weight = 1000, type = 'item', image = 'slide_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_2        = { name = 'slide_attachment_2', label = 'Slide 2', weight = 1000, type = 'item', image = 'slide_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_3        = { name = 'slide_attachment_3', label = 'Slide 3', weight = 1000, type = 'item', image = 'slide_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_4        = { name = 'slide_attachment_4', label = 'Slide 4', weight = 1000, type = 'item', image = 'slide_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_5        = { name = 'slide_attachment_5', label = 'Slide 5', weight = 1000, type = 'item', image = 'slide_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_6        = { name = 'slide_attachment_6', label = 'Slide 6', weight = 1000, type = 'item', image = 'slide_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_7        = { name = 'slide_attachment_7', label = 'Slide 7', weight = 1000, type = 'item', image = 'slide_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_8        = { name = 'slide_attachment_8', label = 'Slide 8', weight = 1000, type = 'item', image = 'slide_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_9        = { name = 'slide_attachment_9', label = 'Slide 9', weight = 1000, type = 'item', image = 'slide_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },

    handguard_attachment              = { name = 'handguard_attachment', label = 'Handguard', weight = 1000, type = 'item', image = 'handguard_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_1            = { name = 'handguard_attachment_1', label = 'Handguard 1', weight = 1000, type = 'item', image = 'handguard_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_2            = { name = 'handguard_attachment_2', label = 'Handguard 2', weight = 1000, type = 'item', image = 'handguard_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_3            = { name = 'handguard_attachment_3', label = 'Handguard 3', weight = 1000, type = 'item', image = 'handguard_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_4            = { name = 'handguard_attachment_4', label = 'Handguard 4', weight = 1000, type = 'item', image = 'handguard_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_5            = { name = 'handguard_attachment_5', label = 'Handguard 5', weight = 1000, type = 'item', image = 'handguard_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_6            = { name = 'handguard_attachment_6', label = 'Handguard 6', weight = 1000, type = 'item', image = 'handguard_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_7            = { name = 'handguard_attachment_7', label = 'Handguard 7', weight = 1000, type = 'item', image = 'handguard_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_8            = { name = 'handguard_attachment_8', label = 'Handguard 8', weight = 1000, type = 'item', image = 'handguard_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_9            = { name = 'handguard_attachment_9', label = 'Handguard 9', weight = 1000, type = 'item', image = 'handguard_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },

    suppressor_attachment_1      = { name = 'suppressor_attachment_1', label = 'Suppressor 1', weight = 1000, type = 'item', image = 'suppressor_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_2      = { name = 'suppressor_attachment_2', label = 'Suppressor 2', weight = 1000, type = 'item', image = 'suppressor_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_3      = { name = 'suppressor_attachment_3', label = 'Suppressor 3', weight = 1000, type = 'item', image = 'suppressor_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_4      = { name = 'suppressor_attachment_4', label = 'Suppressor 4', weight = 1000, type = 'item', image = 'suppressor_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_5      = { name = 'suppressor_attachment_5', label = 'Suppressor 5', weight = 1000, type = 'item', image = 'suppressor_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_6      = { name = 'suppressor_attachment_6', label = 'Suppressor 6', weight = 1000, type = 'item', image = 'suppressor_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_7      = { name = 'suppressor_attachment_7', label = 'Suppressor 7', weight = 1000, type = 'item', image = 'suppressor_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_8      = { name = 'suppressor_attachment_8', label = 'Suppressor 8', weight = 1000, type = 'item', image = 'suppressor_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_9      = { name = 'suppressor_attachment_9', label = 'Suppressor 9', weight = 1000, type = 'item', image = 'suppressor_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },

    stock_attachment          = { name = 'stock_attachment', label = 'Stock', weight = 1000, type = 'item', image = 'stock_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_1        = { name = 'stock_attachment_1', label = 'Stock 1', weight = 1000, type = 'item', image = 'stock_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_2        = { name = 'stock_attachment_2', label = 'Stock 2', weight = 1000, type = 'item', image = 'stock_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_3        = { name = 'stock_attachment_3', label = 'Stock 3', weight = 1000, type = 'item', image = 'stock_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_4        = { name = 'stock_attachment_4', label = 'Stock 4', weight = 1000, type = 'item', image = 'stock_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_5        = { name = 'stock_attachment_5', label = 'Stock 5', weight = 1000, type = 'item', image = 'stock_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_6        = { name = 'stock_attachment_6', label = 'Stock 6', weight = 1000, type = 'item', image = 'stock_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_7        = { name = 'stock_attachment_7', label = 'Stock 7', weight = 1000, type = 'item', image = 'stock_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_8        = { name = 'stock_attachment_8', label = 'Stock 8', weight = 1000, type = 'item', image = 'stock_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_9        = { name = 'stock_attachment_9', label = 'Stock 9', weight = 1000, type = 'item', image = 'stock_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_10       = { name = 'stock_attachment_10', label = 'Stock 10', weight = 1000, type = 'item', image = 'stock_attachment_10.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },

    scope_attachment          = { name = 'scope_attachment', label = 'Scope', weight = 1000, type = 'item', image = 'scope_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_1        = { name = 'scope_attachment_1', label = 'Scope 1', weight = 1000, type = 'item', image = 'scope_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_2        = { name = 'scope_attachment_2', label = 'Scope 2', weight = 1000, type = 'item', image = 'scope_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_3        = { name = 'scope_attachment_3', label = 'Scope 3', weight = 1000, type = 'item', image = 'scope_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_4        = { name = 'scope_attachment_4', label = 'Scope 4', weight = 1000, type = 'item', image = 'scope_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_5        = { name = 'scope_attachment_5', label = 'Scope 5', weight = 1000, type = 'item', image = 'scope_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_6        = { name = 'scope_attachment_6', label = 'Scope 6', weight = 1000, type = 'item', image = 'scope_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_7        = { name = 'scope_attachment_7', label = 'Scope 7', weight = 1000, type = 'item', image = 'scope_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_8        = { name = 'scope_attachment_8', label = 'Scope 8', weight = 1000, type = 'item', image = 'scope_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_9        = { name = 'scope_attachment_9', label = 'Scope 9', weight = 1000, type = 'item', image = 'scope_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_10       = { name = 'scope_attachment_10', label = 'Scope 10', weight = 1000, type = 'item', image = 'scope_attachment_10.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },

    muzzle_attachment          = { name = 'muzzle_attachment', label = 'Muzzle', weight = 1000, type = 'item', image = 'muzzle_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_1        = { name = 'muzzle_attachment_1', label = 'Muzzle 1', weight = 1000, type = 'item', image = 'muzzle_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_2        = { name = 'muzzle_attachment_2', label = 'Muzzle 2', weight = 1000, type = 'item', image = 'muzzle_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_3        = { name = 'muzzle_attachment_3', label = 'Muzzle 3', weight = 1000, type = 'item', image = 'muzzle_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_4        = { name = 'muzzle_attachment_4', label = 'Muzzle 4', weight = 1000, type = 'item', image = 'muzzle_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_5        = { name = 'muzzle_attachment_5', label = 'Muzzle 5', weight = 1000, type = 'item', image = 'muzzle_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_6        = { name = 'muzzle_attachment_6', label = 'Muzzle 6', weight = 1000, type = 'item', image = 'muzzle_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_7        = { name = 'muzzle_attachment_7', label = 'Muzzle 7', weight = 1000, type = 'item', image = 'muzzle_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_8        = { name = 'muzzle_attachment_8', label = 'Muzzle 8', weight = 1000, type = 'item', image = 'muzzle_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_9        = { name = 'muzzle_attachment_9', label = 'Muzzle 9', weight = 1000, type = 'item', image = 'muzzle_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_10       = { name = 'muzzle_attachment_10', label = 'Muzzle 10', weight = 1000, type = 'item', image = 'muzzle_attachment_10.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },

    barrel_attachment_1        = { name = 'barrel_attachment_1', label = 'Barrel 1', weight = 1000, type = 'item', image = 'barrel_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_2        = { name = 'barrel_attachment_2', label = 'Barrel 2', weight = 1000, type = 'item', image = 'barrel_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_3        = { name = 'barrel_attachment_3', label = 'Barrel 3', weight = 1000, type = 'item', image = 'barrel_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_4        = { name = 'barrel_attachment_4', label = 'Barrel 4', weight = 1000, type = 'item', image = 'barrel_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_5        = { name = 'barrel_attachment_5', label = 'Barrel 5', weight = 1000, type = 'item', image = 'barrel_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_6        = { name = 'barrel_attachment_6', label = 'Barrel 6', weight = 1000, type = 'item', image = 'barrel_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_7        = { name = 'barrel_attachment_7', label = 'Barrel 7', weight = 1000, type = 'item', image = 'barrel_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_8        = { name = 'barrel_attachment_8', label = 'Barrel 8', weight = 1000, type = 'item', image = 'barrel_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_9        = { name = 'barrel_attachment_9', label = 'Barrel 9', weight = 1000, type = 'item', image = 'barrel_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_10       = { name = 'barrel_attachment_10', label = 'Barrel 10', weight = 1000, type = 'item', image = 'barrel_attachment_10.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_11       = { name = 'barrel_attachment_11', label = 'Barrel 11', weight = 1000, type = 'item', image = 'barrel_attachment_11.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_12       = { name = 'barrel_attachment_12', label = 'Barrel 12', weight = 1000, type = 'item', image = 'barrel_attachment_12.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_13       = { name = 'barrel_attachment_13', label = 'Barrel 13', weight = 1000, type = 'item', image = 'barrel_attachment_13.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_14       = { name = 'barrel_attachment_14', label = 'Barrel 14', weight = 1000, type = 'item', image = 'barrel_attachment_14.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_15       = { name = 'barrel_attachment_15', label = 'Barrel 15', weight = 1000, type = 'item', image = 'barrel_attachment_15.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    `

let itemslua_attachments = `QBShared = QBShared or {}
QBShared.Items = {
    -- Weapon Attachments
    clip_attachment              = { name = "clip_attachment", label = "Clip", weight = 1000, type = "item", image = "clip_attachment.png", unique = false, useable = true, shouldClose = true, description = "A clip for a weapon" },
    drum_attachment              = { name = "drum_attachment", label = "Drum", weight = 1000, type = "item", image = "drum_attachment.png", unique = false, useable = true, shouldClose = true, description = "A drum for a weapon" },
    flashlight_attachment        = { name = "flashlight_attachment", label = "Flashlight", weight = 1000, type = "item", image = "flashlight_attachment.png", unique = false, useable = true, shouldClose = true, description = "A flashlight for a weapon" },
    suppressor_attachment        = { name = "suppressor_attachment", label = "Suppressor", weight = 1000, type = "item", image = "suppressor_attachment.png", unique = false, useable = true, shouldClose = true, description = "A suppressor for a weapon" },
    barrel_attachment            = { name = "barrel_attachment", label = "Barrel", weight = 1000, type = "item", image = "barrel_attachment.png", unique = false, useable = true, shouldClose = true, description = "A barrel for a weapon" },
    grip_attachment              = { name = "grip_attachment", label = "Grip", weight = 1000, type = "item", image = "grip_attachment.png", unique = false, useable = true, shouldClose = true, description = "A grip for a weapon" },
    comp_attachment              = { name = "comp_attachment", label = "Compensator", weight = 1000, type = "item", image = "comp_attachment.png", unique = false, useable = true, shouldClose = true, description = "A compensator for a weapon" },

    cylinder_attachment           = { name = 'cylinder_attachment', label = 'Tube', weight = 1000, type = 'item', image = 'cylinder_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },
    cylinder_attachment_1         = { name = 'cylinder_attachment_1', label = 'Tube 1', weight = 1000, type = 'item', image = 'cylinder_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },
    cylinder_attachment_2         = { name = 'cylinder_attachment_2', label = 'Tube 2', weight = 1000, type = 'item', image = 'cylinder_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },

    tube_attachment           = { name = 'tube_attachment', label = 'Tube', weight = 1000, type = 'item', image = 'tube_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },
    tube_attachment_1         = { name = 'tube_attachment_1', label = 'Tube 1', weight = 1000, type = 'item', image = 'tube_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },
    tube_attachment_2         = { name = 'tube_attachment_2', label = 'Tube 2', weight = 1000, type = 'item', image = 'tube_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },
    tube_attachment_3         = { name = 'tube_attachment_3', label = 'Tube 3', weight = 1000, type = 'item', image = 'tube_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Tube for a weapon' },

    frame_attachment              = { name = 'frame_attachment', label = 'Frame', weight = 1000, type = 'item', image = 'frame_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_1            = { name = 'frame_attachment_1', label = 'Frame 1', weight = 1000, type = 'item', image = 'frame_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_2            = { name = 'frame_attachment_2', label = 'Frame 2', weight = 1000, type = 'item', image = 'frame_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_3            = { name = 'frame_attachment_3', label = 'Frame 3', weight = 1000, type = 'item', image = 'frame_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_4            = { name = 'frame_attachment_4', label = 'Frame 4', weight = 1000, type = 'item', image = 'frame_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_5            = { name = 'frame_attachment_4', label = 'Frame 5', weight = 1000, type = 'item', image = 'frame_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_6            = { name = 'frame_attachment_4', label = 'Frame 6', weight = 1000, type = 'item', image = 'frame_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_7            = { name = 'frame_attachment_4', label = 'Frame 7', weight = 1000, type = 'item', image = 'frame_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_8            = { name = 'frame_attachment_4', label = 'Frame 8', weight = 1000, type = 'item', image = 'frame_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    frame_attachment_9            = { name = 'frame_attachment_4', label = 'Frame 9', weight = 1000, type = 'item', image = 'frame_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A frame for a weapon' },
    
    misc_attachment          = { name = 'misc_attachment', label = 'Misc', weight = 1000, type = 'item', image = 'misc_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = '' },
    misc_attachment_1        = { name = 'misc_attachment_1', label = 'Misc 1', weight = 1000, type = 'item', image = 'misc_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = '' },
    misc_attachment_2        = { name = 'misc_attachment_2', label = 'Misc 2', weight = 1000, type = 'item', image = 'misc_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = '' },
    misc_attachment_3        = { name = 'misc_attachment_3', label = 'Misc 3', weight = 1000, type = 'item', image = 'misc_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = '' },
    misc_attachment_4        = { name = 'misc_attachment_4', label = 'Misc 4', weight = 1000, type = 'item', image = 'misc_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = '' },

    laser_attachment          = { name = 'laser_attachment', label = 'Laser', weight = 1000, type = 'item', image = 'laser_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_1        = { name = 'laser_attachment_1', label = 'Laser 1', weight = 1000, type = 'item', image = 'laser_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_2        = { name = 'laser_attachment_2', label = 'Laser 2', weight = 1000, type = 'item', image = 'laser_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_3        = { name = 'laser_attachment_3', label = 'Laser 3', weight = 1000, type = 'item', image = 'laser_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_4        = { name = 'laser_attachment_4', label = 'Laser 4', weight = 1000, type = 'item', image = 'laser_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_5        = { name = 'laser_attachment_5', label = 'Laser 5', weight = 1000, type = 'item', image = 'laser_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },
    laser_attachment_6        = { name = 'laser_attachment_6', label = 'Laser 6', weight = 1000, type = 'item', image = 'laser_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Laser for a weapon' },

    flashlight_attachment_1        = { name = 'flashlight_attachment_1', label = 'Flashlight 1', weight = 1000, type = 'item', image = 'flashlight_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_2        = { name = 'flashlight_attachment_2', label = 'Flashlight 2', weight = 1000, type = 'item', image = 'flashlight_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_3        = { name = 'flashlight_attachment_3', label = 'Flashlight 3', weight = 1000, type = 'item', image = 'flashlight_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_4        = { name = 'flashlight_attachment_4', label = 'Flashlight 4', weight = 1000, type = 'item', image = 'flashlight_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_5        = { name = 'flashlight_attachment_5', label = 'Flashlight 5', weight = 1000, type = 'item', image = 'flashlight_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_6        = { name = 'flashlight_attachment_6', label = 'Flashlight 6', weight = 1000, type = 'item', image = 'flashlight_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_7        = { name = 'flashlight_attachment_7', label = 'Flashlight 7', weight = 1000, type = 'item', image = 'flashlight_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_8        = { name = 'flashlight_attachment_8', label = 'Flashlight 8', weight = 1000, type = 'item', image = 'flashlight_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },
    flashlight_attachment_9        = { name = 'flashlight_attachment_9', label = 'Flashlight 9', weight = 1000, type = 'item', image = 'flashlight_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A flashlight for a weapon' },

    clip_attachment_1            = { name = 'clip_attachment_1', label = 'Clip 1', weight = 1000, type = 'item', image = 'clip_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_2            = { name = 'clip_attachment_2', label = 'Clip 2', weight = 1000, type = 'item', image = 'clip_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_3            = { name = 'clip_attachment_3', label = 'Clip 3', weight = 1000, type = 'item', image = 'clip_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_4            = { name = 'clip_attachment_4', label = 'Clip 4', weight = 1000, type = 'item', image = 'clip_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_5            = { name = 'clip_attachment_5', label = 'Clip 5', weight = 1000, type = 'item', image = 'clip_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_6            = { name = 'clip_attachment_6', label = 'Clip 6', weight = 1000, type = 'item', image = 'clip_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_7            = { name = 'clip_attachment_7', label = 'Clip 7', weight = 1000, type = 'item', image = 'clip_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_8            = { name = 'clip_attachment_8', label = 'Clip 8', weight = 1000, type = 'item', image = 'clip_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },
    clip_attachment_9            = { name = 'clip_attachment_9', label = 'Clip 9', weight = 1000, type = 'item', image = 'clip_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A clip for a weapon' },

    grip_attachment_1            = { name = 'grip_attachment_1', label = 'Grip 1', weight = 1000, type = 'item', image = 'grip_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_2            = { name = 'grip_attachment_2', label = 'Grip 2', weight = 1000, type = 'item', image = 'grip_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_3            = { name = 'grip_attachment_3', label = 'Grip 3', weight = 1000, type = 'item', image = 'grip_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_4            = { name = 'grip_attachment_4', label = 'Grip 4', weight = 1000, type = 'item', image = 'grip_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_5            = { name = 'grip_attachment_5', label = 'Grip 5', weight = 1000, type = 'item', image = 'grip_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_6            = { name = 'grip_attachment_6', label = 'Grip 6', weight = 1000, type = 'item', image = 'grip_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_7            = { name = 'grip_attachment_7', label = 'Grip 7', weight = 1000, type = 'item', image = 'grip_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_8            = { name = 'grip_attachment_8', label = 'Grip 8', weight = 1000, type = 'item', image = 'grip_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },
    grip_attachment_9            = { name = 'grip_attachment_9', label = 'Grip 9', weight = 1000, type = 'item', image = 'grip_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A grip for a weapon' },

    slide_attachment          = { name = 'slide_attachment', label = 'Slide', weight = 1000, type = 'item', image = 'slide_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_1        = { name = 'slide_attachment_1', label = 'Slide 1', weight = 1000, type = 'item', image = 'slide_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_2        = { name = 'slide_attachment_2', label = 'Slide 2', weight = 1000, type = 'item', image = 'slide_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_3        = { name = 'slide_attachment_3', label = 'Slide 3', weight = 1000, type = 'item', image = 'slide_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_4        = { name = 'slide_attachment_4', label = 'Slide 4', weight = 1000, type = 'item', image = 'slide_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_5        = { name = 'slide_attachment_5', label = 'Slide 5', weight = 1000, type = 'item', image = 'slide_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_6        = { name = 'slide_attachment_6', label = 'Slide 6', weight = 1000, type = 'item', image = 'slide_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_7        = { name = 'slide_attachment_7', label = 'Slide 7', weight = 1000, type = 'item', image = 'slide_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_8        = { name = 'slide_attachment_8', label = 'Slide 8', weight = 1000, type = 'item', image = 'slide_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },
    slide_attachment_9        = { name = 'slide_attachment_9', label = 'Slide 9', weight = 1000, type = 'item', image = 'slide_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A slide for a weapon' },

    handguard_attachment              = { name = 'handguard_attachment', label = 'Handguard', weight = 1000, type = 'item', image = 'handguard_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_1            = { name = 'handguard_attachment_1', label = 'Handguard 1', weight = 1000, type = 'item', image = 'handguard_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_2            = { name = 'handguard_attachment_2', label = 'Handguard 2', weight = 1000, type = 'item', image = 'handguard_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_3            = { name = 'handguard_attachment_3', label = 'Handguard 3', weight = 1000, type = 'item', image = 'handguard_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_4            = { name = 'handguard_attachment_4', label = 'Handguard 4', weight = 1000, type = 'item', image = 'handguard_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_5            = { name = 'handguard_attachment_5', label = 'Handguard 5', weight = 1000, type = 'item', image = 'handguard_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_6            = { name = 'handguard_attachment_6', label = 'Handguard 6', weight = 1000, type = 'item', image = 'handguard_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_7            = { name = 'handguard_attachment_7', label = 'Handguard 7', weight = 1000, type = 'item', image = 'handguard_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_8            = { name = 'handguard_attachment_8', label = 'Handguard 8', weight = 1000, type = 'item', image = 'handguard_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },
    handguard_attachment_9            = { name = 'handguard_attachment_9', label = 'Handguard 9', weight = 1000, type = 'item', image = 'handguard_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A Handguard for a weapon' },

    suppressor_attachment_1      = { name = 'suppressor_attachment_1', label = 'Suppressor 1', weight = 1000, type = 'item', image = 'suppressor_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_2      = { name = 'suppressor_attachment_2', label = 'Suppressor 2', weight = 1000, type = 'item', image = 'suppressor_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_3      = { name = 'suppressor_attachment_3', label = 'Suppressor 3', weight = 1000, type = 'item', image = 'suppressor_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_4      = { name = 'suppressor_attachment_4', label = 'Suppressor 4', weight = 1000, type = 'item', image = 'suppressor_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_5      = { name = 'suppressor_attachment_5', label = 'Suppressor 5', weight = 1000, type = 'item', image = 'suppressor_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_6      = { name = 'suppressor_attachment_6', label = 'Suppressor 6', weight = 1000, type = 'item', image = 'suppressor_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_7      = { name = 'suppressor_attachment_7', label = 'Suppressor 7', weight = 1000, type = 'item', image = 'suppressor_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_8      = { name = 'suppressor_attachment_8', label = 'Suppressor 8', weight = 1000, type = 'item', image = 'suppressor_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },
    suppressor_attachment_9      = { name = 'suppressor_attachment_9', label = 'Suppressor 9', weight = 1000, type = 'item', image = 'suppressor_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A suppressor for a weapon' },

    stock_attachment          = { name = 'stock_attachment', label = 'Stock', weight = 1000, type = 'item', image = 'stock_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_1        = { name = 'stock_attachment_1', label = 'Stock 1', weight = 1000, type = 'item', image = 'stock_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_2        = { name = 'stock_attachment_2', label = 'Stock 2', weight = 1000, type = 'item', image = 'stock_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_3        = { name = 'stock_attachment_3', label = 'Stock 3', weight = 1000, type = 'item', image = 'stock_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_4        = { name = 'stock_attachment_4', label = 'Stock 4', weight = 1000, type = 'item', image = 'stock_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_5        = { name = 'stock_attachment_5', label = 'Stock 5', weight = 1000, type = 'item', image = 'stock_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_6        = { name = 'stock_attachment_6', label = 'Stock 6', weight = 1000, type = 'item', image = 'stock_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_7        = { name = 'stock_attachment_7', label = 'Stock 7', weight = 1000, type = 'item', image = 'stock_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_8        = { name = 'stock_attachment_8', label = 'Stock 8', weight = 1000, type = 'item', image = 'stock_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_9        = { name = 'stock_attachment_9', label = 'Stock 9', weight = 1000, type = 'item', image = 'stock_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },
    stock_attachment_10       = { name = 'stock_attachment_10', label = 'Stock 10', weight = 1000, type = 'item', image = 'stock_attachment_10.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A stock for a weapon' },

    scope_attachment          = { name = 'scope_attachment', label = 'Scope', weight = 1000, type = 'item', image = 'scope_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_1        = { name = 'scope_attachment_1', label = 'Scope 1', weight = 1000, type = 'item', image = 'scope_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_2        = { name = 'scope_attachment_2', label = 'Scope 2', weight = 1000, type = 'item', image = 'scope_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_3        = { name = 'scope_attachment_3', label = 'Scope 3', weight = 1000, type = 'item', image = 'scope_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_4        = { name = 'scope_attachment_4', label = 'Scope 4', weight = 1000, type = 'item', image = 'scope_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_5        = { name = 'scope_attachment_5', label = 'Scope 5', weight = 1000, type = 'item', image = 'scope_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_6        = { name = 'scope_attachment_6', label = 'Scope 6', weight = 1000, type = 'item', image = 'scope_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_7        = { name = 'scope_attachment_7', label = 'Scope 7', weight = 1000, type = 'item', image = 'scope_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_8        = { name = 'scope_attachment_8', label = 'Scope 8', weight = 1000, type = 'item', image = 'scope_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_9        = { name = 'scope_attachment_9', label = 'Scope 9', weight = 1000, type = 'item', image = 'scope_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },
    scope_attachment_10       = { name = 'scope_attachment_10', label = 'Scope 10', weight = 1000, type = 'item', image = 'scope_attachment_10.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A scope for a weapon' },

    muzzle_attachment          = { name = 'muzzle_attachment', label = 'Muzzle', weight = 1000, type = 'item', image = 'muzzle_attachment.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_1        = { name = 'muzzle_attachment_1', label = 'Muzzle 1', weight = 1000, type = 'item', image = 'muzzle_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_2        = { name = 'muzzle_attachment_2', label = 'Muzzle 2', weight = 1000, type = 'item', image = 'muzzle_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_3        = { name = 'muzzle_attachment_3', label = 'Muzzle 3', weight = 1000, type = 'item', image = 'muzzle_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_4        = { name = 'muzzle_attachment_4', label = 'Muzzle 4', weight = 1000, type = 'item', image = 'muzzle_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_5        = { name = 'muzzle_attachment_5', label = 'Muzzle 5', weight = 1000, type = 'item', image = 'muzzle_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_6        = { name = 'muzzle_attachment_6', label = 'Muzzle 6', weight = 1000, type = 'item', image = 'muzzle_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_7        = { name = 'muzzle_attachment_7', label = 'Muzzle 7', weight = 1000, type = 'item', image = 'muzzle_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_8        = { name = 'muzzle_attachment_8', label = 'Muzzle 8', weight = 1000, type = 'item', image = 'muzzle_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_9        = { name = 'muzzle_attachment_9', label = 'Muzzle 9', weight = 1000, type = 'item', image = 'muzzle_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },
    muzzle_attachment_10       = { name = 'muzzle_attachment_10', label = 'Muzzle 10', weight = 1000, type = 'item', image = 'muzzle_attachment_10.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A muzzle for a weapon' },

    barrel_attachment_1        = { name = 'barrel_attachment_1', label = 'Barrel 1', weight = 1000, type = 'item', image = 'barrel_attachment_1.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_2        = { name = 'barrel_attachment_2', label = 'Barrel 2', weight = 1000, type = 'item', image = 'barrel_attachment_2.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_3        = { name = 'barrel_attachment_3', label = 'Barrel 3', weight = 1000, type = 'item', image = 'barrel_attachment_3.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_4        = { name = 'barrel_attachment_4', label = 'Barrel 4', weight = 1000, type = 'item', image = 'barrel_attachment_4.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_5        = { name = 'barrel_attachment_5', label = 'Barrel 5', weight = 1000, type = 'item', image = 'barrel_attachment_5.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_6        = { name = 'barrel_attachment_6', label = 'Barrel 6', weight = 1000, type = 'item', image = 'barrel_attachment_6.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_7        = { name = 'barrel_attachment_7', label = 'Barrel 7', weight = 1000, type = 'item', image = 'barrel_attachment_7.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_8        = { name = 'barrel_attachment_8', label = 'Barrel 8', weight = 1000, type = 'item', image = 'barrel_attachment_8.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_9        = { name = 'barrel_attachment_9', label = 'Barrel 9', weight = 1000, type = 'item', image = 'barrel_attachment_9.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_10       = { name = 'barrel_attachment_10', label = 'Barrel 10', weight = 1000, type = 'item', image = 'barrel_attachment_10.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_11       = { name = 'barrel_attachment_11', label = 'Barrel 11', weight = 1000, type = 'item', image = 'barrel_attachment_11.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_12       = { name = 'barrel_attachment_12', label = 'Barrel 12', weight = 1000, type = 'item', image = 'barrel_attachment_12.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_13       = { name = 'barrel_attachment_13', label = 'Barrel 13', weight = 1000, type = 'item', image = 'barrel_attachment_13.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_14       = { name = 'barrel_attachment_14', label = 'Barrel 14', weight = 1000, type = 'item', image = 'barrel_attachment_14.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    barrel_attachment_15       = { name = 'barrel_attachment_15', label = 'Barrel 15', weight = 1000, type = 'item', image = 'barrel_attachment_15.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'A barrel for a weapon' },
    `

let configlua = `Config = Config or {}
    Config.ReloadTime = math.random(4000, 6000)
    Config.DurabilityBlockedWeapons = {
        "weapon_stungun",
        "weapon_nightstick",
        "weapon_flashlight",
        "weapon_unarmed",
    }
    Config.AmmoTypes = {
        pistol_ammo = { ammoType = 'AMMO_PISTOL', amount = 30 },
        rifle_ammo = { ammoType = 'AMMO_RIFLE', amount = 30 },
        smg_ammo = { ammoType = 'AMMO_SMG', amount = 30 },
        shotgun_ammo = { ammoType = 'AMMO_SHOTGUN', amount = 10 },
        mg_ammo = { ammoType = 'AMMO_MG', amount = 30 },
        snp_ammo = { ammoType = 'AMMO_SNIPER', amount = 10 },
        emp_ammo = { ammoType = 'AMMO_EMPLAUNCHER', amount = 10 },
    }
    Config.Throwables = {
        "ball",
        "bzgas",
        "flare",
        "grenade",
        "molotov",
        "pipebomb",
        "proxmine",
        "smokegrenade",
        "snowball",
        "stickybomb",
    }
    Config.WeapDraw = {
        variants = { 130, 122, 3, 6, 8 },
        weapons = {
            --"WEAPON_STUNGUN",
            "WEAPON_PISTOL",
            "WEAPON_PISTOL_MK2",
            "WEAPON_COMBATPISTOL",
            "WEAPON_APPISTOL",
            "WEAPON_PISTOL50",
            "WEAPON_REVOLVER",
            "WEAPON_SNSPISTOL",
            "WEAPON_HEAVYPISTOL",
            "WEAPON_VINTAGEPISTOL"
        }
    }
    Config.DurabilityMultiplier = {
        -- Melee
        -- weapon_unarmed 				 = 0.15,
        weapon_dagger                = 0.15,
        weapon_bat                   = 0.15,
        weapon_bottle                = 0.15,
        weapon_crowbar               = 0.15,
        weapon_candycane             = 0.15,
        -- weapon_flashlight 			 = 0.15,
        weapon_golfclub              = 0.15,
        weapon_hammer                = 0.15,
        weapon_hatchet               = 0.15,
        weapon_knuckle               = 0.15,
        weapon_knife                 = 0.15,
        weapon_machete               = 0.15,
        weapon_switchblade           = 0.15,
        -- weapon_nightstick 			 = 0.15,
        weapon_wrench                = 0.15,
        weapon_battleaxe             = 0.15,
        weapon_poolcue               = 0.15,
        weapon_briefcase             = 0.15,
        weapon_briefcase_02          = 0.15,
        weapon_garbagebag            = 0.15,
        weapon_handcuffs             = 0.15,
        weapon_bread                 = 0.15,
        weapon_stone_hatchet         = 0.15,
        -- Handguns
        weapon_pistol                = 0.15,
        weapon_pistol_mk2            = 0.15,
        weapon_combatpistol          = 0.15,
        weapon_appistol              = 0.15,
        -- weapon_stungun 				 = 0.15,
        -- weapon_stungun_mp 				 = 0.15,
        weapon_pistol50              = 0.15,
        weapon_snspistol             = 0.15,
        weapon_heavypistol           = 0.15,
        weapon_vintagepistol         = 0.15,
        weapon_flaregun              = 0.15,
        weapon_marksmanpistol        = 0.15,
        weapon_revolver              = 0.15,
        weapon_revolver_mk2          = 0.15,
        weapon_doubleaction          = 0.15,
        weapon_snspistol_mk2         = 0.15,
        weapon_raypistol             = 0.15,
        weapon_ceramicpistol         = 0.15,
        weapon_navyrevolver          = 0.15,
        weapon_gadgetpistol          = 0.15,
        weapon_pistolxm3             = 0.15,
        -- Submachine Guns
        weapon_microsmg              = 0.15,
        weapon_smg                   = 0.15,
        weapon_smg_mk2               = 0.15,
        weapon_assaultsmg            = 0.15,
        weapon_combatpdw             = 0.15,
        weapon_machinepistol         = 0.15,
        weapon_minismg               = 0.15,
        weapon_raycarbine            = 0.15,
        -- Shotguns
        weapon_pumpshotgun           = 0.15,
        weapon_sawnoffshotgun        = 0.15,
        weapon_assaultshotgun        = 0.15,
        weapon_bullpupshotgun        = 0.15,
        weapon_musket                = 0.15,
        weapon_heavyshotgun          = 0.15,
        weapon_dbshotgun             = 0.15,
        weapon_autoshotgun           = 0.15,
        weapon_pumpshotgun_mk2       = 0.15,
        weapon_combatshotgun         = 0.15,
        -- Assault Rifles
        weapon_assaultrifle          = 0.15,
        weapon_assaultrifle_mk2      = 0.15,
        weapon_carbinerifle          = 0.15,
        weapon_carbinerifle_mk2      = 0.15,
        weapon_advancedrifle         = 0.15,
        weapon_specialcarbine        = 0.15,
        weapon_bullpuprifle          = 0.15,
        weapon_compactrifle          = 0.15,
        weapon_specialcarbine_mk2    = 0.15,
        weapon_bullpuprifle_mk2      = 0.15,
        weapon_militaryrifle         = 0.15,
        weapon_heavyrifle            = 0.15,
        -- Light Machine Guns
        weapon_mg                    = 0.15,
        weapon_combatmg              = 0.15,
        weapon_gusenberg             = 0.15,
        weapon_combatmg_mk2          = 0.15,
        -- Sniper Rifles
        weapon_sniperrifle           = 0.15,
        weapon_heavysniper           = 0.15,
        weapon_marksmanrifle         = 0.15,
        weapon_remotesniper          = 0.15,
        weapon_heavysniper_mk2       = 0.15,
        weapon_marksmanrifle_mk2     = 0.15,
        -- Heavy Weapons
        weapon_rpg                   = 0.15,
        weapon_grenadelauncher       = 0.15,
        weapon_grenadelauncher_smoke = 0.15,
        weapon_emplauncher           = 0.15,
        weapon_minigun               = 0.15,
        weapon_firework              = 0.15,
        weapon_railgun               = 0.15,
        weapon_hominglauncher        = 0.15,
        weapon_compactlauncher       = 0.15,
        weapon_rayminigun            = 0.15,
        weapon_railgunxm3            = 0.15,
        -- Throwables
        weapon_grenade               = 0.15,
        weapon_bzgas                 = 0.15,
        weapon_molotov               = 0.15,
        weapon_stickybomb            = 0.15,
        weapon_proxmine              = 0.15,
        weapon_snowball              = 0.15,
        weapon_pipebomb              = 0.15,
        weapon_ball                  = 0.15,
        weapon_smokegrenade          = 0.15,
        weapon_flare                 = 0.15,
        -- Miscellaneous
        weapon_petrolcan             = 0.15,
        weapon_fireextinguisher      = 0.15,
        weapon_hazardcan             = 0.15,
        weapon_fertilizercan         = 0.15,
    }
    Config.WeaponRepairPoints = {
        { coords = vector3(964.02, -1267.41, 34.97), IsRepairing = false, RepairingData = {} }
    }
    Config.WeaponRepairCosts = {
        pistol = 1000,
        smg = 3000,
        mg = 4000,
        rifle = 5000,
        sniper = 7000,
        shotgun = 6000
    }
    WeaponAttachments = {
        clip_attachment = {
            weapon_pistol = "COMPONENT_PISTOL_CLIP_02",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CLIP_02",
            weapon_combatpistol = "COMPONENT_COMBATPISTOL_CLIP_02",
            weapon_appistol = "COMPONENT_APPISTOL_CLIP_02",
            weapon_pistol50 = "COMPONENT_PISTOL50_CLIP_02",
            weapon_snspistol = "COMPONENT_SNSPISTOL_CLIP_02",
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CLIP_02",
            weapon_heavypistol = "COMPONENT_HEAVYPISTOL_CLIP_02",
            weapon_vintagepistol = "COMPONENT_VINTAGEPISTOL_CLIP_02",
            weapon_ceramicpistol = "COMPONENT_CERAMICPISTOL_CLIP_02",
            weapon_microsmg = "COMPONENT_MICROSMG_CLIP_02",
            weapon_smg = "COMPONENT_SMG_CLIP_02",
            weapon_assaultsmg = "COMPONENT_ASSAULTSMG_CLIP_02",
            weapon_minismg = "COMPONENT_MINISMG_CLIP_02",
            weapon_smg_mk2 = "COMPONENT_SMG_MK2_CLIP_02",
            weapon_machinepistol = "COMPONENT_MACHINEPISTOL_CLIP_02",
            weapon_combatpdw = "COMPONENT_COMBATPDW_CLIP_02",
            weapon_assaultshotgun = "COMPONENT_ASSAULTSHOTGUN_CLIP_02",
            weapon_heavyshotgun = "COMPONENT_HEAVYSHOTGUN_CLIP_02",
            weapon_assaultrifle = "COMPONENT_ASSAULTRIFLE_CLIP_02",
            weapon_carbinerifle = "COMPONENT_CARBINERIFLE_CLIP_02",
            weapon_advancedrifle = "COMPONENT_ADVANCEDRIFLE_CLIP_02",
            weapon_specialcarbine = "COMPONENT_SPECIALCARBINE_CLIP_02",
            weapon_bullpuprifle = "COMPONENT_BULLPUPRIFLE_CLIP_02",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_02",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CLIP_02",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_02",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CLIP_02",
            weapon_compactrifle = "COMPONENT_COMPACTRIFLE_CLIP_02",
            weapon_militaryrifle = "COMPONENT_MILITARYRIFLE_CLIP_02",
            weapon_heavyrifle = "COMPONENT_HEAVYRIFLE_CLIP_02",
            weapon_mg = "COMPONENT_MG_CLIP_02",
            weapon_combatmg = "COMPONENT_COMBATMG_CLIP_02",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CLIP_02",
            weapon_gusenberg = "COMPONENT_GUSENBERG_CLIP_02",
            weapon_marksmanrifle = "COMPONENT_MARKSMANRIFLE_CLIP_02",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_02",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CLIP_02",
        },
        drum_attachment = {
            weapon_smg = "COMPONENT_SMG_CLIP_03",
            weapon_machinepistol = "COMPONENT_MACHINEPISTOL_CLIP_03",
            weapon_combatpdw = "COMPONENT_COMBATPDW_CLIP_03",
            weapon_heavyshotgun = "COMPONENT_HEAVYSHOTGUN_CLIP_03",
            weapon_assaultrifle = "COMPONENT_ASSAULTRIFLE_CLIP_03",
            weapon_carbinerifle = "COMPONENT_CARBINERIFLE_CLIP_03",
            weapon_specialcarbine = "COMPONENT_SPECIALCARBINE_CLIP_03",
            weapon_compactrifle = "COMPONENT_COMPACTRIFLE_CLIP_03",
        },
        flashlight_attachment = {
            weapon_pistol = "COMPONENT_AT_PI_FLSH",
            weapon_pistol_mk2 = "COMPONENT_AT_PI_FLSH_02",
            weapon_combatpistol = "COMPONENT_AT_PI_FLSH",
            weapon_appistol = "COMPONENT_AT_PI_FLSH",
            weapon_pistol50 = "COMPONENT_AT_PI_FLSH",
            weapon_heavypistol = "COMPONENT_AT_PI_FLSH",
            weapon_snspistol_mk2 = "COMPONENT_AT_PI_FLSH_03",
            weapon_revolver_mk2 = "COMPONENT_AT_PI_FLSH",
            weapon_microsmg = "COMPONENT_AT_PI_FLSH",
            weapon_smg = "COMPONENT_AT_AR_FLSH",
            weapon_assaultsmg = "COMPONENT_AT_AR_FLSH",
            weapon_smg_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_combatpdw = "COMPONENT_AT_AR_FLSH",
            weapon_pumpshotgun = "COMPONENT_AT_AR_FLSH",
            weapon_assaultshotgun = "COMPONENT_AT_AR_FLSH",
            weapon_bullpupshotgun = "COMPONENT_AT_AR_FLSH",
            weapon_pumpshotgun_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_heavyshotgun = "COMPONENT_AT_AR_FLSH",
            weapon_combatshotgun = "COMPONENT_AT_AR_FLSH",
            weapon_assaultrifle = "COMPONENT_AT_AR_FLSH",
            weapon_carbinerifle = "COMPONENT_AT_AR_FLSH",
            weapon_advancedrifle = "COMPONENT_AT_AR_FLSH",
            weapon_specialcarbine = "COMPONENT_AT_AR_FLSH",
            weapon_bullpuprifle = "COMPONENT_AT_AR_FLSH",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_militaryrifle = "COMPONENT_AT_AR_FLSH",
            weapon_heavyrifle = "COMPONENT_AT_AR_FLSH",
            weapon_marksmanrifle = "COMPONENT_AT_AR_FLSH",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_grenadelauncher = "COMPONENT_AT_AR_FLSH",
        },
        suppressor_attachment = {
            weapon_pistol = "COMPONENT_AT_PI_SUPP_02",
            weapon_pistol_mk2 = "COMPONENT_AT_PI_SUPP_02",
            weapon_combatpistol = "COMPONENT_AT_PI_SUPP",
            weapon_appistol = "COMPONENT_AT_PI_SUPP",
            weapon_pistol50 = "COMPONENT_AT_AR_SUPP_02",
            weapon_heavypistol = "COMPONENT_AT_PI_SUPP",
            weapon_snspistol_mk2 = "COMPONENT_AT_PI_SUPP_02",
            weapon_vintagepistol = "COMPONENT_AT_PI_SUPP",
            weapon_ceramicpistol = "COMPONENT_CERAMICPISTOL_SUPP",
            weapon_microsmg = "COMPONENT_AT_AR_SUPP_02",
            weapon_smg = "COMPONENT_AT_PI_SUPP",
            weapon_assaultsmg = "COMPONENT_AT_AR_SUPP_02",
            weapon_smg_mk2 = "COMPONENT_AT_PI_SUPP",
            weapon_machinepistol = "COMPONENT_AT_PI_SUPP",
            weapon_pumpshotgun = "COMPONENT_AT_SR_SUPP",
            weapon_assaultshotgun = "COMPONENT_AT_AR_SUPP",
            weapon_bullpupshotgun = "COMPONENT_AT_AR_SUPP_02",
            weapon_pumpshotgun_mk2 = "COMPONENT_AT_SR_SUPP_03",
            weapon_heavyshotgun = "COMPONENT_AT_AR_SUPP_02",
            weapon_combatshotgun = "COMPONENT_AT_AR_SUPP",
            weapon_assaultrifle = "COMPONENT_AT_AR_SUPP_02",
            weapon_carbinerifle = "COMPONENT_AT_AR_SUPP",
            weapon_advancedrifle = "COMPONENT_AT_AR_SUPP",
            weapon_specialcarbine = "COMPONENT_AT_AR_SUPP_02",
            weapon_bullpuprifle = "COMPONENT_AT_AR_SUPP",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_AR_SUPP",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_AR_SUPP_02",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_AR_SUPP_02",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_AR_SUPP",
            weapon_militaryrifle = "COMPONENT_AT_AR_SUPP",
            weapon_heavyrifle = "COMPONENT_AT_AR_SUPP",
            weapon_sniperrifle = "COMPONENT_AT_AR_SUPP_02",
            weapon_marksmanrifle = "COMPONENT_AT_AR_SUPP",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_AR_SUPP",
            weapon_heavysniper_mk2 = "COMPONENT_AT_SR_SUPP_03",
        },
        smallscope_attachment = {
            weapon_pistol_mk2 = "COMPONENT_AT_PI_RAIL",
            weapon_snspistol_mk2 = "COMPONENT_AT_PI_RAIL_02",
            weapon_microsmg = "COMPONENT_AT_SCOPE_MACRO",
            weapon_smg = "COMPONENT_AT_SCOPE_MACRO_02",
            weapon_assaultsmg = "COMPONENT_AT_SCOPE_MACRO",
            weapon_combatpdw = "COMPONENT_AT_SCOPE_SMALL",
            weapon_assaultrifle = "COMPONENT_AT_SCOPE_MACRO",
            weapon_bullpuprifle = "COMPONENT_AT_SCOPE_SMALL",
            weapon_militaryrifle = "COMPONENT_AT_SCOPE_SMALL",
            weapon_mg = "COMPONENT_AT_SCOPE_SMALL_02",
            weapon_revolver_mk2 = "COMPONENT_AT_SCOPE_MACRO_MK2",
            weapon_smg_mk2 = "COMPONENT_AT_SCOPE_MACRO_02_SMG_MK2",
            weapon_pumpshotgun_mk2 = "COMPONENT_AT_SCOPE_MACRO_MK2",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_SCOPE_MACRO_02_MK2",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_SCOPE_MACRO_MK2",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_SCOPE_MACRO_MK2",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_SCOPE_MACRO_MK2",
            weapon_advancedrifle = "COMPONENT_AT_SCOPE_SMALL",
            weapon_grenadelauncher = "COMPONENT_AT_SCOPE_SMALL",
        },
        medscope_attachment = {
            weapon_smg_mk2 = "COMPONENT_AT_SCOPE_SMALL_SMG_MK2",
            weapon_pumpshotgun_mk2 = "COMPONENT_AT_SCOPE_SMALL_MK2",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_SCOPE_SMALL_MK2",
            weapon_combatmg_mk2 = "COMPONENT_AT_SCOPE_SMALL_MK2",
            weapon_carbinerifle = "COMPONENT_AT_SCOPE_MEDIUM",
            weapon_specialcarbine = "COMPONENT_AT_SCOPE_MEDIUM",
            weapon_combatmg = "COMPONENT_AT_SCOPE_MEDIUM",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_SCOPE_MEDIUM_MK2",
        },
        largescope_attachment = {
            weapon_sniperrifle = "COMPONENT_AT_SCOPE_LARGE",
            weapon_marksmanrifle = "COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM",
            weapon_heavysniper_mk2 = "COMPONENT_AT_SCOPE_LARGE_MK2",
        },
        holoscope_attachment = {
            weapon_heavyrevolver_mk2 = "COMPONENT_AT_SIGHTS",
            weapon_smg_mk2 = "COMPONENT_AT_SIGHTS",
            weapon_pumpshotgun_mk2 = "COMPONENT_AT_SIGHTS",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_SIGHTS",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_SIGHTS",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_SIGHTS",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_SIGHTS",
            weapon_combatmg_mk2 = "COMPONENT_AT_SIGHTS",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_SIGHTS",
        },
        advscope_attachment = {
            weapon_sniperrifle = "COMPONENT_AT_SCOPE_MAX",
            weapon_heavysniper = "COMPONENT_AT_SCOPE_MAX",
            weapon_heavysniper_mk2 = "COMPONENT_AT_SCOPE_MAX",
        },
        nvscope_attachment = {
            weapon_heavysniper_mk2 = "COMPONENT_AT_SCOPE_NV",
        },
        thermalscope_attachment = {
            weapon_heavysniper_mk2 = "COMPONENT_AT_SCOPE_THERMAL",
        },
        flat_muzzle_brake = {
            weapon_smg_mk2 = "COMPONENT_AT_MUZZLE_01",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_MUZZLE_01",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_MUZZLE_01",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_MUZZLE_01",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_MUZZLE_01",
            weapon_combatmg_mk2 = "COMPONENT_AT_MUZZLE_01",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_MUZZLE_01",
        },
        tactical_muzzle_brake = {
            weapon_smg_mk2 = "COMPONENT_AT_MUZZLE_02",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_MUZZLE_02",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_MUZZLE_02",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_MUZZLE_02",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_MUZZLE_02",
            weapon_combatmg_mk2 = "COMPONENT_AT_MUZZLE_02",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_MUZZLE_02",
        },
        fat_end_muzzle_brake = {
            weapon_smg_mk2 = "COMPONENT_AT_MUZZLE_03",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_MUZZLE_03",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_MUZZLE_03",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_MUZZLE_03",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_MUZZLE_03",
            weapon_combatmg_mk2 = "COMPONENT_AT_MUZZLE_03",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_MUZZLE_03",
        },
        precision_muzzle_brake = {
            weapon_smg_mk2 = "COMPONENT_AT_MUZZLE_04",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_MUZZLE_04",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_MUZZLE_04",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_MUZZLE_04",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_MUZZLE_04",
            weapon_combatmg_mk2 = "COMPONENT_AT_MUZZLE_04",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_MUZZLE_04",
        },
        heavy_duty_muzzle_brake = {
            weapon_smg_mk2 = "COMPONENT_AT_MUZZLE_05",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_MUZZLE_05",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_MUZZLE_05",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_MUZZLE_05",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_MUZZLE_05",
            weapon_combatmg_mk2 = "COMPONENT_AT_MUZZLE_05",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_MUZZLE_05",
        },
        slanted_muzzle_brake = {
            weapon_smg_mk2 = "COMPONENT_AT_MUZZLE_06",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_MUZZLE_06",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_MUZZLE_06",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_MUZZLE_06",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_MUZZLE_06",
            weapon_combatmg_mk2 = "COMPONENT_AT_MUZZLE_06",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_MUZZLE_06",
        },
        split_end_muzzle_brake = {
            weapon_smg_mk2 = "COMPONENT_AT_MUZZLE_07",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_MUZZLE_07",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_MUZZLE_07",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_MUZZLE_07",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_MUZZLE_07",
            weapon_combatmg_mk2 = "COMPONENT_AT_MUZZLE_07",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_MUZZLE_07",
        },
        squared_muzzle_brake = {
            weapon_pumpshotgun_mk2 = "COMPONENT_AT_MUZZLE_08",
            weapon_heavysniper_mk2 = "COMPONENT_AT_MUZZLE_08"
        },
        bellend_muzzle_brake = {
            weapon_heavysniper_mk2 = "COMPONENT_AT_MUZZLE_09"
        },
        barrel_attachment = {
            weapon_smg_mk2 = "COMPONENT_AT_SB_BARREL_02",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_BP_BARREL_02",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_SC_BARREL_02",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_AR_BARREL_02",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_CR_BARREL_02",
            weapon_combatmg_mk2 = "COMPONENT_AT_MG_BARREL_02",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_MRFL_BARREL_02",
            weapon_heavysniper_mk2 = "COMPONENT_AT_SR_BARREL_02",
        },
        grip_attachment = {
            weapon_combatpdw = "COMPONENT_AT_AR_AFGRIP",
            weapon_assaultshotgun = "COMPONENT_AT_AR_AFGRIP",
            weapon_bullpupshotgun = "COMPONENT_AT_AR_AFGRIP",
            weapon_heavyshotgun = "COMPONENT_AT_AR_AFGRIP",
            weapon_assaultrifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_carbinerifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_advancedrifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_specialcarbine = "COMPONENT_AT_AR_AFGRIP",
            weapon_bullpuprifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_heavyrifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_combatmg = "COMPONENT_AT_AR_AFGRIP",
            weapon_combatmg_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_marksmanrifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_grenadelauncher = "COMPONENT_AT_AR_AFGRIP",
        },
        comp_attachment = {
            weapon_pistol_mk2 = "COMPONENT_AT_PI_COMP",
            weapon_snspistol_mk2 = "COMPONENT_AT_PI_COMP_02",
            weapon_revolver_mk2 = "COMPONENT_AT_PI_COMP_03",
        },
        luxuryfinish_attachment = {
            weapon_pistol = "COMPONENT_PISTOL_VARMOD_LUXE",
            weapon_combatpistol = "COMPONENT_COMBATPISTOL_VARMOD_LOWRIDER",
            weapon_appistol = "COMPONENT_APPISTOL_VARMOD_LUXE",
            weapon_pistol50 = "COMPONENT_PISTOL50_VARMOD_LUXE",
            weapon_revolver = "COMPONENT_REVOLVER_VARMOD_GOON",
            weapon_snspistol = "COMPONENT_SNSPISTOL_VARMOD_LOWRIDER",
            weapon_heavypistol = "COMPONENT_HEAVYPISTOL_VARMOD_LUXE",
            weapon_smg = "COMPONENT_SMG_VARMOD_LUXE",
            weapon_assaultsmg = "COMPONENT_ASSAULTSMG_VARMOD_LOWRIDER",
            weapon_microsmg = "COMPONENT_MICROSMG_VARMOD_LUXE",
            weapon_pumpshotgun = "COMPONENT_PUMPSHOTGUN_VARMOD_LOWRIDER",
            weapon_sawnoffshotgun = "COMPONENT_SAWNOFFSHOTGUN_VARMOD_LUXE",
            weapon_assaultrifle = "COMPONENT_ASSAULTRIFLE_VARMOD_LUXE",
            weapon_carbinerifle = "COMPONENT_CARBINERIFLE_VARMOD_LUXE",
            weapon_advancedrifle = "COMPONENT_ADVANCEDRIFLE_VARMOD_LUXE",
            weapon_specialcarbine = "COMPONENT_SPECIALCARBINE_VARMOD_LOWRIDER",
            weapon_bullpuprifle = "COMPONENT_BULLPUPRIFLE_VARMOD_LOW",
            weapon_heavyrifle = "COMPONENT_BULLPUPRIFLE_VARMOD_LOW",
            weapon_mg = "COMPONENT_MG_VARMOD_LOWRIDER",
            weapon_combatmg = "COMPONENT_COMBATMG_VARMOD_LOWRIDER",
            weapon_sniperrifle = "COMPONENT_SNIPERRIFLE_VARMOD_LUXE",
            weapon_marksmanrifle = "COMPONENT_MARKSMANRIFLE_VARMOD_LUXE",
        },
        digicamo_attachment = {
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO",
        },
        brushcamo_attachment = {
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO_02",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO_02",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_02",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_02",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_02",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO_02",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_02",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO_02",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO_02",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_02",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO_02",
        },
        woodcamo_attachment = {
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO_03",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO_03",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_03",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_03",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_03",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO_03",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_03",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO_03",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO_03",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_03",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO_03",
        },
        skullcamo_attachment = {
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO_04",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO_04",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_04",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_04",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_04",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO_04",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_04",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO_04",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO_04",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_04",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO_04",
        },
        sessantacamo_attachment = {
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO_05",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO_05",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_05",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_05",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_05",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO_05",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_05",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO_05",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO_05",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_05",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO_05",
        },
        perseuscamo_attachment = {
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO_06",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO_06",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_06",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_06",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_06",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO_06",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_06",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO_06",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO_06",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_06",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO_06",
        },
        leopardcamo_attachment = {
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO_07",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO_07",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_07",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_07",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_07",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO_07",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_07",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO_07",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO_07",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_07",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO_07",
        },
        zebracamo_attachment = {
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO_08",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO_08",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_08",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_08",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_08",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO_08",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_08",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO_08",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO_08",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_08",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO_08",
        },
        geocamo_attachment = {
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO_09",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO_09",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_09",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_09",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_09",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO_09",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_09",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO_09",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO_09",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_09",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO_09",
        },
        boomcamo_attachment = {
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO_10",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO_10",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_10",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_10",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_10",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO_10",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_10",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO_10",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO_10",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_10",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO_10",
        },
        patriotcamo_attachment = {
            weapon_heavyrifle_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_IND_01",
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CAMO_IND_01",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CAMO_IND_01",
            weapon_smg_mk2 = "COMPONENT_REVOLVER_MK2_CAMO_IND_01",
            weapon_pumpshotgun_mk2 = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_IND_01",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_IND_01",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CAMO_IND_01",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_IND_01",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CAMO_IND_01",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CAMO_IND_01",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_IND_01",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CAMO_IND_01",  
        },
        cylinder_attatchment = {
        },

        cylinder_attatchment_1 = {
        },

        cylinder_attatchment_2 = {
        },

        -- MISC
        misc_attatchment = {
        },

        misc_attatchment_1 = {
        },

        misc_attatchment_2 = {
        },

        misc_attatchment_3 = {
        },

        misc_attatchment_4 = {
        },

        -- Tube
        tube_attachment = {
        },

        tube_attachment_1 = {
        },

        tube_attachment_2 = {
        },

        tube_attachment_3 = {
        },

        -- Mags
        clip_attachment_1 = {
        },

        clip_attachment_2 = {
        },

        clip_attachment_3 = {
        },

        clip_attachment_4 = {
        },

        clip_attachment_5 = {
        },

        clip_attachment_6 = {
        },

        clip_attachment_7 = {
        },

        clip_attachment_8 = {
        },

        clip_attachment_9 = {
        },

        -- Flashlights

        flashlight_attachment_1 = {
        },

        flashlight_attachment_2 = {
        },

        flashlight_attachment_3 = {
        },

        flashlight_attachment_4 = {
        },

        flashlight_attachment_5 = {
        },

        flashlight_attachment_6 = {
        },

        flashlight_attachment_7 = {
        },

        flashlight_attachment_8 = {
        },

        flashlight_attachment_9 = {
        },

        -- Grips

        grip_attachment_1 = {
        },

        grip_attachment_2 = {
        },

        grip_attachment_3 = {
        },

        grip_attachment_4 = {
        },

        grip_attachment_5 = {
        },

        grip_attachment_6 = {
        },

        grip_attachment_7 = {
        },

        grip_attachment_8 = {
        },


        -- Frames
        frame_attachment = {
        },

        frame_attachment_1 = {
        },

        frame_attachment_2 = {
        },

        frame_attachment_3 = {
        },

        frame_attachment_4 = {
        },

        frame_attachment_5 = {
        },

        frame_attachment_6 = {
        },

        frame_attachment_7 = {
        },

        frame_attachment_8 = {
        },

        frame_attachment_9 = {
        },

        -- Scopes
        scope_attachment_0 = {
        },

        scope_attachment_1 = {
        },

        scope_attachment_2 = {
        },

        scope_attachment_3 = {
        },

        scope_attachment_4 = {
        },

        scope_attachment_5 = {

        },

        scope_attachment_6 = {
        },

        scope_attachment_7 = {
        },

        scope_attachment_8 = {
        },

        scope_attachment_9 = {
        },

        scope_attachment_10 = {
        },

        -- Stocks
        stock_attachment = {
        },

        stock_attachment_1 = {
        },

        stock_attachment_2 = {
        },

        stock_attachment_3 = {
        },

        stock_attachment_4 = {
        },

        stock_attachment_5 = {
        },

        stock_attachment_6 = {
        },

        stock_attachment_7 = {
        },

        stock_attachment_8 = {
        },

        stock_attachment_9 = {
        },

        stock_attachment_10 = {
        },

        -- Suppressors

        suppressor_attachment_1 = {
        },

        suppressor_attachment_2 = {
        },

        suppressor_attachment_3 = {
        },

        suppressor_attachment_4 = {
        },

        suppressor_attachment_5 = {
        },

        suppressor_attachment_6 = {
        },

        suppressor_attachment_7 = {
        },

        suppressor_attachment_8 = {
        },

        suppressor_attachment_9 = {
        },

        -- Slides
        slide_attachment = {
        },

        slide_attachment_1 = {
        },

        slide_attachment_2 = {
        },

        slide_attachment_3 = {
        },

        slide_attachment_4 = {
        },

        slide_attachment_5 = {
        },

        slide_attachment_6 = {
        },

        slide_attachment_7 = {
        },

        slide_attachment_8 = {
        },

        slide_attachment_9 = {
        },

        -- Barrels

        barrel_attachment_1 = {
        },

        barrel_attachment_2 = {
        },

        barrel_attachment_3 = {
        },

        barrel_attachment_4 = {
        },

        barrel_attachment_5 = {
        },

        barrel_attachment_6 = {
        },

        barrel_attachment_7 = {
        },

        barrel_attachment_8 = {
        },

        barrel_attachment_9 = {
        },

        barrel_attachment_10 = {
        },

        barrel_attachment_11 = {
        },

        barrel_attachment_12 = {
        },

        barrel_attachment_13 = {
        },

        barrel_attachment_14 = {
        },

        barrel_attachment_15 = {
        },

        -- Muzzles
        muzzle_attachment = {
        },

        muzzle_attachment_1 = {
        },

        muzzle_attachment_2 = {
        },

        muzzle_attachment_3 = {
        },

        muzzle_attachment_4 = {
        },

        muzzle_attachment_5 = {
        },

        muzzle_attachment_6 = {
        },

        muzzle_attachment_7 = {
        },

        muzzle_attachment_8 = {
        },

        muzzle_attachment_9 = {
        },

        muzzle_attachment_10 = {
        },

        -- Handguards
        handguard_attachment = {
        },

        handguard_attachment_1 = {
        },

        handguard_attachment_2 = {
        },

        handguard_attachment_3 = {
        },

        handguard_attachment_4 = {
        },

        handguard_attachment_5 = {
        },

        handguard_attachment_6 = {
        },

        handguard_attachment_7 = {
        },

        handguard_attachment_8 = {
        },

        handguard_attachment_9 = {
        },

        -- Lasers
        laser_attachment = {
        },

        laser_attachment_1 = {
        },

        laser_attachment_2 = {
        },

        laser_attachment_3 = {
        },

        laser_attachment_4 = {
        },

        laser_attachment_5 = {
        },

        laser_attachment_6 = {
        },
    }
    local function getConfigWeaponAttachments()
        return WeaponAttachments
    end
    exports("getConfigWeaponAttachments", getConfigWeaponAttachments)
    `

let configlua_attachments = `Config = Config or {}
    Config.DurabilityMultiplier = {
    }

    WeaponAttachments = {
        clip_attachment = {
            weapon_pistol = "COMPONENT_PISTOL_CLIP_02",
            weapon_pistol_mk2 = "COMPONENT_PISTOL_MK2_CLIP_02",
            weapon_combatpistol = "COMPONENT_COMBATPISTOL_CLIP_02",
            weapon_appistol = "COMPONENT_APPISTOL_CLIP_02",
            weapon_pistol50 = "COMPONENT_PISTOL50_CLIP_02",
            weapon_snspistol = "COMPONENT_SNSPISTOL_CLIP_02",
            weapon_snspistol_mk2 = "COMPONENT_SNSPISTOL_MK2_CLIP_02",
            weapon_heavypistol = "COMPONENT_HEAVYPISTOL_CLIP_02",
            weapon_vintagepistol = "COMPONENT_VINTAGEPISTOL_CLIP_02",
            weapon_ceramicpistol = "COMPONENT_CERAMICPISTOL_CLIP_02",
            weapon_microsmg = "COMPONENT_MICROSMG_CLIP_02",
            weapon_smg = "COMPONENT_SMG_CLIP_02",
            weapon_assaultsmg = "COMPONENT_ASSAULTSMG_CLIP_02",
            weapon_minismg = "COMPONENT_MINISMG_CLIP_02",
            weapon_smg_mk2 = "COMPONENT_SMG_MK2_CLIP_02",
            weapon_machinepistol = "COMPONENT_MACHINEPISTOL_CLIP_02",
            weapon_combatpdw = "COMPONENT_COMBATPDW_CLIP_02",
            weapon_assaultshotgun = "COMPONENT_ASSAULTSHOTGUN_CLIP_02",
            weapon_heavyshotgun = "COMPONENT_HEAVYSHOTGUN_CLIP_02",
            weapon_assaultrifle = "COMPONENT_ASSAULTRIFLE_CLIP_02",
            weapon_carbinerifle = "COMPONENT_CARBINERIFLE_CLIP_02",
            weapon_advancedrifle = "COMPONENT_ADVANCEDRIFLE_CLIP_02",
            weapon_specialcarbine = "COMPONENT_SPECIALCARBINE_CLIP_02",
            weapon_bullpuprifle = "COMPONENT_BULLPUPRIFLE_CLIP_02",
            weapon_bullpuprifle_mk2 = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_02",
            weapon_specialcarbine_mk2 = "COMPONENT_SPECIALCARBINE_MK2_CLIP_02",
            weapon_assaultrifle_mk2 = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_02",
            weapon_carbinerifle_mk2 = "COMPONENT_CARBINERIFLE_MK2_CLIP_02",
            weapon_compactrifle = "COMPONENT_COMPACTRIFLE_CLIP_02",
            weapon_militaryrifle = "COMPONENT_MILITARYRIFLE_CLIP_02",
            weapon_heavyrifle = "COMPONENT_HEAVYRIFLE_CLIP_02",
            weapon_mg = "COMPONENT_MG_CLIP_02",
            weapon_combatmg = "COMPONENT_COMBATMG_CLIP_02",
            weapon_combatmg_mk2 = "COMPONENT_COMBATMG_MK2_CLIP_02",
            weapon_gusenberg = "COMPONENT_GUSENBERG_CLIP_02",
            weapon_marksmanrifle = "COMPONENT_MARKSMANRIFLE_CLIP_02",
            weapon_marksmanrifle_mk2 = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_02",
            weapon_heavysniper_mk2 = "COMPONENT_HEAVYSNIPER_MK2_CLIP_02",
        },
        drum_attachment = {
            weapon_smg = "COMPONENT_SMG_CLIP_03",
            weapon_machinepistol = "COMPONENT_MACHINEPISTOL_CLIP_03",
            weapon_combatpdw = "COMPONENT_COMBATPDW_CLIP_03",
            weapon_heavyshotgun = "COMPONENT_HEAVYSHOTGUN_CLIP_03",
            weapon_assaultrifle = "COMPONENT_ASSAULTRIFLE_CLIP_03",
            weapon_carbinerifle = "COMPONENT_CARBINERIFLE_CLIP_03",
            weapon_specialcarbine = "COMPONENT_SPECIALCARBINE_CLIP_03",
            weapon_compactrifle = "COMPONENT_COMPACTRIFLE_CLIP_03",
        },
        flashlight_attachment = {
            weapon_pistol = "COMPONENT_AT_PI_FLSH",
            weapon_pistol_mk2 = "COMPONENT_AT_PI_FLSH_02",
            weapon_combatpistol = "COMPONENT_AT_PI_FLSH",
            weapon_appistol = "COMPONENT_AT_PI_FLSH",
            weapon_pistol50 = "COMPONENT_AT_PI_FLSH",
            weapon_heavypistol = "COMPONENT_AT_PI_FLSH",
            weapon_snspistol_mk2 = "COMPONENT_AT_PI_FLSH_03",
            weapon_revolver_mk2 = "COMPONENT_AT_PI_FLSH",
            weapon_microsmg = "COMPONENT_AT_PI_FLSH",
            weapon_smg = "COMPONENT_AT_AR_FLSH",
            weapon_assaultsmg = "COMPONENT_AT_AR_FLSH",
            weapon_smg_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_combatpdw = "COMPONENT_AT_AR_FLSH",
            weapon_pumpshotgun = "COMPONENT_AT_AR_FLSH",
            weapon_assaultshotgun = "COMPONENT_AT_AR_FLSH",
            weapon_bullpupshotgun = "COMPONENT_AT_AR_FLSH",
            weapon_pumpshotgun_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_heavyshotgun = "COMPONENT_AT_AR_FLSH",
            weapon_combatshotgun = "COMPONENT_AT_AR_FLSH",
            weapon_assaultrifle = "COMPONENT_AT_AR_FLSH",
            weapon_carbinerifle = "COMPONENT_AT_AR_FLSH",
            weapon_advancedrifle = "COMPONENT_AT_AR_FLSH",
            weapon_specialcarbine = "COMPONENT_AT_AR_FLSH",
            weapon_bullpuprifle = "COMPONENT_AT_AR_FLSH",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_militaryrifle = "COMPONENT_AT_AR_FLSH",
            weapon_heavyrifle = "COMPONENT_AT_AR_FLSH",
            weapon_marksmanrifle = "COMPONENT_AT_AR_FLSH",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_AR_FLSH",
            weapon_grenadelauncher = "COMPONENT_AT_AR_FLSH",
        },
        suppressor_attachment = {
            weapon_pistol = "COMPONENT_AT_PI_SUPP_02",
            weapon_pistol_mk2 = "COMPONENT_AT_PI_SUPP_02",
            weapon_combatpistol = "COMPONENT_AT_PI_SUPP",
            weapon_appistol = "COMPONENT_AT_PI_SUPP",
            weapon_pistol50 = "COMPONENT_AT_AR_SUPP_02",
            weapon_heavypistol = "COMPONENT_AT_PI_SUPP",
            weapon_snspistol_mk2 = "COMPONENT_AT_PI_SUPP_02",
            weapon_vintagepistol = "COMPONENT_AT_PI_SUPP",
            weapon_ceramicpistol = "COMPONENT_CERAMICPISTOL_SUPP",
            weapon_microsmg = "COMPONENT_AT_AR_SUPP_02",
            weapon_smg = "COMPONENT_AT_PI_SUPP",
            weapon_assaultsmg = "COMPONENT_AT_AR_SUPP_02",
            weapon_smg_mk2 = "COMPONENT_AT_PI_SUPP",
            weapon_machinepistol = "COMPONENT_AT_PI_SUPP",
            weapon_pumpshotgun = "COMPONENT_AT_SR_SUPP",
            weapon_assaultshotgun = "COMPONENT_AT_AR_SUPP",
            weapon_bullpupshotgun = "COMPONENT_AT_AR_SUPP_02",
            weapon_pumpshotgun_mk2 = "COMPONENT_AT_SR_SUPP_03",
            weapon_heavyshotgun = "COMPONENT_AT_AR_SUPP_02",
            weapon_combatshotgun = "COMPONENT_AT_AR_SUPP",
            weapon_assaultrifle = "COMPONENT_AT_AR_SUPP_02",
            weapon_carbinerifle = "COMPONENT_AT_AR_SUPP",
            weapon_advancedrifle = "COMPONENT_AT_AR_SUPP",
            weapon_specialcarbine = "COMPONENT_AT_AR_SUPP_02",
            weapon_bullpuprifle = "COMPONENT_AT_AR_SUPP",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_AR_SUPP",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_AR_SUPP_02",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_AR_SUPP_02",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_AR_SUPP",
            weapon_militaryrifle = "COMPONENT_AT_AR_SUPP",
            weapon_heavyrifle = "COMPONENT_AT_AR_SUPP",
            weapon_sniperrifle = "COMPONENT_AT_AR_SUPP_02",
            weapon_marksmanrifle = "COMPONENT_AT_AR_SUPP",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_AR_SUPP",
            weapon_heavysniper_mk2 = "COMPONENT_AT_SR_SUPP_03",
        },

        barrel_attachment = {
            weapon_smg_mk2 = "COMPONENT_AT_SB_BARREL_02",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_BP_BARREL_02",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_SC_BARREL_02",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_AR_BARREL_02",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_CR_BARREL_02",
            weapon_combatmg_mk2 = "COMPONENT_AT_MG_BARREL_02",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_MRFL_BARREL_02",
            weapon_heavysniper_mk2 = "COMPONENT_AT_SR_BARREL_02",
        },
        grip_attachment = {
            weapon_combatpdw = "COMPONENT_AT_AR_AFGRIP",
            weapon_assaultshotgun = "COMPONENT_AT_AR_AFGRIP",
            weapon_bullpupshotgun = "COMPONENT_AT_AR_AFGRIP",
            weapon_heavyshotgun = "COMPONENT_AT_AR_AFGRIP",
            weapon_assaultrifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_carbinerifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_advancedrifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_specialcarbine = "COMPONENT_AT_AR_AFGRIP",
            weapon_bullpuprifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_bullpuprifle_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_specialcarbine_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_assaultrifle_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_carbinerifle_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_heavyrifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_combatmg = "COMPONENT_AT_AR_AFGRIP",
            weapon_combatmg_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_marksmanrifle = "COMPONENT_AT_AR_AFGRIP",
            weapon_marksmanrifle_mk2 = "COMPONENT_AT_AR_AFGRIP_02",
            weapon_grenadelauncher = "COMPONENT_AT_AR_AFGRIP",
        },
        comp_attachment = {
            weapon_pistol_mk2 = "COMPONENT_AT_PI_COMP",
            weapon_snspistol_mk2 = "COMPONENT_AT_PI_COMP_02",
            weapon_revolver_mk2 = "COMPONENT_AT_PI_COMP_03",
        },
        cylinder_attatchment = {
        },

        cylinder_attatchment_1 = {
        },

        cylinder_attatchment_2 = {
        },

        -- MISC
        misc_attatchment = {
        },

        misc_attatchment_1 = {
        },

        misc_attatchment_2 = {
        },

        misc_attatchment_3 = {
        },

        misc_attatchment_4 = {
        },

        -- Tube
        tube_attachment = {
        },

        tube_attachment_1 = {
        },

        tube_attachment_2 = {
        },

        tube_attachment_3 = {
        },

        -- Mags
        clip_attachment_1 = {
        },

        clip_attachment_2 = {
        },

        clip_attachment_3 = {
        },

        clip_attachment_4 = {
        },

        clip_attachment_5 = {
        },

        clip_attachment_6 = {
        },

        clip_attachment_7 = {
        },

        clip_attachment_8 = {
        },

        clip_attachment_9 = {
        },

        -- Flashlights

        flashlight_attachment_1 = {
        },

        flashlight_attachment_2 = {
        },

        flashlight_attachment_3 = {
        },

        flashlight_attachment_4 = {
        },

        flashlight_attachment_5 = {
        },

        flashlight_attachment_6 = {
        },

        flashlight_attachment_7 = {
        },

        flashlight_attachment_8 = {
        },

        flashlight_attachment_9 = {
        },

        -- Grips

        grip_attachment_1 = {
        },

        grip_attachment_2 = {
        },

        grip_attachment_3 = {
        },

        grip_attachment_4 = {
        },

        grip_attachment_5 = {
        },

        grip_attachment_6 = {
        },

        grip_attachment_7 = {
        },

        grip_attachment_8 = {
        },


        -- Frames
        frame_attachment = {
        },

        frame_attachment_1 = {
        },

        frame_attachment_2 = {
        },

        frame_attachment_3 = {
        },

        frame_attachment_4 = {
        },

        frame_attachment_5 = {
        },

        frame_attachment_6 = {
        },

        frame_attachment_7 = {
        },

        frame_attachment_8 = {
        },

        frame_attachment_9 = {
        },

        -- Scopes
        scope_attachment_0 = {
        },

        scope_attachment_1 = {
        },

        scope_attachment_2 = {
        },

        scope_attachment_3 = {
        },

        scope_attachment_4 = {
        },

        scope_attachment_5 = {

        },

        scope_attachment_6 = {
        },

        scope_attachment_7 = {
        },

        scope_attachment_8 = {
        },

        scope_attachment_9 = {
        },

        scope_attachment_10 = {
        },

        -- Stocks
        stock_attachment = {
        },

        stock_attachment_1 = {
        },

        stock_attachment_2 = {
        },

        stock_attachment_3 = {
        },

        stock_attachment_4 = {
        },

        stock_attachment_5 = {
        },

        stock_attachment_6 = {
        },

        stock_attachment_7 = {
        },

        stock_attachment_8 = {
        },

        stock_attachment_9 = {
        },

        stock_attachment_10 = {
        },

        -- Suppressors

        suppressor_attachment_1 = {
        },

        suppressor_attachment_2 = {
        },

        suppressor_attachment_3 = {
        },

        suppressor_attachment_4 = {
        },

        suppressor_attachment_5 = {
        },

        suppressor_attachment_6 = {
        },

        suppressor_attachment_7 = {
        },

        suppressor_attachment_8 = {
        },

        suppressor_attachment_9 = {
        },

        -- Slides
        slide_attachment = {
        },

        slide_attachment_1 = {
        },

        slide_attachment_2 = {
        },

        slide_attachment_3 = {
        },

        slide_attachment_4 = {
        },

        slide_attachment_5 = {
        },

        slide_attachment_6 = {
        },

        slide_attachment_7 = {
        },

        slide_attachment_8 = {
        },

        slide_attachment_9 = {
        },

        -- Barrels

        barrel_attachment_1 = {
        },

        barrel_attachment_2 = {
        },

        barrel_attachment_3 = {
        },

        barrel_attachment_4 = {
        },

        barrel_attachment_5 = {
        },

        barrel_attachment_6 = {
        },

        barrel_attachment_7 = {
        },

        barrel_attachment_8 = {
        },

        barrel_attachment_9 = {
        },

        barrel_attachment_10 = {
        },

        barrel_attachment_11 = {
        },

        barrel_attachment_12 = {
        },

        barrel_attachment_13 = {
        },

        barrel_attachment_14 = {
        },

        barrel_attachment_15 = {
        },

        -- Muzzles
        muzzle_attachment = {
        },

        muzzle_attachment_1 = {
        },

        muzzle_attachment_2 = {
        },

        muzzle_attachment_3 = {
        },

        muzzle_attachment_4 = {
        },

        muzzle_attachment_5 = {
        },

        muzzle_attachment_6 = {
        },

        muzzle_attachment_7 = {
        },

        muzzle_attachment_8 = {
        },

        muzzle_attachment_9 = {
        },

        muzzle_attachment_10 = {
        },

        -- Handguards
        handguard_attachment = {
        },

        handguard_attachment_1 = {
        },

        handguard_attachment_2 = {
        },

        handguard_attachment_3 = {
        },

        handguard_attachment_4 = {
        },

        handguard_attachment_5 = {
        },

        handguard_attachment_6 = {
        },

        handguard_attachment_7 = {
        },

        handguard_attachment_8 = {
        },

        handguard_attachment_9 = {
        },

        -- Lasers
        laser_attachment = {
        },

        laser_attachment_1 = {
        },

        laser_attachment_2 = {
        },

        laser_attachment_3 = {
        },

        laser_attachment_4 = {
        },

        laser_attachment_5 = {
        },

        laser_attachment_6 = {
        },
    }
    local function getConfigWeaponAttachments()
        return WeaponAttachments
    end
    exports("getConfigWeaponAttachments", getConfigWeaponAttachments)
    `