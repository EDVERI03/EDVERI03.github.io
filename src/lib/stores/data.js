import { writable } from 'svelte/store';

export const popupActive = writable(false)
export const name = writable("fellow")
export const icon = writable("src/lib/assets/Portrait2.png")
export const description = writable()
export const color = writable()
export const win = writable(false)
export const winScreenActive = writable(false)