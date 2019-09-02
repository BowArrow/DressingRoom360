import * as React from 'react';

const UUID_PATH = 'https://api.mojang.com/profiles/minecraft';
const SKIN_PATH = 'https://crafatar.com/skins/'
export function fetchPlayer(playerName) {
    fetch(UUID_PATH, {
        method: "POST",
        body: [playerName]
    })
    .then(res => {
        fetch(SKIN_PATH + res.id)
        .then(response => {
            
        })
    })
}