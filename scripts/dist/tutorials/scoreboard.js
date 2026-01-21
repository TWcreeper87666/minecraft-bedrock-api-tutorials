import { world } from "@minecraft/server";
/*
scoreboard : https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scoreboard?view=minecraft-bedrock-stable

有 dynamicProperty 我就很少用記分板了，因為有人會用 msg @a[scores={test=50..}] 二分法來偷看別人資料😡
優點: 可以在遊戲中修改、做排行榜
缺點: 資料可以被玩家偷看
*/
export function main(player) {
    const scrbd = world.scoreboard;
    // 取得記分板，沒有的話就建立一個
    let scrbd_test;
    if (!scrbd.getObjective("test")) {
        scrbd_test = scrbd.addObjective("test", "測試");
    }
    else {
        scrbd_test = scrbd.getObjective("test");
    }
    scrbd_test.addScore(player, 1);
    player.sendMessage(`你在 test 記分板的分數為 ${scrbd_test.getScore(player)}`);
}
