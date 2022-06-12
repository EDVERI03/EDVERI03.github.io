export const cards = [{ "name": "Large Man", "icon": "Portrait2.png", "description": "This stone-cold fellow apparently worked as a geologist before hitting rock-bottom and ending up here. The two of you had a rocky start but he does appear somewhat trustworthy.", "column": 0, "row": 0, "color": 0, "guilty": true},
{ "name": "(Almost) Nude Man", "icon": "Portrait1.png", "description": "This man wears only checker-print boxers and a pair of high-end sneakers. He appears relatively harmless. However, you do catch him staring at you from time to time, with his expression colored by a maddening ecstasy. His intentions are unknown to you, which you believe is for the better, as you wish to keep your sanity.", "column": 1, "row": 0, "color": 0, "guilty": false},
{ "name": "All-seeing woman", "icon": "Portrait3.png", "description": "In the many hours you have spent in this god-forsaken hall, you have not once seen this woman blink. And worse yet, everytime you look at her she locks her eyes with you, staring beyond you, into you, as if her cold glare penetrates your very soul.", "column": 0, "row": 1, "color": 0, "guilty": false},
{ "name": "Corpse", "icon": "Portrait4.png", "description": "It is not very talkative. Its skin is unnaturaly pale in complexion, except for the back of the head and lower back which appers as a marble pattern of green and blue bruises aswell as its face, pressed down into the floor at an unsettling angle, now discolored by lividity into a dramatic display of uncountable shades of reds and purples.", "column": 1, "row": 1, "color": 0, "guilty": false},]

let colorDeg = Math.floor(Math.random() * (360 + 1));
let positionInOrder = 0;

cards.forEach((card)=> {
    card["color"] = colorDeg + positionInOrder*(360/cards.length);
    positionInOrder++
})