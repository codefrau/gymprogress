# Gym Badge Progress Tracker for Pokémon GO

This is the progress tracker I made for our local community in Magdeburg, Germany.

It uses a [static list of gyms](gymdata.js) so there is no TOS violation.

## Try it

You can see the Magdeburg instance running at https://freudenbergs.de/bert/gymprogress/.
Click the badges to change level.
Badges are stored only in the browser's `localStorage`, not on the server.
Badges can be transfered/saved, you can use [mine](https://freudenbergs.de/bert/gymprogress/?2021001101110203000010001110201301000300200011111100011100101102200120330110032211101001000220211000101000100002101011000200010100223010000020001010122221121000210200100310110100223122111133010222001010330111100031001000000200) for testing.
You can also [clear](https://freudenbergs.de/bert/gymprogress/?0) them again.

## To adapt this to your city

Clone this repo, replace the [`gymdata.js`](gymdata.js) file, host it on some website, and share that URL in your community.

I used the method outlined by u/Tntnnbltn to generate the [list of gyms eligible for
EX raids](https://www.reddit.com/r/TheSilphRoad/comments/7ojuoi/how_to_determine_which_gyms_are_eligible_from_ex/).

You can use either my [English](gymtracker-en.html) or [German](gymtracker-de.html) html files, or add your own translation.

## Contributing

If you have any fixes or additions, or e.g. you translate the [`gymtracker.html`](gymtracker-en.html) file to another language,
[please send a pull request](https://github.com/bertfreudenberg/gymprogress/pulls).

## Thanks

I have learned a lot about Pokémon GO in the incredible [SilphRoad](https://www.reddit.com/r/TheSilphRoad) community.
Thank you, travelers!
