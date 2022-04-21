local gcard = {}

SetNuiFocus(false, false)

gcard.Open = function()
    SendNUIMessage({
        action = "open"
    })
    SetNuiFocus(true, true)
end

gcard.Close = function()
    SendNUIMessage({
        action = "close"
    })
    SetNuiFocus(false, false)
end

RegisterNUICallback("close", function()
    SetNuiFocus(false, false)
end)

RegisterCommand("gcard", function(source)
    gcard.Open()
end)

--[[not necessary but available if needed
RegisterCommand("gcardx", function(source)
    gcard.Close()
end)]]--