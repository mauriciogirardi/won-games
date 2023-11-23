import { useGames } from '@/hooks/useGames'
import { useHighlight } from '@/hooks/useHighlight'
import { GameTemplate } from '@/templates/game/GameTemplate'

import { mockGallery } from '@/components/gallery/mock'
import { mockGameInfo } from '@/components/game-info/mock/mockGameInfo'
import { mockGameDetails } from '@/components/game-details/mock'

export default function Game() {
  const { games } = useGames()
  const { highlight } = useHighlight()

  return (
    <GameTemplate
      cover="/img/games/cyberpunk-1.jpg"
      gallery={mockGallery}
      gameDetails={mockGameDetails}
      gameInfo={mockGameInfo}
      games={games}
      highlight={highlight}
      content={`
    <p class="module">Brace yourself for new adventures set in your favorite universe thanks to the&nbsp;<a href="https://www.gog.com/game/pathfinder_wrath_of_the_righteous_the_last_sarkorians">The Last Sarkorians DLC</a>!</p><br><br><div style="overflow: hidden;"><a href="https://www.gog.com/game/pathfinder_wrath_of_the_righteous_season_pas"><img src="https://items.gog.com/pathfinder_wrath_of_the_righteous/main_main_PATHFINDER_WOTR_SEASON_PASS.png" style="margin: 5px 15px 0 10px; float: left; width: 250px"></a><span style="display: block;"><br><br>
    You can also get <b>Pathfinder: Wrath of the Righteous - Season Pass</b><a href="https://www.gog.com/game/pathfinder_wrath_of_the_righteous_season_pass"> here.</a></span></div><hr><br><h4>Discover the Story</h4>Your path will lead you to the Worldwound, where the opening of a rift to the Abyss has unleashed all-consuming terror across the land. For over a century, the neighboring nations have fought fearlessly, trying to drive the enemy back — but to little avail.
    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/pathfinder_wrath_of_the_righteous/PF2__4_1.webm"></video><br>
    Now, you have the chance to put an end to this conflict, but the path to salvation is far from clear-cut. Will you become a shining angel, backed by noble paladins? Or a powerful necromancer with hordes of immortal undead in your thrall? Or something else entirely? Lead your army and challenge mighty demon lords. Your crusade will set in motion a chain of events that will leave you — and the world itself — forever changed.<h4>PLAY YOUR HERO, YOUR WAY</h4>Create any character imaginable with the flexibility, richness, and depth of the Pathfinder First Edition ruleset. Choose from 25 classes, 12 character races, and more than a thousand spells, feats, and abilities to suit your personal playstyle.
    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/pathfinder_wrath_of_the_righteous/PF2__9_.webm"></video><h4>FOR EVERY CHOICE, A CONSEQUENCE</h4>Your decisions have more weight than ever before. Your goal is clear, but you must forge your own path to it. Who will die, and who will live? Who will stay, and who will go? Make your choices, and watch the world around you change.
    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/pathfinder_wrath_of_the_righteous/PF2__6_.webm"></video><h4>A NEW WAY TO FIGHT</h4>Enjoy two combat modes as you slay your enemies – real-time with pause or turn-based. Switch between them on the fly, so you can always take things as slowly — or as quickly — as you like. The unique Pathfinder ruleset also allows you to perform advanced combat maneuvers, like mounted combat. Use them wisely!
    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/pathfinder_wrath_of_the_righteous/PF2__7_.webm"></video><h4>GATHER YOUR PARTY</h4>A cast of more than 10 unique companions is ready to join your cause. Earn their trust and respect, and they will have your back no matter what dangers lie ahead. And if you get on their bad side, well… Maybe it’s time to part ways.
    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/pathfinder_wrath_of_the_righteous/PF2__8_.webm"></video><h4>LEAD THE CRUSADE</h4>You will need much more than a party of adventurers to cleanse the land of its demonic scourge. Take command of the crusaders and lead them to victory – both as a strategist, controlling the battle from above, and as a field commander, in a new tactical combat mode.
    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/pathfinder_wrath_of_the_righteous/PF2__3_.webm"></video><h4>CHOOSE YOUR PATH</h4>Explore nine unique Mythic Paths: obtain extraordinary abilities and shape everything that comes next. Your decisions might transform you into a celestial Angel, a raging Demon, a powerful Lich, a cunning Trickster, an otherworldly Aeon, a rebellious Azata, a wise Gold Dragon, an insatiable Swarm That Walks — or remain mortal and walk the arduous path toward becoming a living Legend.
    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/pathfinder_wrath_of_the_righteous/PF2__1_.webm"></video>
  `}
    />
  )
}
