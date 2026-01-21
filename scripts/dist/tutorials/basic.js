import { world, system } from "@minecraft/server";
/*
world : https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/world?view=minecraft-bedrock-stable
system : https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/system?view=minecraft-bedrock-stable
*/
export function main() {
    // 輸出到聊天室
    world.sendMessage("Hello World!");
    // 取得所有玩家
    const players = world.getAllPlayers();
    // 每一秒執行一次(20 ticks)
    system.runInterval(() => {
        for (const player of players) {
            player.onScreenDisplay.setActionBar("Hello World!");
        }
    }, 20);
    // 下一 tick 再執行
    system.run(() => {
        world.sendMessage("next tick");
    });
    // 取得主世界
    const overworld = world.getDimension("overworld"); // "overworld", "nether" or "the_end".
    //執行指令
    overworld.runCommand("say hi");
    // 取得方塊
    try {
        const block = overworld.getBlock({ x: 0, y: 0, z: 0 });
        world.sendMessage(block.typeId);
    }
    catch (e) {
        // 處理無法取得方塊
        world.sendMessage(e.message);
    }
    // 取得實體
    const pigs = overworld.getEntities({ type: "pig", closest: 2 }); // 跟指令的 selector 差不多
    for (const pig of pigs)
        pig.remove(); // 移除實體
    try {
        // 生成雞
        overworld.spawnEntity("minecraft:chicken", { x: 0, y: 10, z: 0 });
    }
    catch { }
}
