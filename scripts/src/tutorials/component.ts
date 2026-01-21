import {
  BlockComponentTypes,
  EntityComponentTypes,
  ItemComponentTypes,
  Player,
  SignSide,
  world,
} from "@minecraft/server";

/* 
entity component : https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entitycomponenttypes?view=minecraft-bedrock-stable
item component : https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcomponenttypes?view=minecraft-bedrock-stable
block component : https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockcomponenttypes?view=minecraft-bedrock-stable

找到感興趣的，直接在網頁 ctrl + F 搜尋就可以找到更詳細的文檔了
例如 entity component 裡面的 inventory，直接搜尋就能找到 EntityInventoryComponent
有裝 npm 套件的話，在 VSCode 就可以直接看了
*/

export function main(player: Player) {
  // 取得玩家背包
  const container = player.getComponent(
    EntityComponentTypes.Inventory,
  ).container;

  // 取得玩家目前手持物品
  const item = container.getItem(player.selectedSlotIndex);
  world.sendMessage(`ITEM TYPEID: ${item?.typeId}`);

  if (item) {
    // 取得物品的耐久度
    const durability = item.getComponent(ItemComponentTypes.Durability);
    world.sendMessage(`ITEM DURABILITY: ${durability?.damage}`);
  }

  // 取得腳下站的方塊
  const block = player.getBlockStandingOn();
  world.sendMessage(`BLOCK TYPEID: ${block.typeId}`);

  if (block) {
    // 取得方塊的告示牌組件
    const sign = block.getComponent(BlockComponentTypes.Sign);
    if (sign) {
      world.sendMessage(
        `SIGN TEXT: ${sign.getText(SignSide.Front)} ${sign.getText(SignSide.Back)}`,
      );
    }else{
      world.sendMessage(`${block.typeId} 不是告示牌!`)
    }
  }
}
