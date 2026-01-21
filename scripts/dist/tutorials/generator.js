import { system } from "@minecraft/server";
export function main(player) {
    system.runJob(test(player)); // 每個 tick 跑一些直到跑完，防止遊戲被卡死
}
function* test(player) {
    // 可以用來執行要跑很久的東西，例如清空超大場地、(想不到了)
    let tick = system.currentTick;
    player.sendMessage(`開始執行! ${tick}`);
    for (let i = 0; i < 1000; i++) {
        player.runCommand("give @s stone");
        yield;
        if (tick !== system.currentTick) {
            tick = system.currentTick;
            player.sendMessage(`還在執行哦! ${tick}`);
        }
    }
    player.sendMessage(`執行結束! ${tick}`);
}
