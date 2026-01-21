import { EffectType, system, world } from "@minecraft/server";

export function main() {
  // 訂閱按鈕點擊事件
  const buttonPushEvent = world.afterEvents.buttonPush.subscribe(
    ({ source, block }) => {
      const { x, y, z } = block.location;
      world.sendMessage(`${source.nameTag} 點了 ${x}, ${y}, ${z} 的按鈕`);
    },
  );

  // 取消訂閱按鈕點擊事件，我沒用過幾次😂
  world.afterEvents.buttonPush.unsubscribe(buttonPushEvent);

  // 另一個 afterEvents 案例，使用自定義的物品 (./items/test_item.json)
  world.afterEvents.itemUse.subscribe(({ source, itemStack }) => {
    if (itemStack.typeId !== "yb:test_item") return;
    world.sendMessage(`${source.nameTag} 使用了測試物品`);
  });

  // beforeEvents 將在事件發生前執行，因此可以選擇不要發生
  // 如果要做其他操作(修改類)，必須要在下一個 tick 執行
  world.beforeEvents.playerBreakBlock.subscribe((e) => {
    const { player, block } = e;
    e.cancel = true; // 取消破壞方塊

    world.sendMessage(`${player.nameTag} 破壞了 ${block.typeId}`); // 只是 sendMessage 的話可以直接執行

    system.run(() => {
      // 在下一個 tick 給漂浮效果五秒
      player.addEffect("levitation", 100);
    });
  });

  // 接收指令 /scriptevent，可以用這個來接收 Websocket 資料
  system.afterEvents.scriptEventReceive.subscribe(({ id, message }) => {
    world.sendMessage(`${id}: ${message}`);
  });
}
