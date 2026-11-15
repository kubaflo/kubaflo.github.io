# Florek Games website on GitHub Pages: status (2026-11-15)

Site: **https://kubaflo.github.io/** (repo https://github.com/kubaflo/kubaflo.github.io, public). Independent of florekgames.pl.
- app-ads.txt: https://kubaflo.github.io/app-ads.txt (AdMob line `google.com, pub-3335358119261286, DIRECT, f08c47fec0942fa0` first;
  old file deduplicated 1,548 → 1,044 lines, malformed lines fixed. The ~1,040 non-Google lines are a leftover Start.io list;
  no current project ships another ad SDK, so they can be trimmed to the AdMob line).
- Content copied unchanged from the old florekgames.pl site, plus new policies for Hoops Cup, Kick Clash, Capes Up,
  Tune Showdown, Cztery Kule. Not copied: server-side .php, .htaccess, Unity .meta files.

## How AdMob will find app-ads.txt
AdMob reads app-ads.txt from the root of the developer website in each store listing. github.io is a public suffix,
so `kubaflo.github.io` is its own domain and https://kubaflo.github.io/app-ads.txt is valid.
Every store listing must therefore use **https://kubaflo.github.io** as its developer website:
- Google Play: Grow → Store presence → Store settings → Contact details → Website. Editable any time; goes through review.
- App Store Connect: Marketing URL (and Support URL) on the app version page. Version-level metadata: changes ship with the next version.

## App → privacy policy URL (use in store listings and AdMob)
| App | Platform / store ID | Privacy policy |
|---|---|---|
| 2 3 4 Basketball Games | iOS 1611990792 | https://kubaflo.github.io/privacy_policy_234_basketball.html |
| 2 3 4 Basketball Games | Android com.kubaflo.BasketballGames | https://kubaflo.github.io/privacy_policy_234_basketball.html |
| 2 3 4 Soccer Games: Football | iOS 1607203223 | https://kubaflo.github.io/privacy_policy_234_soccer.html |
| 2 3 4 Soccer Games: Football | Android com.kubaflo.SoccerGames | https://kubaflo.github.io/privacy_policy_234_soccer.html |
| 2 3 4 Tennis Games | iOS 1624077453 | https://kubaflo.github.io/privacy_policy_234_tennis.html |
| 2 3 4 Tennis Games | Android com.kubaflo.TennisGames | https://kubaflo.github.io/privacy_policy_234_tennis.html |
| 2 3 4 Heroes Games | iOS 1507613903 | https://kubaflo.github.io/heroes_privacy_policy.html |
| 2 3 4 Heroes: 2 Player Games | Android com.kubaflo.avangers | https://kubaflo.github.io/heroes_privacy_policy.html |
| Jaka To Piosenka? | iOS 1507276590 | https://kubaflo.github.io/jaka_to_piosenka_ios_privacy_policy.html |
| Guess That Song - Music Game | Android com.kubaflo.JakaToPiosenka | https://kubaflo.github.io/privacy_policy_jaka_to_piosenka.html |
| Jaka To Piosenka? Zgadnij hit | Android com.kubaflo.JakaToPiosenka2 | https://kubaflo.github.io/privacy_policy_jaka_to_piosenka.html |
| Jaka To Piosenka? Zgadnij hit | iOS (not store-linked) | https://kubaflo.github.io/privacy_policy_jaka_to_piosenka.html |
| Guess That Song - Musical Quiz | iOS 1511445292 | https://kubaflo.github.io/privacy_policy_name_that_song.html |
| Guess That Song - Free&Fun | Android com.kubaflo.NameThatSong | https://kubaflo.github.io/privacy_policy_name_that_song.html |
| Passat w Minute | iOS 1507481093 | https://kubaflo.github.io/passat_ios_privacy_policy.html |
| Passat w Minute | Android kubaflo.pl | https://kubaflo.github.io/privacy_policy_passat_w_minute.html |
| Crossroads & Intersections | iOS 1541762555 | https://kubaflo.github.io/krzyzowki_privacy_policy.html |
| Crossroads - The Driving Test | Android com.kubaflo.crossroads | https://kubaflo.github.io/krzyzowki_privacy_policy.html |
| Wordzzle | iOS 1668701501 | https://kubaflo.github.io/privacy_policy_wordzzle.html |
| Wordzzle | Android com.kubaflo.wordzzle | https://kubaflo.github.io/privacy_policy_wordzzle.html |
| WordCraft | iOS 6464140289 | https://kubaflo.github.io/privacy_policy_wordcraft.html |
| WordCraft | Android com.kubaflo.wordcraft | https://kubaflo.github.io/privacy_policy_wordcraft.html |
| #Drawbook | iOS 1571314690 | https://kubaflo.github.io/privacy_policy_drawbook.html |
| #Drawbook | Android com.kubaflo.drawbook | https://kubaflo.github.io/privacy_policy_drawbook.html |
| HeyTeacher! | iOS 1536596128 | https://kubaflo.github.io/privacy_policy_hey_teacher.html |
| HeyTeacher! | Android com.heyteacher.HeyTeacher | https://kubaflo.github.io/privacy_policy_hey_teacher.html |
| Janusz w Programie | Android com.kubaflo.JanuszWProgramie | https://kubaflo.github.io/privacy_policy_janusz_w_programie.html |
| Janusz w Programie | Android com.kubaflo.JanuszwProgramie | https://kubaflo.github.io/privacy_policy_janusz_w_programie.html |
| Becik Simulator | Android com.kubaflo.Becik_Simulator | https://kubaflo.github.io/privacy_policy_becik_simulator.html |
| Cztery Kule | Android com.kubaflo.CzteryKule | https://kubaflo.github.io/privacy_policy_cztery_kule.html |
| 2 Player Basketball: Hoops Cup | Android + iOS (not store-linked) | https://kubaflo.github.io/privacy_policy_hoops_cup.html |
| Kick Clash | Android + iOS (not store-linked) | https://kubaflo.github.io/privacy_policy_kick_clash.html |
| Capes Up: Hero Party | Android + iOS (not store-linked) | https://kubaflo.github.io/privacy_policy_capes_up.html |
| Tune Showdown | Android + iOS (not store-linked) | https://kubaflo.github.io/privacy_policy_tune_showdown.html |

Archived in AdMob, skipped: 2 3 4 Avengers Game, Cebuliada (HeinzelStudio), Jaka To Piosenka ??, Passat w minute #2.

## AdMob app-ads.txt status today (before any listing change)
12 apps verified via http(s)://florekgames.pl/app-ads.txt (234 Basketball/Soccer/Tennis/Heroes iOS, Jaka To Piosenka? iOS,
Guess That Song Music Game Android, Guess That Song Musical Quiz iOS, Passat iOS, Crossroads iOS, Wordzzle iOS + Android, Drawbook iOS).
HeyTeacher! iOS: no app-ads.txt found (its developer site heyteacher.pl is dead).
These stay verified only while florekgames.pl keeps serving its file; after each listing switches to kubaflo.github.io,
AdMob re-crawls within ~24 h (App Store changes can take up to 7 days).

## Remaining manual steps
1. Store listings (all apps above): developer website → https://kubaflo.github.io, privacy policy → URL from the table.
2. AdMob consent messages (Privacy & messaging): change privacy URLs from florekgames.pl/... to kubaflo.github.io/... (owned by the other session).
3. AdMob → Apps → app-ads.txt → re-check after listings change.
