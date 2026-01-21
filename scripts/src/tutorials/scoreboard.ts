import { Player, ScoreboardObjective, world } from "@minecraft/server";

/* 
scoreboard : https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scoreboard?view=minecraft-bedrock-stable

優點: 可以直接在遊戲中修改、做排行榜
不過有 dynamicProperty 我就很少用記分板了
*/

export function main(player: Player) {
  const scrbd = world.scoreboard;

  // 取得記分板，沒有的話就建立一個
  let scrbd_test: ScoreboardObjective;
  if (!scrbd.getObjective("test")) {
    scrbd_test = scrbd.addObjective("test", "測試");
  } else {
    scrbd_test = scrbd.getObjective("test");
  }

  scrbd_test.addScore(player, 1);
  player.sendMessage(`你在 test 記分板的分數為 ${scrbd_test.getScore(player)}`);
}
